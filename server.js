const http = require('node:http');
const { exec, spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const HOST = '127.0.0.1';
const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const MAX_BODY = 32 * 1024;
const sessionKeys = new Map();
const providers = {
  openrouter: { name: 'OpenRouter Free', model: 'openrouter/free', env: 'OPENROUTER_API_KEY', detail: 'Free router · 50 permintaan sehari pada akaun percuma', privacy: 'Model percuma datang daripada penyedia berbeza; semak dasar data model yang dipilih.' },
  gemini: { name: 'Google Gemini', model: 'gemini-2.5-flash', env: 'GEMINI_API_KEY', detail: 'Gemini 2.5 Flash · free tier tersedia', privacy: 'Kandungan dalam free tier boleh digunakan Google untuk menambah baik produk. Gunakan kunci projek free tier sahaja.' },
  groq: { name: 'Groq Free', model: 'openai/gpt-oss-20b', env: 'GROQ_API_KEY', detail: 'Akaun Free · had penggunaan mengikut model', privacy: 'Gunakan akaun Free tanpa billing untuk kekal percuma. Had model boleh berubah.' },
};
const localAgents = {
  codex: { name: 'Codex', command: 'codex', detail: 'Codex CLI · sesi ChatGPT atau kaedah log masuk Codex' },
  opencode: { name: 'OpenCode', command: 'opencode', detail: 'OpenCode CLI · model dan penyedia dikawal konfigurasi OpenCode' },
};
const systemPrompt = 'You are an AI in a shared Termux workspace. Reply in the user\'s language. You may inspect the current project through your local agent tools only where configured. Never claim a shell command has run unless the tool returned its result. If a command is needed, explain it and put the exact command in one fenced bash code block so the user can review and run it in the Termux panel.';

function send(res, status, body, type = 'application/json; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
  res.end(type.startsWith('application/json') ? JSON.stringify(body) : body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      if (Buffer.byteLength(data) > MAX_BODY) { reject(new Error('Permintaan terlalu panjang.')); req.destroy(); }
    });
    req.on('end', () => {
      try { resolve(JSON.parse(data || '{}')); }
      catch { reject(new Error('Format permintaan tidak sah.')); }
    });
    req.on('error', reject);
  });
}

function getKey(id) {
  const provider = providers[id];
  return sessionKeys.get(id) || (provider && process.env[provider.env]);
}

function runProcess(command, args, timeout = 150_000) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: process.cwd(), env: process.env, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', chunk => { if (stdout.length < 256_000) stdout += chunk; });
    child.stderr.on('data', chunk => { if (stderr.length < 32_000) stderr += chunk; });
    const timer = setTimeout(() => { child.kill('SIGTERM'); reject(new Error(`${command} tamat masa selepas ${Math.round(timeout / 1000)} saat.`)); }, timeout);
    child.on('error', error => { clearTimeout(timer); reject(new Error(`${command} tidak dapat dimulakan. Pastikan CLI dipasang dan tersedia dalam PATH.`)); });
    child.on('close', code => {
      clearTimeout(timer);
      if (code !== 0) return reject(new Error((stderr || stdout || `${command} keluar dengan kod ${code}.`).trim().slice(-1400)));
      resolve({ stdout: stdout.trim(), stderr: stderr.trim() });
    });
  });
}

function parseCodexOutput(raw) {
  const found = [];
  for (const line of raw.split('\n')) {
    try {
      const event = JSON.parse(line);
      if (event.type === 'item.completed' && event.item?.type === 'agent_message' && event.item.text) found.push(event.item.text);
      if (event.type === 'turn.completed' && event.last_agent_message) found.push(event.last_agent_message);
    } catch { /* Keep non-JSON CLI output as fallback. */ }
  }
  return found.at(-1) || raw;
}

