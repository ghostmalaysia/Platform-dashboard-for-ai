const providerInfo = {
  openrouter: { name: 'OpenRouter Free', model: 'Model percuma auto', badge: 'free', placeholder: 'Model percuma dipilih secara automatik.', symbol: 'OR' },
  gemini: { name: 'Google Gemini', model: 'Gemini 2.5 Flash', badge: 'free tier', placeholder: 'Kunci AI Studio free tier.', symbol: 'G' },
  groq: { name: 'Groq', model: 'GPT OSS 20B', badge: 'free tier', placeholder: 'Kunci akaun Groq Free.', symbol: 'GQ' },
};
const agentInfo = {
  codex: { name: 'Codex', model: 'Codex CLI', detail: 'Pemeriksa lokal · baca sahaja', symbol: 'C' },
  opencode: { name: 'OpenCode', model: 'OpenCode Plan', detail: 'Ejen lokal · mod perancangan', symbol: 'O' },
};
const providersState = new Map();
const agentsState = new Map();
const history = [];
const $ = selector => document.querySelector(selector);
const messages = $('#messages');
const input = $('#chat-input');
const sendButton = $('#send-button');
let toastTimer;
let busy = false;

function toast(message) {
  const node = $('#toast');
  node.textContent = message;
  node.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove('visible'), 3200);
}

function selectedAvailable(id) {
  return providersState.get(id)?.connected || agentsState.get(id)?.installed || false;
}

function selectedLabel(id) { return providerInfo[id]?.name || agentInfo[id]?.name || id; }

function selectedDescription(id) {
  if (providerInfo[id]) return {
    openrouter: 'OpenRouter Free menghala ke model-model percuma yang tersedia. Had akaun percuma: sehingga 50 permintaan sehari.',
    gemini: 'Gemini 2.5 Flash pada free tier. Google mungkin menggunakan kandungan free tier untuk menambah baik produk.',
    groq: 'Groq GPT OSS 20B. Gunakan akaun Free dan jangan aktifkan billing untuk kekal tanpa caj.',
  }[id];
  return agentInfo[id]?.detail || 'Pilih ejen AI.';
}

function updateSelectedProvider() {
  const id = $('#provider-select').value;
  const online = selectedAvailable(id);
  $('#selected-dot').classList.toggle('connected', Boolean(online));
  $('#provider-description').textContent = selectedDescription(id);
  $('#composer-model').textContent = `${selectedLabel(id)} · ${providerInfo[id]?.model || agentInfo[id]?.model || 'sambungan lokal'}`;
  $('#context-note').textContent = `${history.length} mesej dalam sesi ini`;
}

function addText(node, text) {
  node.append(document.createTextNode(text));
}

function renderMessage(role, content, label) {
  $('#welcome')?.remove();
  const wrapper = document.createElement('div');
  wrapper.className = `message${role === 'user' ? ' user' : ''}`;
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = role === 'user' ? 'H' : (label?.[0] || '✳');
  const body = document.createElement('div');
  body.className = 'message-body';
  if (role === 'assistant') {
    const meta = document.createElement('div');
    meta.className = 'message-meta';
    meta.textContent = label || selectedLabel($('#provider-select').value);
    body.append(meta);
    const parts = content.split(/```(?:bash|sh|shell|termux)?\s*\n([\s\S]*?)```/gi);
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        if (parts[i]) { const block = document.createElement('span'); addText(block, parts[i]); body.append(block); }
      } else {
        const commandCard = document.createElement('div');
        commandCard.className = 'command-suggestion';
        const code = document.createElement('pre');
        code.textContent = parts[i].trim();
        const action = document.createElement('button');
        action.type = 'button';
        action.className = 'review-command';
        action.textContent = 'Semak dalam Terminal →';
        action.addEventListener('click', () => {
          $('#command').value = parts[i].trim();
          switchView('terminal');
          $('#command').focus();
          toast('Arahan dimasukkan untuk semakan. Belum dijalankan.');
        });
        const run = document.createElement('button');
        run.type = 'button';
        run.className = 'run-suggested-command';
        run.textContent = 'Jalankan dengan izin';
        run.addEventListener('click', () => executeTermuxCommand(parts[i].trim(), true));
        commandCard.append(code, action, run);
        body.append(commandCard);
      }
    }
  } else addText(body, content);
  wrapper.append(avatar, body);
  messages.append(wrapper);
  messages.scrollTop = messages.scrollHeight;
}

function renderPending(label = selectedLabel($('#provider-select').value)) {
  const wrapper = document.createElement('div');
  wrapper.className = 'message';
  wrapper.id = 'pending-message';
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = label[0];
  const body = document.createElement('div');
  body.className = 'message-body tool-waiting';
  body.textContent = `${label} sedang berfikir…`;
  wrapper.append(avatar, body);
  messages.append(wrapper);
  messages.scrollTop = messages.scrollHeight;
}

