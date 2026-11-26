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
    settingsEyebrow: 'TETAPAN', settingsTitle: 'Penyedia & ejen', settingsSubtitle: 'Codex dan OpenCode berjalan melalui CLI lokal. API cloud menggunakan kunci yang awak sediakan.', appearance: 'Penampilan', appearanceDescription: 'Pilih warna dan bahasa Ghost Platform.', themeLabel: 'Tema warna', languageLabel: 'Bahasa', themeBlack: 'Hitam', themeBlue: 'Biru gelap', themeHacker: 'Hijau hacker', languageMalay: 'Bahasa Melayu', languageEnglish: 'English', security: 'Kunci tidak dipaparkan semula atau disimpan ke fail; kunci yang ditaip di sini hanya kekal dalam memori sehingga server dihentikan. Google dan Groq boleh mengenakan bayaran jika projek/akaun bukan tier percuma.', modalFooter: 'Jawapan kolaborasi dihantar kepada ejen yang dipilih. Jangan masukkan data sulit ke API cloud.', done: 'Selesai', memoryTitle: 'Memori & pemindahan', memoryDesc: 'Perbualan disimpan pada peranti. Bila Supabase disambung, data disegerakkan ke awan.', memoryLocal: 'Lokal', memoryCloud: 'Supabase', memorySync: 'Segerak', memoryExport: 'Eksport', memoryImport: 'Import', memorySyncing: 'Menyegerak…', memorySynced: 'Memori disegerakkan.', memoryExported: 'Fail memori dimuat turun.', memoryImported: 'Memori diimport.', memoryImportAsk: 'Gantikan semua memori untuk peranti ini? Pilih Batal untuk menggabungkan.', memoryFailed: n => `Memori gagal: ${n}`,
    modeChat: 'Chat', modeChatDescription: 'Bual dengan model yang dipilih', modeAgent: 'AI Agent', modeAgentDescription: 'Rancang tugasan dan tindakan Termux.', connected: 'Disambung', notConnected: 'Belum disambung', cliReady: 'CLI tersedia', cliMissing: 'CLI tidak ditemui', keySaved: 'Masukkan kunci dahulu.', keyPlaceholder: 'Kunci telah disambung (tidak dipaparkan)', save: 'Simpan', testApi: 'Uji API', testing: 'Menguji…', disconnect: 'Putuskan', keyFoot: 'Kunci dihantar kepada penyedia ini apabila awak berbual atau menekan Uji API.',
    collabAvailable: n => `${n} ejen sedia · pilih sekurang-kurangnya 2 untuk berbincang.`, collabNeedMore: 'Sambungkan sekurang-kurangnya 2 ejen untuk memulakan kolaborasi.', pending: name => `${name} sedang berfikir…`, panelPending: n => `Panel ${n} ejen`, resultReady: 'Panel AI selesai membandingkan jawapan.', resultInContext: 'Hasil Termux (dipendekkan) tersedia dalam konteks chat.', commandReview: 'Semak dalam Terminal →', commandRun: 'Jalankan dengan izin', commandMoved: 'Arahan dimasukkan untuk semakan. Belum dijalankan.', commandConfirm: 'Benarkan arahan ini berjalan sebagai pengguna Termux?', terminalConnected: 'Termux bersambung', serverOffline: 'Server lokal tidak menjawab', startServer: 'Mulakan semula node server.js',
    errorPrefix: 'Ralat', requestFailed: 'Permintaan gagal.', keySaveFailed: 'Kunci tidak dapat disimpan.', keySavedNotice: n => `${n} disambung untuk sesi server ini.`, keyDisconnectedNotice: 'Kunci sesi diputuskan.', testFailed: n => `Ujian gagal: ${n}`, testOk: n => `${n}: API berjaya menjawab.`, collabPromptNeeded: 'Tulis soalan atau tugasan untuk panel AI dahulu.', collabSelectTwo: 'Pilih sekurang-kurangnya dua ejen yang tersedia.', collabFailed: 'Kolaborasi gagal.', panelView: 'pandangan panel', panelSynthesis: 'sintesis kolaborasi', couldNotRespond: 'Tidak dapat menjawab', panelError: 'ralat', collabErrorPrefix: 'Ralat kolaborasi', commandSendFailed: 'Arahan gagal dihantar.', noOutput: '(Tiada output)', commandFailedText: 'Arahan gagal.', timedOut: '\n\n[Masa arahan tamat selepas 30 saat]', sentAt: 'Dihantar', historyMessages: n => `${n} mesej dalam sesi ini`, toolsChecking: 'Memeriksa alat lokal…', toolsFailed: n => `Pemeriksaan alat gagal: ${n}`, checkAgain: 'Semak semula sambungan.', availableShort: 'Tersedia', localReady: 'Sedia', localOffline: 'Terputus', deviceOffline: 'PERANTI TERPUTUS', terminalOffline: 'terputus', settingsAria: 'Tetapan penyedia', sendAria: 'Hantar mesej', closeAria: 'Tutup tetapan', skipLink: 'Langsung ke chat', agentReadyDesc: 'Boleh dipilih untuk chat atau panel kolaborasi. CLI berjalan pada projek semasa dengan mod baca/rancang.', agentMissingDesc: n => `Pasang dan log masuk ke ${n} dalam Termux. Kemudian tekan Semak semula sambungan.`, keyEnter: n => `Masukkan kunci ${n}`, keyAria: n => `Kunci API ${n}`,
  },
  en: {
    workspaceType: 'Personal', workspaceSection: 'WORKSPACE', navChat: 'AI chat', navTerminal: 'Local terminal', navTools: 'Tools & integrations', navProviders: 'AI providers', coreAgents: 'CORE AGENTS', freeOptions: 'FREE OPTIONS', localTermux: 'Local Termux', checkConnection: 'Check connection', profileName: 'Ghost Platform user', profileSubtitle: 'Local device', localTag: 'LOCAL', chatView: 'AI chat', terminalView: 'Local terminal', toolsView: 'Tools & integrations',
    toolsTitle: 'Tools for Ghost Platform', toolsSubtitle: 'GitHub tools that connect AI agents to Termux and Android.', toolsNote: 'Install commands are only placed in Terminal for you to review.', toolsRefresh: 'Check tools', toolGuidanceTitle: 'Recommended for this phone', toolGuidanceText: 'Start with Termux:API for device features. Add Termux-MCP if you need a richer tool registry and risk controls. CLI-Hub can expand the catalog, but check each tool’s requirements because many target desktop applications.', toolAvailable: 'Available', toolNotFound: 'Not installed', toolServerOnline: 'Server running', toolServerOffline: 'Server not running', toolInstall: 'Prepare command', toolRepo: 'GitHub repository', toolWhy: 'Use', toolNeeds: 'Requirements', toolLicense: 'License', toolQueued: 'Command prepared in Terminal. Review it before running.',
    chatTitle: 'A space to think.', chatSubtitle: 'Choose a model, chat, and send commands to Termux when you are ready.', manageConnections: 'Connections', providerInfo: 'Details & privacy', welcomeKicker: 'GHOST PLATFORM · AI WORKSPACE', welcomeTitle: 'Hi! What are we building today?', welcomeText: 'Ask a question, get coding help, or request a Termux command. Review commands before running them.',
    suggestionProject: 'Explore this project', suggestionStorage: 'Check Termux storage', suggestionPlan: 'Plan an AI setup', enterHint: 'Enter to send', chatPlaceholder: 'Message an AI…', send: 'Send', chatFootnote: 'Do not send passwords or sensitive data. Free models may have usage limits.',
    collabTitle: 'Collaboration panel', collabCaption: 'Choose at least 2 agents to compare and combine their answers.', collabButton: 'Collaborate', terminalTitle: 'Local terminal', terminalSubtitle: 'Commands run in Termux on this phone. Review commands before running them.', deviceLabel: 'DEVICE CONNECTED', local: 'LOCAL', ready: 'ready', commandLabel: 'COMMAND TO RUN', commandPlaceholder: 'Example: pwd && ls -la', run: 'Run', output: 'OUTPUT', clear: 'Clear', waiting: 'Waiting for a command…', terminalFoot: '⚠ Runs as the current Termux user.', notRun: 'No commands yet', terminalNoteTitle: 'Review AI commands', terminalNoteText: 'AI commands only run after you approve them.', footer: 'Local dashboard for Termux',
    settingsEyebrow: 'SETTINGS', settingsTitle: 'Providers & agents', settingsSubtitle: 'Codex and OpenCode run through local CLIs. Cloud APIs use keys you provide.', appearance: 'Appearance', appearanceDescription: 'Choose Ghost Platform colors and language.', themeLabel: 'Color theme', languageLabel: 'Language', themeBlack: 'Black', themeBlue: 'Dark blue', themeHacker: 'Hacker green', languageMalay: 'Bahasa Melayu', languageEnglish: 'English', security: 'API keys are not shown again or written to a file. Keys entered here remain in server memory until the server stops. Google and Groq may charge if the project/account is not on a free tier.', modalFooter: 'Collaboration answers are sent to the selected agents. Do not send sensitive data to cloud APIs.', done: 'Done', memoryTitle: 'Memory & migration', memoryDesc: 'Chats stay on this device. When Supabase is connected, they are synced to the cloud.', memoryLocal: 'Local', memoryCloud: 'Supabase', memorySync: 'Sync', memoryExport: 'Export', memoryImport: 'Import', memorySyncing: 'Syncing…', memorySynced: 'Memory synced.', memoryExported: 'Memory file downloaded.', memoryImported: 'Memory imported.', memoryImportAsk: 'Replace all memory for this device? Cancel to merge instead.', memoryFailed: n => `Memory failed: ${n}`,
    modeChat: 'Chat', modeChatDescription: 'Talk to the selected model', modeAgent: 'AI Agent', modeAgentDescription: 'Plan tasks and Termux actions.', connected: 'Connected', notConnected: 'Not connected', cliReady: 'CLI available', cliMissing: 'CLI not found', keySaved: 'Enter a key first.', keyPlaceholder: 'Key connected (hidden)', save: 'Save', testApi: 'Test API', testing: 'Testing…', disconnect: 'Disconnect', keyFoot: 'This provider receives the key when you chat or press Test API.',
    collabAvailable: n => `${n} agents ready · select at least 2 to collaborate.`, collabNeedMore: 'Connect at least 2 agents to start collaborating.', pending: name => `${name} is thinking…`, panelPending: n => `${n}-agent panel`, resultReady: 'The AI panel has compared its answers.', resultInContext: 'Truncated Termux output is available in chat context.', commandReview: 'Review in Terminal →', commandRun: 'Run with approval', commandMoved: 'Command added for review. It has not run yet.', commandConfirm: 'Allow this command to run as the Termux user?', terminalConnected: 'Termux connected', serverOffline: 'Local server is not responding', startServer: 'Restart node server.js',
    errorPrefix: 'Error', requestFailed: 'Request failed.', keySaveFailed: 'The key could not be saved.', keySavedNotice: n => `${n} connected for this server session.`, keyDisconnectedNotice: 'Session key disconnected.', testFailed: n => `Test failed: ${n}`, testOk: n => `${n}: API responded successfully.`, collabPromptNeeded: 'Write a question or task for the AI panel first.', collabSelectTwo: 'Select at least two available agents.', collabFailed: 'Collaboration failed.', panelView: 'panel view', panelSynthesis: 'collaboration synthesis', couldNotRespond: 'Could not respond', panelError: 'error', collabErrorPrefix: 'Collaboration error', commandSendFailed: 'Command could not be sent.', noOutput: '(No output)', commandFailedText: 'Command failed.', timedOut: '\n\n[Command timed out after 30 seconds]', sentAt: 'Sent', historyMessages: n => `${n} messages in this session`, toolsChecking: 'Checking local tools…', toolsFailed: n => `Could not check tools: ${n}`, checkAgain: 'Refresh the connection check.', availableShort: 'Available', localReady: 'Ready', localOffline: 'Offline', deviceOffline: 'DEVICE OFFLINE', terminalOffline: 'offline', settingsAria: 'Provider settings', sendAria: 'Send message', closeAria: 'Close settings', skipLink: 'Skip to chat', agentReadyDesc: 'Available for chat or the collaboration panel. The CLI runs in the current project in read-only or plan mode.', agentMissingDesc: n => `Install and sign in to ${n} in Termux, then refresh the connection check.`, keyEnter: n => `Enter ${n} API key`, keyAria: n => `${n} API key`,
  },
};
const readSetting = (key, fallback) => { try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; } };
const writeSetting = (key, value) => { try { localStorage.setItem(key, value); } catch { } };
let language = readSetting('ghost-language', 'ms');
let theme = readSetting('ghost-theme', 'black');
let workMode = readSetting('ghost-mode', 'chat');
if (!['ms', 'en'].includes(language)) language = 'ms';
if (!['black', 'blue', 'hacker'].includes(theme)) theme = 'black';
if (!['chat', 'agent'].includes(workMode)) workMode = 'chat';
const providersState = new Map();
const agentsState = new Map();
const collabSelection = new Set();
const pendingKeys = new Map();
const history = [];
const deviceId = (() => {
  let id = readSetting('ghost-device-id', '');
  if (!/^[A-Za-z0-9_-]{1,64}$/.test(id)) {
    id = crypto.randomUUID();
    writeSetting('ghost-device-id', id);
  }
  return id;
})();
const pendingMemory = new Map();
let memoryModeName = 'local';
let memorySyncTimer;
let commandBusy = false;
let lastFocused = null;
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
    'memory-title': 'memoryTitle', 'memory-desc': 'memoryDesc', 'memory-sync': 'memorySync', 'memory-export': 'memoryExport', 'memory-import': 'memoryImport',
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
  $('#top-settings').setAttribute('aria-label', tr('settingsAria'));
  $('#send-button').setAttribute('aria-label', tr('sendAria'));
  $('#close-settings').setAttribute('aria-label', tr('closeAria'));
  $('#skip-link').textContent = tr('skipLink');
  $('#crumb-title').textContent = $('#terminal-view').classList.contains('active') ? tr('terminalView') : ($('#tools-view').classList.contains('active') ? tr('toolsView') : tr('chatView'));
  const providerLabels = language === 'ms'
    ? { openrouter: 'OpenRouter · Percuma', gemini: 'Google Gemini · Tier percuma', groq: 'Groq · Tier percuma', codex: 'Codex · CLI lokal', opencode: 'OpenCode · CLI lokal' }
    : { openrouter: 'OpenRouter · Free', gemini: 'Google Gemini · Free tier', groq: 'Groq · Free tier', codex: 'Codex · local CLI', opencode: 'OpenCode · local CLI' };
  for (const option of $('#provider-select').options) option.textContent = providerLabels[option.value];
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
  $('#context-note').textContent = tr('historyMessages')(history.length);
  if (!$('#last-run').dataset.ran) {
    $('#output').textContent = tr('waiting');
    $('#last-run').textContent = tr('notRun');
  }
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
    const parts = content.split(/```([a-zA-Z0-9_-]*)\s*\n([\s\S]*?)```/g);
    for (let i = 0; i < parts.length; i += 3) {
      if (parts[i]) { const block = document.createElement('span'); addText(block, parts[i]); body.append(block); }
      const lang = (parts[i + 1] || '').toLowerCase();
      const source = parts[i + 2];
      if (source === undefined) continue;
      if (!['bash', 'sh', 'shell', 'termux'].includes(lang)) {
        const block = document.createElement('pre');
        block.className = 'code-block';
        block.textContent = source.trim();
        body.append(block);
        continue;
      }
      const command = source.trim();
      const commandCard = document.createElement('div');
      commandCard.className = 'command-suggestion';
      const code = document.createElement('pre');
      code.textContent = command;
      const action = document.createElement('button');
      action.type = 'button';
      action.className = 'review-command';
      action.textContent = tr('commandReview');
      action.addEventListener('click', () => {
        $('#command').value = command;
        switchView('terminal');
        $('#command').focus();
        toast(tr('commandMoved'));
      });
      const run = document.createElement('button');
      run.type = 'button';
      run.className = 'run-suggested-command';
      run.textContent = tr('commandRun');
      run.addEventListener('click', () => executeTermuxCommand(command, true));
      commandCard.append(code, action, run);
      body.append(commandCard);
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

function cleanMemoryEntry(entry) {
  if (!entry || !['user', 'assistant'].includes(entry.role) || typeof entry.content !== 'string' || !entry.content.length) return null;
  const parsed = Date.parse(entry.created_at);
  return {
    id: typeof entry.id === 'string' ? entry.id : crypto.randomUUID(),
    role: entry.role,
    content: entry.content.slice(0, 8000),
    created_at: Number.isFinite(parsed) ? new Date(parsed).toISOString() : new Date().toISOString(),
    metadata: entry.metadata && typeof entry.metadata === 'object' && !Array.isArray(entry.metadata) ? entry.metadata : {},
  };
}

function sortMemory(entries) {
  return entries.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at));
}

