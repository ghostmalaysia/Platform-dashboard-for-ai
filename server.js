const http = require('node:http');
const { exec } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const HOST = '127.0.0.1';
const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const MAX_BODY = 8 * 1024;

function send(res, status, body, type = 'application/json; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
  res.end(type.startsWith('application/json') ? JSON.stringify(body) : body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      if (data.length > MAX_BODY) { reject(new Error('Arahan terlalu panjang.')); req.destroy(); }
    });
    req.on('end', () => {
      try { resolve(JSON.parse(data || '{}')); }
      catch { reject(new Error('Format permintaan tidak sah.')); }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${HOST}:${PORT}`);
  if (req.method === 'GET' && url.pathname === '/api/status') {
    return send(res, 200, { connected: true, host: HOST, cwd: process.cwd(), node: process.version, platform: process.platform });
  }
  if (req.method === 'POST' && url.pathname === '/api/command') {
    try {
      const { command } = await readBody(req);
      if (typeof command !== 'string' || !command.trim()) return send(res, 400, { error: 'Masukkan arahan terlebih dahulu.' });
      if (command.length > 2000) return send(res, 400, { error: 'Arahan maksimum 2,000 aksara.' });
      exec(command, { cwd: process.cwd(), timeout: 30_000, maxBuffer: 128 * 1024, env: process.env }, (error, stdout, stderr) => {
        send(res, 200, {
          ok: !error,
          code: error && Number.isInteger(error.code) ? error.code : (error ? 1 : 0),
          output: [stdout, stderr].filter(Boolean).join('\n').slice(0, 16_000),
          timedOut: Boolean(error && error.killed),
        });
      });
    } catch (error) {
      if (!res.headersSent && !res.destroyed) send(res, 400, { error: error.message });
    }
    return;
  }
  if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/index.html')) {
    return send(res, 200, fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'), 'text/html; charset=utf-8');
  }
  if (req.method === 'GET' && url.pathname === '/style.css') {
    return send(res, 200, fs.readFileSync(path.join(ROOT, 'style.css'), 'utf8'), 'text/css; charset=utf-8');
  }
  if (req.method === 'GET' && url.pathname === '/app.js') {
    return send(res, 200, fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8'), 'text/javascript; charset=utf-8');
  }
  send(res, 404, { error: 'Halaman tidak ditemui.' });
});

server.listen(PORT, HOST, () => {
  console.log(`AI Termux Dashboard: http://${HOST}:${PORT}`);
  console.log(`Direktori kerja arahan: ${process.cwd()}`);
});
