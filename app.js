const statusText = document.querySelector('#status-text');
const statusNote = document.querySelector('#status-note');
const sideState = document.querySelector('#side-state');
const output = document.querySelector('#output');
const form = document.querySelector('#command-form');
const input = document.querySelector('#command');
const runButton = document.querySelector('#run-button');

async function refreshStatus() {
  try {
    const response = await fetch('/api/status');
    const status = await response.json();
    if (!response.ok) throw new Error('Tidak dapat menyambung');
    statusText.textContent = 'Bersambung';
    statusNote.textContent = 'Termux aktif pada peranti ini';
    sideState.textContent = 'Bersambung';
    document.querySelector('#cwd').textContent = status.cwd;
    document.querySelector('#runtime').textContent = `Node.js ${status.node.replace(/^v/, '')}`;
  } catch {
    statusText.textContent = 'Terputus';
    statusNote.textContent = 'Mulakan server.js dalam Termux';
    sideState.textContent = 'Terputus';
  }
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  const command = input.value.trim();
  if (!command) return;
  runButton.disabled = true;
  runButton.innerHTML = '<span>…</span> Menjalankan';
  output.textContent = `$ ${command}\n\nSedang berjalan…`;
  document.querySelector('#last-run').textContent = `Dihantar ${new Date().toLocaleTimeString('ms-MY')}`;
  try {
    const response = await fetch('/api/command', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Arahan gagal dihantar.');
    const text = result.output || (result.ok ? '(Tiada output)' : 'Arahan gagal.');
    output.textContent = `$ ${command}\n\n${text}${result.timedOut ? '\n\n[Masa arahan tamat selepas 30 saat]' : ''}`;
  } catch (error) {
    output.textContent = `$ ${command}\n\nRalat: ${error.message}`;
  } finally {
    runButton.disabled = false;
    runButton.innerHTML = '<span>▶</span> Jalankan';
  }
});

document.querySelector('#clear-output').addEventListener('click', () => {
  output.textContent = 'Menunggu arahan…';
  document.querySelector('#last-run').textContent = 'Belum ada arahan';
});
document.querySelector('#focus-terminal').addEventListener('click', () => {
  document.querySelector('#terminal-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
  input.focus({ preventScroll: true });
});
refreshStatus();
setInterval(refreshStatus, 10_000);