function persistHistory() {
  try { localStorage.setItem('ghost-history', JSON.stringify(history.slice(-200))); } catch { }
}

function renderHistory() {
  if (!history.length) return;
  messages.replaceChildren();
  for (const entry of history.slice(-40)) renderMessage(entry.role, entry.content, entry.metadata?.label);
  messages.scrollTop = messages.scrollHeight;
}

function makeMemoryEntry(role, content, label = '') {
  return { id: crypto.randomUUID(), role, content, created_at: new Date().toISOString(), metadata: label ? { label } : {} };
}

function recordMemory(...entries) {
  for (const entry of entries) {
    if (!entry) continue;
    history.push(entry);
    pendingMemory.set(entry.id, entry);
  }
  if (history.length > 200) history.splice(0, history.length - 200);
  persistHistory();
  updateSelectedProvider();
  scheduleMemorySync();
}

function scheduleMemorySync() {
  clearTimeout(memorySyncTimer);
  memorySyncTimer = setTimeout(() => syncMemory(false), 1200);
}

async function syncMemory(manual = false) {
  clearTimeout(memorySyncTimer);
  const entries = [...pendingMemory.values()];
  if (!entries.length && !manual) return;
  try {
    const response = await fetch('/api/memory', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ deviceId, entries }) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || tr('requestFailed'));
    for (const entry of entries) pendingMemory.delete(entry.id);
    if (manual) toast(tr('memorySynced'));
  } catch (error) {
    if (manual) toast(tr('memoryFailed')(error.message));
  }
}