async function sendChat(text = input.value.trim()) {
  if (!text || busy) return;
  busy = true;
  const id = $('#provider-select').value;
  const next = [...history, { role: 'user', content: text }].slice(-20);
  renderMessage('user', text);
  input.value = '';
  sendButton.disabled = true;
  renderPending(selectedLabel(id));
  try {
    const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ provider: id, messages: next }) });
    const result = await response.json();
    $('#pending-message')?.remove();
    if (!response.ok) throw new Error(result.error || 'Permintaan gagal.');
    history.push({ role: 'user', content: text }, { role: 'assistant', content: result.reply });
    renderMessage('assistant', result.reply, selectedLabel(id));
    updateSelectedProvider();
  } catch (error) {
    $('#pending-message')?.remove();
    renderMessage('assistant', `Ralat: ${error.message}`, selectedLabel(id));
    messages.lastElementChild?.classList.add('message-error');
  } finally {
    busy = false;
    sendButton.disabled = false;
    input.focus();
  }
}

function providerCard(id, item) {
  const card = document.createElement('article');
  card.className = 'provider-setting';
  const head = document.createElement('div');
  head.className = 'provider-setting-head';
  const logo = document.createElement('span');
  logo.className = 'provider-logo';
  logo.textContent = providerInfo[id].symbol;
  const title = document.createElement('div');
  const name = document.createElement('b'); name.textContent = providerInfo[id].name;
  const detail = document.createElement('small'); detail.textContent = providerInfo[id].model;
  title.append(name, detail);
  const state = document.createElement('span');
  state.className = `provider-state${item.connected ? ' connected' : ''}`;
  state.textContent = item.connected ? `Disambung · ${item.keySource === 'environment' ? 'env' : 'sesi'}` : 'Belum disambung';
  head.append(logo, title, state);
  const privacy = document.createElement('p');
  privacy.textContent = `${item.detail}. ${item.privacy}`;
  const row = document.createElement('div'); row.className = 'key-row';
  const key = document.createElement('input');
  key.type = 'password'; key.autocomplete = 'new-password'; key.spellcheck = false; key.placeholder = item.connected ? 'Kunci telah disambung (tidak dipaparkan)' : `Masukkan kunci ${providerInfo[id].name}`;
  key.setAttribute('aria-label', `Kunci API ${providerInfo[id].name}`);
  const save = document.createElement('button'); save.type = 'button'; save.textContent = 'Simpan';
  save.addEventListener('click', async () => {
    if (!key.value.trim()) return toast('Masukkan kunci terlebih dahulu.');
    save.disabled = true;
    try {
      const response = await fetch(`/api/providers/${id}/key`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: key.value }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Kunci tidak dapat disimpan.');
      key.value = '';
      toast(`${providerInfo[id].name} disambung untuk sesi server ini.`);
      await refreshConnections();
    } catch (error) { toast(error.message); }
    finally { save.disabled = false; }
  });
  const test = document.createElement('button'); test.type = 'button'; test.className = 'test-api'; test.textContent = 'Uji API'; test.disabled = !item.connected;
  test.addEventListener('click', async () => {
    test.disabled = true; test.textContent = 'Menguji…';
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ provider: id, messages: [{ role: 'user', content: 'Reply with exactly: Connection successful.' }] }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Ujian API gagal.');
      toast(`${providerInfo[id].name}: API berjaya menjawab.`);
    } catch (error) { toast(`Ujian gagal: ${error.message}`); }
    finally { test.textContent = 'Uji API'; test.disabled = !providersState.get(id)?.connected; }
  });
  const clear = document.createElement('button'); clear.type = 'button'; clear.className = 'clear-key'; clear.textContent = 'Putuskan'; clear.disabled = !item.connected || item.keySource === 'environment';
  clear.title = item.keySource === 'environment' ? 'Buang pemboleh ubah persekitaran untuk putuskan.' : 'Buang kunci daripada memori server.';
  clear.addEventListener('click', async () => {
    await fetch(`/api/providers/${id}/key`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: '' }) });
    await refreshConnections(); toast('Kunci sesi diputuskan.');
  });
  row.append(key, save, test, clear);
  const foot = document.createElement('div'); foot.className = 'key-foot'; foot.textContent = 'Kunci dihantar kepada penyedia ini apabila awak berbual atau menekan Uji API.';
  card.append(head, privacy, row, foot);
  return card;
}

