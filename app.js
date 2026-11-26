const providerInfo = {
  openrouter: { name: 'OpenRouter Free', model: 'Model percuma auto', badge: 'free', placeholder: 'Model percuma dipilih secara automatik.', symbol: 'OR' },
  gemini: { name: 'Google Gemini', model: 'Gemini 2.5 Flash', badge: 'free tier', placeholder: 'Kunci AI Studio free tier.', symbol: 'G' },
  groq: { name: 'Groq', model: 'GPT OSS 20B', badge: 'free tier', placeholder: 'Kunci akaun Groq Free.', symbol: 'GQ' },
};
const agentInfo = {
  codex: { name: 'Codex', model: 'Codex CLI', detail: 'Pemeriksa lokal · baca sahaja', symbol: 'C' },
  opencode: { name: 'OpenCode', model: 'OpenCode Plan', detail: 'Ejen lokal · mod perancangan', symbol: 'O' },
};
const localeMessages = {
  ms: {
    workspaceType: 'Peribadi', workspaceSection: 'RUANG KERJA', navChat: 'Chat AI', navTerminal: 'Terminal lokal', navTools: 'Tools & integrasi', navProviders: 'Penyedia AI', coreAgents: 'EJEN TERAS', freeOptions: 'PILIHAN PERCUMA', localTermux: 'Termux lokal', checkConnection: 'Semak sambungan', profileName: 'Pengguna Ghost Platform', profileSubtitle: 'Peranti lokal', localTag: 'LOKAL', chatView: 'Chat AI', terminalView: 'Terminal lokal', toolsView: 'Tools & integrasi',
    toolsTitle: 'Tools untuk Ghost Platform', toolsSubtitle: 'Alat GitHub yang boleh menyambung ejen AI kepada Termux dan Android.', toolsNote: 'Arahan pemasangan hanya dimasukkan ke Terminal untuk awak semak.', toolsRefresh: 'Periksa alat', toolGuidanceTitle: 'Cadangan untuk telefon ini', toolGuidanceText: 'Mulakan dengan Termux:API untuk fungsi peranti. Tambah Termux-MCP hanya jika awak perlukan tool registry dan kawalan risiko lebih terperinci. CLI-Hub boleh meluaskan katalog, tetapi semak keperluan setiap alat kerana kebanyakannya sasarkan aplikasi desktop.', toolAvailable: 'Tersedia', toolNotFound: 'Belum dipasang', toolServerOnline: 'Server aktif', toolServerOffline: 'Server tidak aktif', toolInstall: 'Sediakan arahan', toolRepo: 'Repositori GitHub', toolWhy: 'Kegunaan', toolNeeds: 'Keperluan', toolLicense: 'Lesen', toolQueued: 'Arahan disediakan di Terminal. Semak sebelum menjalankannya.',
    chatTitle: 'Ruang untuk berfikir.', chatSubtitle: 'Pilih model, berbual, dan bawa arahan ke Termux bila awak bersedia.', manageConnections: 'Sambungan', providerInfo: 'Butiran & privasi', welcomeKicker: 'GHOST PLATFORM · RUANG AI', welcomeTitle: 'Hai! Apa yang kita bina hari ini?', welcomeText: 'Tanya soalan, minta bantuan kod, atau minta arahan Termux. Semak arahan sebelum menjalankannya.',
    suggestionProject: 'Fahami projek ini', suggestionStorage: 'Semak storan Termux', suggestionPlan: 'Rancang sambungan AI', enterHint: 'Enter untuk hantar', chatPlaceholder: 'Tulis mesej kepada AI…', send: 'Hantar', chatFootnote: 'Jangan hantar kata laluan atau data sulit. Model percuma mungkin mempunyai had penggunaan.',
    collabTitle: 'Panel kolaborasi', collabCaption: 'Pilih sekurang-kurangnya 2 ejen untuk banding dan satukan jawapan.', collabButton: 'Kerjasama AI', terminalTitle: 'Terminal lokal', terminalSubtitle: 'Arahan dijalankan pada Termux di telefon ini. Semak arahan sebelum menjalankannya.', deviceLabel: 'PERANTI BERSAMBUNG', local: 'LOKAL', ready: 'sedia', commandLabel: 'ARAHAN YANG AKAN DIJALANKAN', commandPlaceholder: 'Contoh: pwd && ls -la', run: 'Jalankan', output: 'OUTPUT', clear: 'Kosongkan', waiting: 'Menunggu arahan…', terminalFoot: '⚠ Berjalan sebagai pengguna Termux semasa.', notRun: 'Belum ada arahan', terminalNoteTitle: 'Arahan daripada AI perlu disemak', terminalNoteText: 'Arahan AI hanya berjalan selepas awak beri izin.', footer: 'Dashboard lokal untuk Termux',
    settingsEyebrow: 'TETAPAN', settingsTitle: 'Penyedia & ejen', settingsSubtitle: 'Codex dan OpenCode berjalan melalui CLI lokal. API cloud menggunakan kunci yang awak sediakan.', appearance: 'Penampilan', appearanceDescription: 'Pilih warna dan bahasa Ghost Platform.', themeLabel: 'Tema warna', languageLabel: 'Bahasa', themeBlack: 'Hitam', themeBlue: 'Biru gelap', themeHacker: 'Hijau hacker', languageMalay: 'Bahasa Melayu', languageEnglish: 'English', security: 'Kunci tidak dipaparkan semula atau disimpan ke fail; kunci yang ditaip di sini hanya kekal dalam memori sehingga server dihentikan. Google dan Groq boleh mengenakan bayaran jika projek/akaun bukan tier percuma.', modalFooter: 'Jawapan kolaborasi dihantar kepada ejen yang dipilih. Jangan masukkan data sulit ke API cloud.', done: 'Selesai',
    modeChat: 'Chat', modeChatDescription: 'Bual dengan model yang dipilih', modeAgent: 'AI Agent', modeAgentDescription: 'Rancang tugasan dan tindakan Termux.', connected: 'Disambung', notConnected: 'Belum disambung', cliReady: 'CLI tersedia', cliMissing: 'CLI tidak ditemui', keySaved: 'Masukkan kunci dahulu.', keyPlaceholder: 'Kunci telah disambung (tidak dipaparkan)', save: 'Simpan', testApi: 'Uji API', testing: 'Menguji…', disconnect: 'Putuskan', keyFoot: 'Kunci dihantar kepada penyedia ini apabila awak berbual atau menekan Uji API.',
    collabAvailable: n => `${n} ejen sedia · pilih sekurang-kurangnya 2 untuk berbincang.`, collabNeedMore: 'Sambungkan sekurang-kurangnya 2 ejen untuk memulakan kolaborasi.', pending: name => `${name} sedang berfikir…`, panelPending: n => `Panel ${n} ejen`, resultReady: 'Panel AI selesai membandingkan jawapan.', resultInContext: 'Hasil Termux tersedia dalam konteks chat.', commandReview: 'Semak dalam Terminal →', commandRun: 'Jalankan dengan izin', commandMoved: 'Arahan dimasukkan untuk semakan. Belum dijalankan.', commandConfirm: 'Benarkan arahan ini berjalan sebagai pengguna Termux?', terminalConnected: 'Termux bersambung', serverOffline: 'Server lokal tidak menjawab', startServer: 'Mulakan semula node server.js',
  },
  en: {
    workspaceType: 'Personal', workspaceSection: 'WORKSPACE', navChat: 'AI chat', navTerminal: 'Local terminal', navTools: 'Tools & integrations', navProviders: 'AI providers', coreAgents: 'CORE AGENTS', freeOptions: 'FREE OPTIONS', localTermux: 'Local Termux', checkConnection: 'Check connection', profileName: 'Ghost Platform user', profileSubtitle: 'Local device', localTag: 'LOCAL', chatView: 'AI chat', terminalView: 'Local terminal', toolsView: 'Tools & integrations',
    toolsTitle: 'Tools for Ghost Platform', toolsSubtitle: 'GitHub tools that connect AI agents to Termux and Android.', toolsNote: 'Install commands are only placed in Terminal for you to review.', toolsRefresh: 'Check tools', toolGuidanceTitle: 'Recommended for this phone', toolGuidanceText: 'Start with Termux:API for device features. Add Termux-MCP if you need a richer tool registry and risk controls. CLI-Hub can expand the catalog, but check each tool’s requirements because many target desktop applications.', toolAvailable: 'Available', toolNotFound: 'Not installed', toolServerOnline: 'Server running', toolServerOffline: 'Server not running', toolInstall: 'Prepare command', toolRepo: 'GitHub repository', toolWhy: 'Use', toolNeeds: 'Requirements', toolLicense: 'License', toolQueued: 'Command prepared in Terminal. Review it before running.',
    chatTitle: 'A space to think.', chatSubtitle: 'Choose a model, chat, and send commands to Termux when you are ready.', manageConnections: 'Connections', providerInfo: 'Details & privacy', welcomeKicker: 'GHOST PLATFORM · AI WORKSPACE', welcomeTitle: 'Hi! What are we building today?', welcomeText: 'Ask a question, get coding help, or request a Termux command. Review commands before running them.',
    suggestionProject: 'Explore this project', suggestionStorage: 'Check Termux storage', suggestionPlan: 'Plan an AI setup', enterHint: 'Enter to send', chatPlaceholder: 'Message an AI…', send: 'Send', chatFootnote: 'Do not send passwords or sensitive data. Free models may have usage limits.',
    collabTitle: 'Collaboration panel', collabCaption: 'Choose at least 2 agents to compare and combine their answers.', collabButton: 'Collaborate', terminalTitle: 'Local terminal', terminalSubtitle: 'Commands run in Termux on this phone. Review commands before running them.', deviceLabel: 'DEVICE CONNECTED', local: 'LOCAL', ready: 'ready', commandLabel: 'COMMAND TO RUN', commandPlaceholder: 'Example: pwd && ls -la', run: 'Run', output: 'OUTPUT', clear: 'Clear', waiting: 'Waiting for a command…', terminalFoot: '⚠ Runs as the current Termux user.', notRun: 'No commands yet', terminalNoteTitle: 'Review AI commands', terminalNoteText: 'AI commands only run after you approve them.', footer: 'Local dashboard for Termux',
    settingsEyebrow: 'SETTINGS', settingsTitle: 'Providers & agents', settingsSubtitle: 'Codex and OpenCode run through local CLIs. Cloud APIs use keys you provide.', appearance: 'Appearance', appearanceDescription: 'Choose Ghost Platform colors and language.', themeLabel: 'Color theme', languageLabel: 'Language', themeBlack: 'Black', themeBlue: 'Dark blue', themeHacker: 'Hacker green', languageMalay: 'Bahasa Melayu', languageEnglish: 'English', security: 'API keys are not shown again or written to a file. Keys entered here remain in server memory until the server stops. Google and Groq may charge if the project/account is not on a free tier.', modalFooter: 'Collaboration answers are sent to the selected agents. Do not send sensitive data to cloud APIs.', done: 'Done',
    modeChat: 'Chat', modeChatDescription: 'Talk to the selected model', modeAgent: 'AI Agent', modeAgentDescription: 'Plan tasks and Termux actions.', connected: 'Connected', notConnected: 'Not connected', cliReady: 'CLI available', cliMissing: 'CLI not found', keySaved: 'Enter a key first.', keyPlaceholder: 'Key connected (hidden)', save: 'Save', testApi: 'Test API', testing: 'Testing…', disconnect: 'Disconnect', keyFoot: 'This provider receives the key when you chat or press Test API.',
    collabAvailable: n => `${n} agents ready · select at least 2 to collaborate.`, collabNeedMore: 'Connect at least 2 agents to start collaborating.', pending: name => `${name} is thinking…`, panelPending: n => `${n}-agent panel`, resultReady: 'The AI panel has compared its answers.', resultInContext: 'Termux output is available in chat context.', commandReview: 'Review in Terminal →', commandRun: 'Run with approval', commandMoved: 'Command added for review. It has not run yet.', commandConfirm: 'Allow this command to run as the Termux user?', terminalConnected: 'Termux connected', serverOffline: 'Local server is not responding', startServer: 'Restart node server.js',
  },
};
let language = localStorage.getItem('ghost-language') || 'ms';
let theme = localStorage.getItem('ghost-theme') || 'black';
let workMode = localStorage.getItem('ghost-mode') || 'chat';
if (!['ms', 'en'].includes(language)) language = 'ms';
if (!['black', 'blue', 'hacker'].includes(theme)) theme = 'black';
const providersState = new Map();
const agentsState = new Map();
const history = [];
const $ = selector => document.querySelector(selector);
const messages = $('#messages');
const input = $('#chat-input');
const sendButton = $('#send-button');
let toastTimer;
let busy = false;
const tr = key => localeMessages[language][key];