async function refreshMemoryStatus() {
  try {
    const response = await fetch('/api/memory/status');
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || tr('requestFailed'));
    memoryModeName = result.mode === 'supabase' ? 'supabase' : 'local';
  } catch { memoryModeName = 'local'; }
  const node = $('#memory-status');
  if (node) {
    node.textContent = memoryModeName === 'supabase' ? tr('memoryCloud') : tr('memoryLocal');
    node.classList.toggle('cloud', memoryModeName === 'supabase');
  }
}

async function loadMemory() {
  try {
    const stored = JSON.parse(readSetting('ghost-history', '[]'));
    if (Array.isArray(stored)) for (const item of stored) {
      const entry = cleanMemoryEntry(item);
      if (entry) history.push(entry);
    }
  } catch { }
  try {
    const response = await fetch(`/api/memory?device=${encodeURIComponent(deviceId)}&limit=200`);
    const result = await response.json();
    if (response.ok && Array.isArray(result.entries)) {
      const byId = new Map(history.map(entry => [entry.id, entry]));
      for (const item of result.entries) {
        const entry = cleanMemoryEntry(item);
        if (entry && !byId.has(entry.id)) byId.set(entry.id, entry);
      }
      history.splice(0, history.length, ...sortMemory([...byId.values()]).slice(-200));
      persistHistory();
    }
  } catch { }
  renderHistory();
  updateSelectedProvider();
  refreshMemoryStatus();
}