function localAgentCard(id, item) {
  const card = document.createElement('article');
  card.className = 'provider-setting local-agent-setting';
  const head = document.createElement('div'); head.className = 'provider-setting-head';
  const logo = document.createElement('span'); logo.className = 'provider-logo'; logo.textContent = agentInfo[id].symbol;
  const title = document.createElement('div');
  const name = document.createElement('b'); name.textContent = agentInfo[id].name;
  const detail = document.createElement('small'); detail.textContent = agentInfo[id].detail;
  title.append(name, detail);
  const state = document.createElement('span'); state.className = `provider-state${item.installed ? ' connected' : ''}`; state.textContent = item.installed ? 'CLI tersedia' : 'CLI tidak ditemui';
  head.append(logo, title, state);
  const desc = document.createElement('p');
  desc.textContent = item.installed ? 'Boleh dipilih untuk chat atau panel kolaborasi. CLI berjalan pada projek semasa dengan mod baca/rancang.' : `Pasang dan log masuk ke ${agentInfo[id].name} dalam Termux. Kemudian tekan Semak semula sambungan.`;
  card.append(head, desc);
  return card;
}

function renderSettings() {
  const panel = $('#provider-settings'); panel.replaceChildren();
  for (const [id, item] of providersState) panel.append(providerCard(id, item));
  for (const [id, item] of agentsState) panel.append(localAgentCard(id, item));
}

function renderCollabOptions() {
  const box = $('#collab-agents'); box.replaceChildren();
  const all = [...Object.keys(providerInfo).map(id => ({ id, name: providerInfo[id].name })), ...Object.keys(agentInfo).map(id => ({ id, name: agentInfo[id].name }))];
  for (const item of all) {
    const enabled = selectedAvailable(item.id);
    const label = document.createElement('label'); label.className = `collab-chip${enabled ? '' : ' unavailable'}`;
    const check = document.createElement('input'); check.type = 'checkbox'; check.value = item.id; check.disabled = !enabled;
    if (enabled && !box.querySelector('input:checked')) check.checked = true;
    const name = document.createElement('span'); name.textContent = item.name;
    label.append(check, name); box.append(label);
  }
  const available = all.filter(item => selectedAvailable(item.id)).length;
  $('#collab-caption').textContent = available >= 2 ? `${available} ejen sedia · pilih sekurang-kurangnya 2 untuk berbincang.` : 'Sambungkan sekurang-kurangnya 2 ejen untuk memulakan kolaborasi.';
  $('#collab-button').disabled = available < 2;
}

async function refreshConnections() {
  try {
    const [providerResponse, agentResponse] = await Promise.all([fetch('/api/providers'), fetch('/api/agents')]);
    const [providerData, agentData] = await Promise.all([providerResponse.json(), agentResponse.json()]);
    providersState.clear(); agentsState.clear();
    for (const item of providerData.providers || []) providersState.set(item.id, item);
    for (const item of agentData.agents || []) agentsState.set(item.id, item);
    const ready = [...providersState.values()].filter(item => item.connected).length + [...agentsState.values()].filter(item => item.installed).length;
    $('#provider-count').textContent = `${ready}/5`;
    for (const id of Object.keys(agentInfo)) {
      const state = agentsState.get(id)?.installed;
      $(`#${id}-mini-dot`).classList.toggle('ready', Boolean(state));
      $(`#${id}-mini-state`).textContent = state ? 'Tersedia' : 'Tiada CLI';
    }
    renderCollabOptions(); renderSettings(); updateSelectedProvider();
  } catch { toast('Tidak dapat memeriksa ejen. Pastikan server masih berjalan.'); }
}

async function refreshStatus() {
  try {
    const response = await fetch('/api/status');
    const status = await response.json();
    if (!response.ok) throw new Error('Status gagal');
    $('#local-badge').textContent = 'Sedia'; $('#local-detail').textContent = status.cwd;
    $('#terminal-device-status').textContent = 'Termux bersambung'; $('#terminal-cwd').textContent = status.cwd;
    $('#footer-node').textContent = status.node.replace(/^v/, '');
  } catch {
    $('#local-badge').textContent = 'Terputus'; $('#local-detail').textContent = 'Mulakan semula node server.js';
    $('#terminal-device-status').textContent = 'Terputus'; $('#terminal-cwd').textContent = 'Server lokal tidak menjawab';
  }
}