async function callApiProvider(id, messages, key = getKey(id)) {
  const provider = providers[id];
  if (!provider || !key) throw new Error(`Sambungkan kunci ${provider?.name || 'AI'} dahulu.`);
  const promptMessages = [{ role: 'system', content: systemPrompt }, ...messages];
  let endpoint;
  let headers;
  let body;
  if (id === 'gemini') {
    endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${provider.model}:generateContent?key=${encodeURIComponent(key)}`;
    headers = { 'Content-Type': 'application/json' };
    body = {
      system_instruction: { parts: [{ text: systemPrompt }] },
      contents: messages.map(item => ({ role: item.role === 'assistant' ? 'model' : 'user', parts: [{ text: item.content }] })),
      generationConfig: { maxOutputTokens: 1200 },
    };
  } else {
    endpoint = id === 'openrouter' ? 'https://openrouter.ai/api/v1/chat/completions' : 'https://api.groq.com/openai/v1/chat/completions';
    headers = { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' };
    if (id === 'openrouter') Object.assign(headers, { 'HTTP-Referer': 'http://127.0.0.1:3000', 'X-Title': 'ruangAI Termux' });
    body = { model: provider.model, messages: promptMessages, max_tokens: 1200 };
  }
  const response = await fetch(endpoint, { method: 'POST', signal: AbortSignal.timeout(90_000), headers, body: JSON.stringify(body) });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error?.message || `Penyedia membalas dengan status ${response.status}.`);
  const text = id === 'gemini' ? data.candidates?.[0]?.content?.parts?.map(part => part.text || '').join('') : data.choices?.[0]?.message?.content;
  return text || 'Model tidak memulangkan teks.';
}

async function callAgent(id, messages) {
  const prompt = `${systemPrompt}\n\nPerbualan:\n${messages.map(item => `${item.role === 'assistant' ? 'Assistant' : 'User'}: ${item.content}`).join('\n\n')}`;
  if (id === 'codex') {
    const result = await runProcess('codex', ['exec', '--json', '--sandbox', 'read-only', '--skip-git-repo-check', prompt]);
    return parseCodexOutput(result.stdout);
  }
  if (id === 'opencode') {
    const result = await runProcess('opencode', ['run', '--agent', 'plan', prompt]);
    return result.stdout || result.stderr || 'OpenCode tidak memulangkan teks.';
  }
  throw new Error('Ejen lokal tidak dikenali.');
}

async function askParticipant(id, messages) {
  return providers[id] ? callApiProvider(id, messages) : callAgent(id, messages);
}

function availableCommand(command) {
  return new Promise(resolve => {
    exec(`command -v ${command}`, { timeout: 3000 }, error => resolve(!error));
  });
}

function safeError(error, secret) {
  let message = error && error.name === 'TimeoutError' ? 'Permintaan tamat masa. Cuba semula.' : (error.message || 'Permintaan gagal.');
  if (secret) message = message.split(secret).join('[kunci dirahsiakan]');
  return message.slice(0, 1200);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${HOST}:${PORT}`);
  if (req.method === 'GET' && url.pathname === '/api/status') {
    return send(res, 200, { connected: true, host: HOST, cwd: process.cwd(), node: process.version, platform: process.platform });
  }
  if (req.method === 'GET' && url.pathname === '/api/providers') {
    return send(res, 200, { providers: Object.entries(providers).map(([id, item]) => ({ id, name: item.name, model: item.model, detail: item.detail, privacy: item.privacy, connected: Boolean(getKey(id)), keySource: sessionKeys.has(id) ? 'session' : (process.env[item.env] ? 'environment' : null) })) });
  }
  if (req.method === 'GET' && url.pathname === '/api/agents') {
    const agents = await Promise.all(Object.entries(localAgents).map(async ([id, item]) => ({ id, name: item.name, detail: item.detail, installed: await availableCommand(item.command) })));
    return send(res, 200, { agents });
  }
  if (req.method === 'POST' && url.pathname.startsWith('/api/providers/') && url.pathname.endsWith('/key')) {
    const id = url.pathname.split('/')[3];
    if (!providers[id]) return send(res, 404, { error: 'Penyedia tidak dikenali.' });
    try {
      const { key } = await readBody(req);
      if (typeof key !== 'string') return send(res, 400, { error: 'Kunci tidak sah.' });
      if (key.trim()) sessionKeys.set(id, key.trim());
      else sessionKeys.delete(id);
      return send(res, 200, { ok: true, connected: Boolean(getKey(id)), keySource: sessionKeys.has(id) ? 'session' : (process.env[providers[id].env] ? 'environment' : null) });
    } catch (error) { return send(res, 400, { error: error.message }); }
  }
  if (req.method === 'POST' && (url.pathname === '/api/chat' || url.pathname === '/api/collaborate')) {
    let secret;
    try {
      const request = await readBody(req);
      const { messages } = request;
      if (!Array.isArray(messages) || messages.length < 1 || messages.length > 20) return send(res, 400, { error: 'Perbualan mesti mengandungi 1 hingga 20 mesej.' });
      const clean = messages.map(message => {
        if (!message || !['user', 'assistant'].includes(message.role) || typeof message.content !== 'string' || message.content.length > 8000) throw new Error('Mesej tidak sah atau terlalu panjang.');
        return { role: message.role, content: message.content };
      });
      if (url.pathname === '/api/chat') {
        const { provider } = request;
        secret = getKey(provider);
        if (!providers[provider] && !localAgents[provider]) return send(res, 400, { error: 'Penyedia AI tidak dikenali.' });
        if (providers[provider] && !secret) return send(res, 400, { error: `Sambungkan kunci ${providers[provider].name} dahulu.` });
        const reply = await askParticipant(provider, clean);
        return send(res, 200, { reply, provider, model: providers[provider]?.model || localAgents[provider].name });
      }
      const { participants, lead } = request;
      if (!Array.isArray(participants) || participants.length < 2 || participants.length > 5 || new Set(participants).size !== participants.length) return send(res, 400, { error: 'Pilih antara 2 hingga 5 ejen yang berbeza untuk kolaborasi.' });
      for (const id of participants) {
        if (!providers[id] && !localAgents[id]) return send(res, 400, { error: 'Senarai ejen mengandungi pilihan yang tidak sah.' });
        if (providers[id] && !getKey(id)) return send(res, 400, { error: `Sambungkan kunci ${providers[id].name} dahulu.` });
      }
      if (!participants.includes(lead)) return send(res, 400, { error: 'Pilih ejen utama daripada panel.' });
      const results = await Promise.all(participants.map(async id => {
        try { return { id, name: providers[id]?.name || localAgents[id].name, reply: await askParticipant(id, clean) }; }
        catch (error) { return { id, name: providers[id]?.name || localAgents[id].name, error: safeError(error, getKey(id)) }; }
      }));
      const successes = results.filter(result => result.reply);
      if (successes.length < 2) return send(res, 502, { error: 'Kurang daripada dua ejen berjaya memberi jawapan.', results });
      const notes = successes.map(result => `### ${result.name}\n${result.reply}`).join('\n\n');
      const task = clean.at(-1).content;
      const synthesisMessages = [{ role: 'user', content: `Tugasan asal: ${task}\n\nJawapan ejen lain untuk dibandingkan:\n${notes}\n\nBekerjasama: nyatakan persamaan, perbezaan penting, dan berikan jawapan akhir yang disatukan. Jika perlu arahan Termux, letakkan arahan tepat dalam satu blok bash untuk disemak pengguna.` }];
      const summary = await askParticipant(lead, synthesisMessages);
      return send(res, 200, { results, summary, lead });
    } catch (error) { return send(res, 502, { error: safeError(error, secret) }); }
  }
  if (req.method === 'POST' && url.pathname === '/api/command') {
    try {
      const { command } = await readBody(req);
      if (typeof command !== 'string' || !command.trim()) return send(res, 400, { error: 'Masukkan arahan terlebih dahulu.' });
      if (command.length > 2000) return send(res, 400, { error: 'Arahan maksimum 2,000 aksara.' });
      exec(command, { cwd: process.cwd(), timeout: 30_000, maxBuffer: 128 * 1024, env: process.env }, (error, stdout, stderr) => {
        send(res, 200, { ok: !error, code: error && Number.isInteger(error.code) ? error.code : (error ? 1 : 0), output: [stdout, stderr].filter(Boolean).join('\n').slice(0, 16_000), timedOut: Boolean(error && error.killed) });
      });
    } catch (error) {
      if (!res.headersSent && !res.destroyed) send(res, 400, { error: error.message });
    }
    return;
  }
  if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/index.html')) return send(res, 200, fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'), 'text/html; charset=utf-8');
  if (req.method === 'GET' && url.pathname === '/style.css') return send(res, 200, fs.readFileSync(path.join(ROOT, 'style.css'), 'utf8'), 'text/css; charset=utf-8');
  if (req.method === 'GET' && url.pathname === '/style-overrides.css') return send(res, 200, fs.readFileSync(path.join(ROOT, 'style-overrides.css'), 'utf8'), 'text/css; charset=utf-8');
  if (req.method === 'GET' && url.pathname === '/app.js') return send(res, 200, fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8'), 'text/javascript; charset=utf-8');
  send(res, 404, { error: 'Halaman tidak ditemui.' });
});

server.listen(PORT, HOST, () => {
  console.log(`AI Termux Dashboard: http://${HOST}:${PORT}`);
  console.log(`Direktori kerja arahan: ${process.cwd()}`);
});