function applyPreferences() {
  document.documentElement.lang = language;
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'blue' ? '#0b1220' : (theme === 'hacker' ? '#030a05' : '#111410');
  document.title = language === 'ms' ? 'Ghost Platform · Ruang Kerja Termux' : 'Ghost Platform · Termux workspace';
  const labels = {
    'workspace-type': 'workspaceType', 'workspace-section': 'workspaceSection', 'nav-chat-label': 'navChat', 'nav-terminal-label': 'navTerminal',
    'nav-providers-label': 'navProviders', 'nav-tools-label': 'navTools', 'core-label': 'coreAgents', 'free-label': 'freeOptions', 'local-title': 'localTermux',
    'refresh-label': 'checkConnection', 'profile-name': 'profileName', 'profile-subtitle': 'profileSubtitle', 'local-tag': 'localTag',
    'chat-title': 'chatTitle', 'chat-subtitle': 'chatSubtitle', 'manage-label': 'manageConnections', 'provider-info-label': 'providerInfo',
    'welcome-kicker': 'welcomeKicker', 'welcome-title': 'welcomeTitle', 'welcome-text': 'welcomeText', 'suggestion-project': 'suggestionProject',
    'suggestion-storage': 'suggestionStorage', 'suggestion-plan': 'suggestionPlan', 'enter-hint': 'enterHint', 'send-label': 'send',
    'chat-footnote': 'chatFootnote', 'collab-title': 'collabTitle', 'collab-button-label': 'collabButton', 'terminal-title': 'terminalTitle', 'terminal-subtitle': 'terminalSubtitle',
    'device-label': 'deviceLabel', 'device-local-label': 'local', 'terminal-ready-label': 'ready', 'command-label': 'commandLabel',
    'run-label': 'run', 'output-label': 'output', 'clear-label': 'clear', 'terminal-footnote': 'terminalFoot',
    'terminal-note-title': 'terminalNoteTitle', 'terminal-note-text': 'terminalNoteText', 'footer-text': 'footer',
    'settings-eyebrow': 'settingsEyebrow', 'settings-title': 'settingsTitle', 'settings-subtitle': 'settingsSubtitle',
    'appearance-title': 'appearance', 'appearance-description': 'appearanceDescription', 'theme-label': 'themeLabel',
    'language-label': 'languageLabel', 'security-text': 'security', 'modal-footer-note': 'modalFooter', 'done-settings': 'done',
    'tools-title': 'toolsTitle', 'tools-subtitle': 'toolsSubtitle', 'tools-note': 'toolsNote', 'tools-refresh-label': 'toolsRefresh', 'tool-guidance-title': 'toolGuidanceTitle', 'tool-guidance-text': 'toolGuidanceText',
  };
  for (const [id, key] of Object.entries(labels)) {
    const node = document.getElementById(id);
    if (node) node.textContent = tr(key);
  }
  $('#theme-select').value = theme;
  $('#language-select').value = language;
  $('#mode-chat-title').textContent = tr('modeChat');
  $('#mode-chat-description').textContent = tr('modeChatDescription');
  $('#mode-agent-title').textContent = tr('modeAgent');
  $('#mode-agent-description').textContent = tr('modeAgentDescription');
  document.querySelectorAll('.mode-option').forEach(button => {
    const active = button.dataset.mode === workMode;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  $('#theme-select option[value="black"]').textContent = tr('themeBlack');
  $('#theme-select option[value="blue"]').textContent = tr('themeBlue');
  $('#theme-select option[value="hacker"]').textContent = tr('themeHacker');
  $('#language-select option[value="ms"]').textContent = tr('languageMalay');
  $('#language-select option[value="en"]').textContent = tr('languageEnglish');
  $('#chat-input').placeholder = tr('chatPlaceholder');
  $('#chat-input').setAttribute('aria-label', tr('chatPlaceholder'));
  $('#command').placeholder = tr('commandPlaceholder');
  $('#crumb-title').textContent = $('#terminal-view').classList.contains('active') ? tr('terminalView') : ($('#tools-view').classList.contains('active') ? tr('toolsView') : tr('chatView'));
  const providerLabels = language === 'ms'
    ? { openrouter: 'OpenRouter · Percuma', gemini: 'Google Gemini · Tier percuma', groq: 'Groq · Tier percuma', codex: 'Codex · CLI lokal', opencode: 'OpenCode · CLI lokal' }
    : { openrouter: 'OpenRouter · Free', gemini: 'Google Gemini · Free tier', groq: 'Groq · Free tier', codex: 'Codex · local CLI', opencode: 'OpenCode · local CLI' };
  for (const option of $('#provider-select').options) option.textContent = providerLabels[option.value];
  document.querySelectorAll('.suggestions button').forEach(button => { button.dataset.prompt = language === 'ms' ? button.dataset.promptMs : button.dataset.promptEn; });
  updateSelectedProvider();
  renderCollabOptions();
  renderSettings();
  if ($('#tools-view').classList.contains('active')) refreshTools();
}

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
  const descriptions = language === 'ms'
    ? { openrouter: 'OpenRouter Free memilih model percuma yang tersedia. Had semasa: sehingga 50 permintaan sehari.', gemini: 'Gemini 2.5 Flash melalui free tier. Google mungkin menggunakan kandungan untuk menambah baik produk.', groq: 'Groq GPT OSS 20B. Gunakan akaun Free tanpa billing untuk mengelakkan caj.' }
    : { openrouter: 'OpenRouter Free selects an available free model. Current limit: up to 50 requests per day.', gemini: 'Gemini 2.5 Flash on the free tier. Google may use content to improve its products.', groq: 'Groq GPT OSS 20B. Use a Free account without billing to avoid charges.' };
  if (providerInfo[id]) return descriptions[id];
  return agentInfo[id]?.detail || (language === 'ms' ? 'Pilih ejen AI.' : 'Choose an AI agent.');
}

function updateSelectedProvider() {
  const id = $('#provider-select').value;
  const online = selectedAvailable(id);
  $('#selected-dot').classList.toggle('connected', Boolean(online));
  $('#provider-description').textContent = selectedDescription(id);
  const models = language === 'ms'
    ? { openrouter: 'Model percuma auto', gemini: 'Gemini 2.5 Flash', groq: 'GPT OSS 20B', codex: 'Codex CLI', opencode: 'OpenCode Plan' }
    : { openrouter: 'Auto free model', gemini: 'Gemini 2.5 Flash', groq: 'GPT OSS 20B', codex: 'Codex CLI', opencode: 'OpenCode Plan' };
  $('#composer-model').textContent = `${selectedLabel(id)} · ${models[id] || 'local'}`;
  $('#context-note').textContent = language === 'ms' ? `${history.length} mesej dalam sesi ini` : `${history.length} messages in this session`;
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
        action.textContent = tr('commandReview');
        action.addEventListener('click', () => {
          $('#command').value = parts[i].trim();
          switchView('terminal');
          $('#command').focus();
          toast(tr('commandMoved'));
        });
        const run = document.createElement('button');
        run.type = 'button';
        run.className = 'run-suggested-command';
        run.textContent = tr('commandRun');
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
  body.textContent = tr('pending')(label);
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
    const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ provider: id, mode: workMode, messages: next }) });
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
  state.textContent = item.connected ? `${tr('connected')} · ${item.keySource === 'environment' ? 'env' : (language === 'ms' ? 'sesi' : 'session')}` : tr('notConnected');
  head.append(logo, title, state);
  const privacy = document.createElement('p');
  privacy.textContent = (language === 'ms' ? {
    openrouter: 'Laluan model percuma. Had akaun percuma dan ketersediaan model boleh berubah. Semak dasar data model yang dipilih.',
    gemini: 'Free tier Gemini 2.5 Flash. Google boleh menggunakan kandungan untuk menambah baik produk; gunakan projek free tier sahaja.',
    groq: 'Gunakan akaun Groq Free tanpa billing. Model dan had percuma boleh berubah.',
  } : {
    openrouter: 'Free model routing. Free account limits and model availability may change. Check the selected model’s data policy.',
    gemini: 'Gemini 2.5 Flash free tier. Google may use content to improve products; use a free-tier project only.',
    groq: 'Use a Groq Free account without billing. Free models and limits may change.',
  })[id];
  const row = document.createElement('div'); row.className = 'key-row';
  const key = document.createElement('input');
  key.type = 'password'; key.autocomplete = 'new-password'; key.spellcheck = false; key.placeholder = item.connected ? tr('keyPlaceholder') : (language === 'ms' ? `Masukkan kunci ${providerInfo[id].name}` : `Enter ${providerInfo[id].name} API key`);
  key.setAttribute('aria-label', language === 'ms' ? `Kunci API ${providerInfo[id].name}` : `${providerInfo[id].name} API key`);
  const save = document.createElement('button'); save.type = 'button'; save.textContent = tr('save');
  save.addEventListener('click', async () => {
    if (!key.value.trim()) return toast(tr('keySaved'));
    save.disabled = true;
    try {
      const response = await fetch(`/api/providers/${id}/key`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: key.value }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Kunci tidak dapat disimpan.');
      key.value = '';
      toast(language === 'ms' ? `${providerInfo[id].name} disambung untuk sesi server ini.` : `${providerInfo[id].name} connected for this server session.`);
      await refreshConnections();
    } catch (error) { toast(error.message); }
    finally { save.disabled = false; }
  });
  const test = document.createElement('button'); test.type = 'button'; test.className = 'test-api'; test.textContent = tr('testApi'); test.disabled = !item.connected;
  test.addEventListener('click', async () => {
    test.disabled = true; test.textContent = tr('testing');
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ provider: id, messages: [{ role: 'user', content: 'Reply with exactly: Connection successful.' }] }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Ujian API gagal.');
      toast(language === 'ms' ? `${providerInfo[id].name}: API berjaya menjawab.` : `${providerInfo[id].name}: API responded successfully.`);
    } catch (error) { toast(`Ujian gagal: ${error.message}`); }
    finally { test.textContent = tr('testApi'); test.disabled = !providersState.get(id)?.connected; }
  });
  const clear = document.createElement('button'); clear.type = 'button'; clear.className = 'clear-key'; clear.textContent = tr('disconnect'); clear.disabled = !item.connected || item.keySource === 'environment';
  clear.title = language === 'ms'
    ? (item.keySource === 'environment' ? 'Buang pemboleh ubah persekitaran untuk putuskan.' : 'Buang kunci daripada memori server.')
    : (item.keySource === 'environment' ? 'Remove the environment variable to disconnect.' : 'Remove the key from server memory.');
  clear.addEventListener('click', async () => {
    await fetch(`/api/providers/${id}/key`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: '' }) });
    await refreshConnections(); toast(language === 'ms' ? 'Kunci sesi diputuskan.' : 'Session key disconnected.');
  });
  row.append(key, save, test, clear);
  const foot = document.createElement('div'); foot.className = 'key-foot'; foot.textContent = tr('keyFoot');
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
  const state = document.createElement('span'); state.className = `provider-state${item.installed ? ' connected' : ''}`; state.textContent = item.installed ? tr('cliReady') : tr('cliMissing');
  head.append(logo, title, state);
  const desc = document.createElement('p');
  desc.textContent = item.installed
    ? (language === 'ms' ? 'Boleh dipilih untuk chat atau panel kolaborasi. CLI berjalan pada projek semasa dengan mod baca/rancang.' : 'Available for chat or the collaboration panel. The CLI runs in the current project in read-only or plan mode.')
    : (language === 'ms' ? `Pasang dan log masuk ke ${agentInfo[id].name} dalam Termux. Kemudian tekan Semak semula sambungan.` : `Install and sign in to ${agentInfo[id].name} in Termux, then refresh the connection check.`);
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
  $('#collab-caption').textContent = available >= 2 ? tr('collabAvailable')(available) : tr('collabNeedMore');
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
      $(`#${id}-mini-state`).textContent = state ? (language === 'ms' ? 'Tersedia' : 'Available') : tr('cliMissing');
    }
    renderCollabOptions(); renderSettings(); updateSelectedProvider();
  } catch { toast(language === 'ms' ? 'Tidak dapat memeriksa ejen. Pastikan server masih berjalan.' : 'Could not check agents. Make sure the server is running.'); }
}