function switchView(view) {
  const terminal = view === 'terminal';
  $('#chat-view').classList.toggle('active', !terminal);
  $('#terminal-view').classList.toggle('active', terminal);
  document.querySelectorAll('.nav-link[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  $('#crumb-title').textContent = terminal ? 'Terminal lokal' : 'Chat AI';
}

function openSettings() { $('#settings-modal').hidden = false; }
function closeSettings() { $('#settings-modal').hidden = true; }

async function collaborate() {
  if (busy) return;
  const prompt = input.value.trim();
  if (!prompt) return toast('Tulis soalan atau tugasan untuk panel AI dahulu.');
  const participants = [...$('#collab-agents').querySelectorAll('input:checked')].map(input => input.value);
  if (participants.length < 2) return toast('Pilih sekurang-kurangnya dua ejen yang tersedia.');
  const selected = $('#provider-select').value;
  const lead = participants.includes(selected) ? selected : participants[0];
  busy = true; $('#collab-button').disabled = true; sendButton.disabled = true;
  const next = [...history, { role: 'user', content: prompt }].slice(-16);
  renderMessage('user', `✦ Panel kerjasama (${participants.map(selectedLabel).join(', ')}):\n${prompt}`);
  input.value = '';
  renderPending(`Panel ${participants.length} ejen`);
  try {
    const response = await fetch('/api/collaborate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ participants, lead, messages: next }) });
    const result = await response.json();
    $('#pending-message')?.remove();
    if (!response.ok) throw new Error(result.error || 'Kolaborasi gagal.');
    for (const item of result.results || []) {
      if (item.reply) renderMessage('assistant', item.reply, `${item.name} · pandangan panel`);
      else renderMessage('assistant', `Tidak dapat menjawab: ${item.error}`, `${item.name} · ralat`);
    }
    renderMessage('assistant', result.summary, `${selectedLabel(result.lead)} · sintesis kolaborasi`);
    history.push({ role: 'user', content: prompt }, { role: 'assistant', content: result.summary });
    toast('Panel AI selesai membandingkan jawapan.');
  } catch (error) {
    $('#pending-message')?.remove();
    renderMessage('assistant', `Ralat kolaborasi: ${error.message}`, 'ruangAI');
    messages.lastElementChild?.classList.add('message-error');
  } finally { busy = false; $('#collab-button').disabled = false; sendButton.disabled = false; updateSelectedProvider(); }
}

async function executeTermuxCommand(command, askFirst = false) {
  if (!command || busy) return;
  $('#command').value = command;
  switchView('terminal');
  if (askFirst && !window.confirm(`Benarkan arahan ini berjalan sebagai pengguna Termux?\n\n${command}`)) return;
  $('#run-button').disabled = true; $('#run-button').innerHTML = '<span>…</span> Menjalankan';
  $('#output').textContent = `$ ${command}\n\nSedang berjalan…`;
  $('#last-run').textContent = `Dihantar ${new Date().toLocaleTimeString('ms-MY')}`;
  try {
    const response = await fetch('/api/command', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ command }) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Arahan gagal dihantar.');
    const commandOutput = result.output || (result.ok ? '(Tiada output)' : 'Arahan gagal.');
    $('#output').textContent = `$ ${command}\n\n${commandOutput}${result.timedOut ? '\n\n[Masa arahan tamat selepas 30 saat]' : ''}`;
    history.push({ role: 'user', content: `Hasil Termux untuk arahan \`${command}\` (exit ${result.code}):\n${commandOutput}` });
    updateSelectedProvider();
    toast('Hasil Termux tersedia dalam konteks chat.');
    return result;
  } catch (error) {
    $('#output').textContent = `$ ${command}\n\nRalat: ${error.message}`;
    toast(error.message);
    return null;
  } finally { $('#run-button').disabled = false; $('#run-button').innerHTML = '<span>▶</span> Jalankan'; }
}

document.querySelectorAll('.nav-link[data-view]').forEach(button => button.addEventListener('click', () => switchView(button.dataset.view)));
$('#open-settings').addEventListener('click', openSettings);
$('#top-settings').addEventListener('click', openSettings);
$('#manage-keys').addEventListener('click', openSettings);
$('#provider-info').addEventListener('click', openSettings);
$('#close-settings').addEventListener('click', closeSettings);
$('#done-settings').addEventListener('click', closeSettings);
$('#settings-modal').addEventListener('click', event => { if (event.target === $('#settings-modal')) closeSettings(); });
$('#provider-select').addEventListener('change', updateSelectedProvider);
$('#chat-form').addEventListener('submit', event => { event.preventDefault(); sendChat(); });
$('#collab-button').addEventListener('click', collaborate);
$('#chat-input').addEventListener('keydown', event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendChat(); } });
document.querySelectorAll('.suggestions button').forEach(button => button.addEventListener('click', () => { input.value = button.dataset.prompt; sendChat(); }));
$('#refresh-status').addEventListener('click', () => { refreshStatus(); refreshConnections(); });
$('#clear-output').addEventListener('click', () => { $('#output').textContent = 'Menunggu arahan…'; $('#last-run').textContent = 'Belum ada arahan'; });
$('#command-form').addEventListener('submit', async event => {
  event.preventDefault();
  const command = $('#command').value.trim();
  if (!command) return;
  await executeTermuxCommand(command, false);
});

refreshStatus();
refreshConnections();
setInterval(refreshStatus, 12_000);