async function exportMemory() {
  try {
    const entries = history.slice(-200);
    const response = await fetch('/api/memory/export', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ deviceId, entries }) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || tr('requestFailed'));
    const url = URL.createObjectURL(new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `ghost-memory-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast(tr('memoryExported'));
  } catch (error) { toast(tr('memoryFailed')(error.message)); }
}

async function importMemory(file) {
  try {
    const bundle = JSON.parse(await file.text());
    const replace = window.confirm(tr('memoryImportAsk'));
    const response = await fetch('/api/memory/import', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ bundle, deviceId, mode: replace ? 'replace' : 'merge' }) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || tr('requestFailed'));
    const byId = new Map(history.map(entry => [entry.id, entry]));
    for (const item of bundle.entries || []) {
      const entry = cleanMemoryEntry(item);
      if (entry) byId.set(entry.id, entry);
    }
    history.splice(0, history.length, ...sortMemory([...byId.values()]).slice(-200));
    persistHistory();
    renderHistory();
    updateSelectedProvider();
    await syncMemory(false);
    toast(tr('memoryImported'));
  } catch (error) { toast(tr('memoryFailed')(error.message)); }
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
    if (!response.ok) throw new Error(result.error || tr('requestFailed'));
    recordMemory(makeMemoryEntry('user', text), makeMemoryEntry('assistant', result.reply, selectedLabel(id)));
    renderMessage('assistant', result.reply, selectedLabel(id));
    updateSelectedProvider();
  } catch (error) {
    $('#pending-message')?.remove();
    renderMessage('assistant', `${tr('errorPrefix')}: ${error.message}`, selectedLabel(id));
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
  key.type = 'password'; key.autocomplete = 'new-password'; key.spellcheck = false; key.placeholder = item.connected ? tr('keyPlaceholder') : tr('keyEnter')(providerInfo[id].name);
  key.dataset.provider = id;
  key.value = pendingKeys.get(id) || '';
  key.setAttribute('aria-label', tr('keyAria')(providerInfo[id].name));
  key.addEventListener('input', () => { if (key.value) pendingKeys.set(id, key.value); else pendingKeys.delete(id); });
  const save = document.createElement('button'); save.type = 'button'; save.textContent = tr('save');
  save.addEventListener('click', async () => {
    if (!key.value.trim()) return toast(tr('keySaved'));
    save.disabled = true;
    try {
      const response = await fetch(`/api/providers/${id}/key`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: key.value }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || tr('keySaveFailed'));
      key.value = '';
      pendingKeys.delete(id);
      toast(tr('keySavedNotice')(providerInfo[id].name));
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
      if (!response.ok) throw new Error(result.error || tr('requestFailed'));
      toast(tr('testOk')(providerInfo[id].name));
    } catch (error) { toast(tr('testFailed')(error.message)); }
    finally { test.textContent = tr('testApi'); test.disabled = !providersState.get(id)?.connected; }
  });
  const clear = document.createElement('button'); clear.type = 'button'; clear.className = 'clear-key'; clear.textContent = tr('disconnect'); clear.disabled = !item.connected || item.keySource === 'environment';
  clear.title = language === 'ms'
    ? (item.keySource === 'environment' ? 'Buang pemboleh ubah persekitaran untuk putuskan.' : 'Buang kunci daripada memori server.')
    : (item.keySource === 'environment' ? 'Remove the environment variable to disconnect.' : 'Remove the key from server memory.');
  clear.addEventListener('click', async () => {
    await fetch(`/api/providers/${id}/key`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: '' }) });
    await refreshConnections(); toast(tr('keyDisconnectedNotice'));
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
  desc.textContent = item.installed ? tr('agentReadyDesc') : tr('agentMissingDesc')(agentInfo[id].name);
  card.append(head, desc);
  return card;
}

function renderSettings() {
  const panel = $('#provider-settings'); panel.replaceChildren();
  for (const [id, item] of providersState) panel.append(providerCard(id, item));
  for (const [id, item] of agentsState) panel.append(localAgentCard(id, item));
}

function updateCollabButton() {
  const checked = [...collabSelection].filter(id => selectedAvailable(id)).length;
  $('#collab-button').disabled = checked < 2;
}

function renderCollabOptions() {
  const box = $('#collab-agents');
  const checked = new Set([...box.querySelectorAll('input:checked')].map(node => node.value));
  if (!checked.size && !collabSelection.size) {
    const first = Object.keys(providerInfo).find(id => selectedAvailable(id)) || Object.keys(agentInfo).find(id => selectedAvailable(id));
    if (first) checked.add(first);
  }
  box.replaceChildren();
  const all = [...Object.keys(providerInfo).map(id => ({ id, name: providerInfo[id].name })), ...Object.keys(agentInfo).map(id => ({ id, name: agentInfo[id].name }))];
  for (const item of all) {
    const enabled = selectedAvailable(item.id);
    const label = document.createElement('label'); label.className = `collab-chip${enabled ? '' : ' unavailable'}`;
    const check = document.createElement('input'); check.type = 'checkbox'; check.value = item.id; check.disabled = !enabled;
    check.checked = enabled && checked.has(item.id);
    check.addEventListener('change', () => {
      if (check.checked) collabSelection.add(item.id); else collabSelection.delete(item.id);
      updateCollabButton();
    });
    const name = document.createElement('span'); name.textContent = item.name;
    label.append(check, name); box.append(label);
  }
  collabSelection.clear();
  for (const id of checked) if (selectedAvailable(id)) collabSelection.add(id);
  const available = all.filter(item => selectedAvailable(item.id)).length;
  $('#collab-caption').textContent = available >= 2 ? tr('collabAvailable')(available) : tr('collabNeedMore');
  updateCollabButton();
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
      $(`#${id}-mini-state`).textContent = state ? tr('availableShort') : tr('cliMissing');
    }
    renderCollabOptions(); renderSettings(); updateSelectedProvider();
  } catch { toast(language === 'ms' ? 'Tidak dapat memeriksa ejen. Pastikan server masih berjalan.' : 'Could not check agents. Make sure the server is running.'); }
}