async function refreshStatus() {
  try {
    const response = await fetch('/api/status');
    const status = await response.json();
    if (!response.ok) throw new Error('Status gagal');
    $('#local-badge').textContent = language === 'ms' ? 'Sedia' : 'Ready'; $('#local-detail').textContent = status.cwd;
    $('#terminal-device-status').textContent = tr('terminalConnected'); $('#terminal-cwd').textContent = status.cwd;
    $('#footer-node').textContent = status.node.replace(/^v/, '');
  } catch {
    $('#local-badge').textContent = language === 'ms' ? 'Terputus' : 'Offline'; $('#local-detail').textContent = tr('startServer');
    $('#terminal-device-status').textContent = language === 'ms' ? 'Terputus' : 'Disconnected'; $('#terminal-cwd').textContent = tr('serverOffline');
  }
}

function switchView(view) {
  for (const name of ['chat', 'terminal', 'tools']) $(`#${name}-view`).classList.toggle('active', view === name);
  document.querySelectorAll('.nav-link[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  $('#crumb-title').textContent = tr(view === 'terminal' ? 'terminalView' : view === 'tools' ? 'toolsView' : 'chatView');
  if (view === 'tools') refreshTools();
}

async function refreshTools() {
  const box = $('#tool-cards');
  if (!box) return;
  box.replaceChildren();
  const loading = document.createElement('p');
  loading.className = 'tools-loading';
  loading.textContent = language === 'ms' ? 'Memeriksa alat lokal…' : 'Checking local tools…';
  box.append(loading);
  try {
    const response = await fetch('/api/tools');
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Could not load tools');
    box.replaceChildren();
    const why = {
      'cli-hub': language === 'ms' ? 'Cari, periksa dan urus CLI yang mesra ejen. Katalog tidak memasang alat secara automatik; semak keperluan setiap CLI untuk Android.' : 'Discover, inspect and manage agent-ready CLIs. The catalog does not install tools automatically; check each CLI’s Android requirements.',
      'termux-mcp': language === 'ms' ? 'Tambah tool Termux berstruktur, output streaming dan kawalan risiko. Projek komuniti; semak polisi sebelum sambungkan ejen.' : 'Adds structured Termux tools, streaming output and risk gates. Community project; review its policies before connecting agents.',
      'termux-api': language === 'ms' ? 'Add-on rasmi Termux untuk fungsi peranti Android tertentu. Android mungkin meminta kebenaran bagi setiap fungsi.' : 'Official Termux add-on for selected Android device features. Android may request permissions for each feature.',
    };
    const needs = {
      'cli-hub': language === 'ms' ? 'Python/pip; sesetengah CLI perlukan aplikasi desktop atau pakej tambahan.' : 'Python/pip; some CLIs need desktop apps or extra packages.',
      'termux-mcp': language === 'ms' ? 'Python/pip; server lokal berasingan. Kekalkan bind loopback.' : 'Python/pip; separate local service. Keep it bound to loopback.',
      'termux-api': language === 'ms' ? 'Aplikasi Termux:API Android daripada sumber yang sama, pakej Termux dan izin Android.' : 'Termux:API Android companion from the same source, Termux package and Android permissions.',
    };
    for (const item of data.tools || []) {
      const card = document.createElement('article');
      card.className = 'tool-card';
      const head = document.createElement('div'); head.className = 'tool-card-head';
      const title = document.createElement('h2'); title.textContent = item.name;
      const status = document.createElement('span');
      status.className = `tool-status${item.installed ? ' ready' : ''}`;
      status.textContent = item.id === 'termux-mcp' && data.termuxMcpRunning ? tr('toolServerOnline') : (item.installed ? tr('toolAvailable') : tr('toolNotFound'));
      head.append(title, status);
      const description = document.createElement('p'); description.textContent = why[item.id] || item.why;
      const meta = document.createElement('div'); meta.className = 'tool-meta';
      for (const [label, value] of [[tr('toolNeeds'), needs[item.id] || item.needs], [tr('toolLicense'), item.license]]) {
        const row = document.createElement('div'); const b = document.createElement('b'); b.textContent = `${label}: `; row.append(b, document.createTextNode(value)); meta.append(row);
      }
      const actions = document.createElement('div'); actions.className = 'tool-actions';
      const repo = document.createElement('a'); repo.href = item.github; repo.target = '_blank'; repo.rel = 'noopener noreferrer'; repo.textContent = tr('toolRepo');
      actions.append(repo);
      if (!item.installed) {
        const prepare = document.createElement('button'); prepare.type = 'button'; prepare.textContent = tr('toolInstall');
        prepare.addEventListener('click', () => {
          $('#command').value = item.install;
          switchView('terminal');
          $('#command').focus();
          toast(tr('toolQueued'));
        });
        actions.append(prepare);
      }
      card.append(head, description, meta, actions); box.append(card);
    }
  } catch (error) {
    box.replaceChildren();
    const message = document.createElement('p'); message.className = 'tools-loading';
    message.textContent = language === 'ms' ? `Pemeriksaan alat gagal: ${error.message}` : `Could not check tools: ${error.message}`;
    box.append(message);
  }
}

function openSettings() { $('#settings-modal').hidden = false; }
function closeSettings() { $('#settings-modal').hidden = true; }

async function collaborate() {
  if (busy) return;
  const prompt = input.value.trim();
  if (!prompt) return toast(language === 'ms' ? 'Tulis soalan atau tugasan untuk panel AI dahulu.' : 'Write a question or task for the AI panel first.');
  const participants = [...$('#collab-agents').querySelectorAll('input:checked')].map(input => input.value);
  if (participants.length < 2) return toast(language === 'ms' ? 'Pilih sekurang-kurangnya dua ejen yang tersedia.' : 'Select at least two available agents.');
  const selected = $('#provider-select').value;
  const lead = participants.includes(selected) ? selected : participants[0];
  busy = true; $('#collab-button').disabled = true; sendButton.disabled = true;
  const next = [...history, { role: 'user', content: prompt }].slice(-16);
  renderMessage('user', `✦ ${language === 'ms' ? 'Panel kolaborasi' : 'Collaboration panel'} (${participants.map(selectedLabel).join(', ')}):\n${prompt}`);
  input.value = '';
  renderPending(tr('panelPending')(participants.length));
  try {
    const response = await fetch('/api/collaborate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ participants, lead, messages: next }) });
    const result = await response.json();
    $('#pending-message')?.remove();
    if (!response.ok) throw new Error(result.error || (language === 'ms' ? 'Kolaborasi gagal.' : 'Collaboration failed.'));
    for (const item of result.results || []) {
      if (item.reply) renderMessage('assistant', item.reply, `${item.name} · pandangan panel`);
      else renderMessage('assistant', `${language === 'ms' ? 'Tidak dapat menjawab' : 'Could not respond'}: ${item.error}`, `${item.name} · ${language === 'ms' ? 'ralat' : 'error'}`);
    }
    renderMessage('assistant', result.summary, `${selectedLabel(result.lead)} · sintesis kolaborasi`);
    history.push({ role: 'user', content: prompt }, { role: 'assistant', content: result.summary });
    toast(tr('resultReady'));
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
  if (askFirst && !window.confirm(`${tr('commandConfirm')}\n\n${command}`)) return;
  $('#run-button').disabled = true; $('#run-button').innerHTML = `<span>…</span> ${tr('run')}`;
  $('#output').textContent = `$ ${command}\n\n${tr('run')}…`;
  $('#last-run').textContent = `${language === 'ms' ? 'Dihantar' : 'Sent'} ${new Date().toLocaleTimeString()}`;
  try {
    const response = await fetch('/api/command', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ command }) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || (language === 'ms' ? 'Arahan gagal dihantar.' : 'Command could not be sent.'));
    const commandOutput = result.output || (result.ok ? (language === 'ms' ? '(Tiada output)' : '(No output)') : (language === 'ms' ? 'Arahan gagal.' : 'Command failed.'));
    $('#output').textContent = `$ ${command}\n\n${commandOutput}${result.timedOut ? '\n\n[Masa arahan tamat selepas 30 saat]' : ''}`;
    history.push({ role: 'user', content: `Hasil Termux untuk arahan \`${command}\` (exit ${result.code}):\n${commandOutput}` });
    updateSelectedProvider();
    toast(tr('resultInContext'));
    return result;
  } catch (error) {
    $('#output').textContent = `$ ${command}\n\nRalat: ${error.message}`;
    toast(error.message);
    return null;
  } finally { $('#run-button').disabled = false; $('#run-button').innerHTML = `<span>▶</span> <span id="run-label">${tr('run')}</span>`; }
}

document.querySelectorAll('.nav-link[data-view]').forEach(button => button.addEventListener('click', () => switchView(button.dataset.view)));
$('#open-settings').addEventListener('click', openSettings);
$('#top-settings').addEventListener('click', openSettings);
$('#manage-keys').addEventListener('click', openSettings);
$('#provider-info').addEventListener('click', openSettings);
$('#close-settings').addEventListener('click', closeSettings);
$('#done-settings').addEventListener('click', closeSettings);
$('#settings-modal').addEventListener('click', event => { if (event.target === $('#settings-modal')) closeSettings(); });
$('#theme-select').addEventListener('change', event => {
  theme = event.target.value;
  localStorage.setItem('ghost-theme', theme);
  applyPreferences();
});
$('#language-select').addEventListener('change', event => {
  language = event.target.value;
  localStorage.setItem('ghost-language', language);
  applyPreferences();
  refreshStatus();
  refreshConnections();
});
$('#provider-select').addEventListener('change', updateSelectedProvider);
$('#refresh-tools').addEventListener('click', refreshTools);
document.querySelectorAll('.mode-option').forEach(button => button.addEventListener('click', () => {
  workMode = button.dataset.mode;
  localStorage.setItem('ghost-mode', workMode);
  applyPreferences();
}));
$('#chat-form').addEventListener('submit', event => { event.preventDefault(); sendChat(); });
$('#collab-button').addEventListener('click', collaborate);
$('#chat-input').addEventListener('keydown', event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendChat(); } });
document.querySelectorAll('.suggestions button').forEach(button => button.addEventListener('click', () => { input.value = button.dataset.prompt; sendChat(); }));
$('#refresh-status').addEventListener('click', () => { refreshStatus(); refreshConnections(); });
$('#clear-output').addEventListener('click', () => { $('#output').textContent = tr('waiting'); $('#last-run').textContent = tr('notRun'); });
$('#command-form').addEventListener('submit', async event => {
  event.preventDefault();
  const command = $('#command').value.trim();
  if (!command) return;
  await executeTermuxCommand(command, false);
});

refreshStatus();
applyPreferences();
refreshConnections();
setInterval(refreshStatus, 12_000);