async function refreshStatus() {
  try {
    const response = await fetch('/api/status');
    const status = await response.json();
    if (!response.ok) throw new Error('Status gagal');
    $('#local-badge').textContent = tr('localReady'); $('#local-detail').textContent = status.cwd;
    $('#device-label').textContent = tr('deviceLabel');
    $('#terminal-device-status').textContent = tr('terminalConnected'); $('#terminal-cwd').textContent = status.cwd;
    $('#terminal-ready-label').textContent = tr('ready');
    $('#device-live-dot').classList.remove('offline');
    $('#footer-node').textContent = status.node.replace(/^v/, '');
  } catch {
    $('#local-badge').textContent = tr('localOffline'); $('#local-detail').textContent = tr('startServer');
    $('#device-label').textContent = tr('deviceOffline');
    $('#terminal-device-status').textContent = tr('localOffline'); $('#terminal-cwd').textContent = tr('serverOffline');
    $('#terminal-ready-label').textContent = tr('terminalOffline');
    $('#device-live-dot').classList.add('offline');
  }
}

function switchView(view) {
  for (const name of ['chat', 'terminal', 'tools']) $(`#${name}-view`).classList.toggle('active', view === name);
  document.querySelectorAll('.nav-link[data-view]').forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
  });
  $('#crumb-title').textContent = tr(view === 'terminal' ? 'terminalView' : view === 'tools' ? 'toolsView' : 'chatView');
  if (view === 'tools') refreshTools();
}

async function refreshTools() {
  const box = $('#tool-cards');
  if (!box) return;
  box.replaceChildren();
  const loading = document.createElement('p');
  loading.className = 'tools-loading';
  loading.textContent = tr('toolsChecking');
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
    message.textContent = tr('toolsFailed')(error.message);
    box.append(message);
  }
}

function openSettings() {
  lastFocused = document.activeElement;
  $('#settings-modal').hidden = false;
  $('#close-settings').focus();
}

function closeSettings() {
  $('#settings-modal').hidden = true;
  if (lastFocused && lastFocused.isConnected) lastFocused.focus();
}

async function collaborate() {
  if (busy) return;
  const prompt = input.value.trim();
  if (!prompt) return toast(tr('collabPromptNeeded'));
  const participants = [...$('#collab-agents').querySelectorAll('input:checked')].map(node => node.value);
  if (participants.length < 2) return toast(tr('collabSelectTwo'));
  const selected = $('#provider-select').value;
  const lead = participants.includes(selected) ? selected : participants[0];
  busy = true; $('#collab-button').disabled = true; sendButton.disabled = true;
  const next = [...history, { role: 'user', content: prompt }].slice(-16);
  renderMessage('user', `✦ ${tr('collabTitle')} (${participants.map(selectedLabel).join(', ')}):\n${prompt}`);
  input.value = '';
  renderPending(tr('panelPending')(participants.length));
  try {
    const response = await fetch('/api/collaborate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ participants, lead, mode: workMode, messages: next }) });
    const result = await response.json();
    $('#pending-message')?.remove();
    if (!response.ok) throw new Error(result.error || tr('collabFailed'));
    for (const item of result.results || []) {
      if (item.reply) renderMessage('assistant', item.reply, `${item.name} · ${tr('panelView')}`);
      else renderMessage('assistant', `${tr('couldNotRespond')}: ${item.error}`, `${item.name} · ${tr('panelError')}`);
    }
    renderMessage('assistant', result.summary, `${selectedLabel(result.lead)} · ${tr('panelSynthesis')}`);
    recordMemory(makeMemoryEntry('user', prompt), makeMemoryEntry('assistant', result.summary, `${selectedLabel(result.lead)} · ${tr('panelSynthesis')}`));
    toast(tr('resultReady'));
  } catch (error) {
    $('#pending-message')?.remove();
    renderMessage('assistant', `${tr('collabErrorPrefix')}: ${error.message}`, 'Ghost Platform');
    messages.lastElementChild?.classList.add('message-error');
  } finally { busy = false; sendButton.disabled = false; updateCollabButton(); updateSelectedProvider(); }
}

async function executeTermuxCommand(command, askFirst = false) {
  if (!command || busy || commandBusy) return;
  $('#command').value = command;
  switchView('terminal');
  if (askFirst && !window.confirm(`${tr('commandConfirm')}\n\n${command}`)) return;
  commandBusy = true;
  $('#run-button').disabled = true;
  $('#run-label').textContent = `… ${tr('run')}`;
  $('#output').textContent = `$ ${command}\n\n${tr('run')}…`;
  $('#last-run').textContent = `${tr('sentAt')} ${new Date().toLocaleTimeString()}`;
  $('#last-run').dataset.ran = 'true';
  try {
    const response = await fetch('/api/command', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ command }) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || tr('commandSendFailed'));
    const commandOutput = result.output || (result.ok ? tr('noOutput') : tr('commandFailedText'));
    $('#output').textContent = `$ ${command}\n\n${commandOutput}${result.timedOut ? tr('timedOut') : ''}`;
    recordMemory(makeMemoryEntry('user', `Termux output for \`${command}\` (exit ${result.code}):\n${commandOutput.slice(0, 4000)}`));
    updateSelectedProvider();
    toast(tr('resultInContext'));
    return result;
  } catch (error) {
    $('#output').textContent = `$ ${command}\n\n${tr('errorPrefix')}: ${error.message}`;
    toast(error.message);
    return null;
  } finally { commandBusy = false; $('#run-button').disabled = false; $('#run-label').textContent = tr('run'); }
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
  theme = ['black', 'blue', 'hacker'].includes(event.target.value) ? event.target.value : 'black';
  writeSetting('ghost-theme', theme);
  applyPreferences();
});
$('#language-select').addEventListener('change', event => {
  language = ['ms', 'en'].includes(event.target.value) ? event.target.value : 'ms';
  writeSetting('ghost-language', language);
  applyPreferences();
  refreshStatus();
  refreshConnections();
  refreshMemoryStatus();
});
$('#provider-select').addEventListener('change', updateSelectedProvider);
$('#refresh-tools').addEventListener('click', refreshTools);
document.querySelectorAll('.mode-option').forEach(button => button.addEventListener('click', () => {
  workMode = ['chat', 'agent'].includes(button.dataset.mode) ? button.dataset.mode : 'chat';
  writeSetting('ghost-mode', workMode);
  applyPreferences();
}));
$('#chat-form').addEventListener('submit', event => { event.preventDefault(); sendChat(); });
$('#collab-button').addEventListener('click', collaborate);
$('#chat-input').addEventListener('keydown', event => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendChat(); } });
document.querySelectorAll('.suggestions button').forEach(button => button.addEventListener('click', () => {
  if (busy) return;
  const prompt = language === 'ms' ? button.dataset.promptMs : button.dataset.promptEn;
  input.value = prompt;
  sendChat(prompt);
}));
$('#refresh-status').addEventListener('click', () => { refreshStatus(); refreshConnections(); refreshMemoryStatus(); });
$('#memory-sync').addEventListener('click', () => syncMemory(true));
$('#memory-export').addEventListener('click', exportMemory);
$('#memory-import').addEventListener('click', () => $('#memory-file').click());
$('#memory-file').addEventListener('change', async event => {
  const file = event.target.files?.[0];
  event.target.value = '';
  if (file) await importMemory(file);
});
$('#clear-output').addEventListener('click', () => { delete $('#last-run').dataset.ran; $('#output').textContent = tr('waiting'); $('#last-run').textContent = tr('notRun'); });
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && ['1', '2', '3'].includes(event.key)) {
    event.preventDefault();
    switchView({ 1: 'chat', 2: 'terminal', 3: 'tools' }[event.key]);
    return;
  }
  if ($('#settings-modal').hidden) return;
  if (event.key === 'Escape') { closeSettings(); return; }
  if (event.key !== 'Tab') return;
  const focusables = [...$('#settings-modal').querySelectorAll('button, select, input, a[href]')].filter(node => !node.disabled);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
$('#command-form').addEventListener('submit', async event => {
  event.preventDefault();
  const command = $('#command').value.trim();
  if (!command) return;
  await executeTermuxCommand(command, false);
});

refreshStatus();
applyPreferences();
refreshConnections();
loadMemory();
setInterval(refreshStatus, 12_000);
