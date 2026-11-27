# Ghost Platform · Termux workspace

Dashboard lokal untuk berbual dengan ejen AI, menjalankan panel tetap tiga AI secara serentak, dan menghantar cadangan arahan ke Termux pada telefon yang sama. Panel tetap menggunakan Codex (semakan kod), OpenCode (perancangan tindakan), dan Gemini 2.5 Flash free tier (penyelidikan serta sintesis). Setiap ejen mempunyai kepakaran tersendiri; Gemini menyatukan jawapan akhir.

## Mula dalam Termux

```sh
git clone https://github.com/ghostmalaysia/Platform-dashboard-for-ai.git
cd Platform-dashboard-for-ai
node server.js
```

Buka `http://127.0.0.1:3000` pada pelayar Android. **Daftar akaun dahulu** pada skrin masuk sebelum dashboard dipaparkan. Gunakan alamat itu dengan tepat: server hanya menerima `Host` dan `Origin` untuk alamat tersebut, dan hanya menerima permintaan `POST` berbentuk JSON. Tiada pakej Node tambahan diperlukan. Hentikan server dengan `Ctrl+C`. Pemboleh ubah `PORT` boleh ditukar, tetapi APK dan dashboard mengandaikan port 3000.

Pilih tema hitam, biru gelap atau hijau hacker serta Bahasa Melayu atau English melalui **Penyedia AI → Penampilan**. Tetapan disimpan dalam pelayar peranti. Mod **Chat** menjawab seperti perbualan biasa; **AI Agent** meminta model merancang tugasan dan tindakan dengan lebih berstruktur, termasuk dalam panel kolaborasi. Panel kolaborasi hanya aktif apabila Codex dan OpenCode dipasang serta Gemini disambung. Ketiga-tiga ejen dipanggil serentak oleh server; jika satu gagal, panel tetap meneruskan dengan dua jawapan dan memaklumkan keadaan tersebut. Arahan Termux masih perlu disemak dan diluluskan secara berasingan. Hanya blok kod `bash`, `sh`, `shell` atau `termux` yang menjadi kad arahan boleh jalankan; blok kod lain dipaparkan sebagai teks sahaja. Pintasan `Ctrl/⌘+1`, `+2`, `+3` bertukar antara Chat, Terminal dan Tools.

## Akaun & akses

Skrin **Daftar / Log masuk** muncul sebelum dashboard. Pendaftaran memerlukan emel sah dan kata laluan 8–128 aksara; nama paparan adalah pilihan. Kata laluan dihash dengan `scrypt` (garam rawak 16 bait) dan disimpan bersama senarai akaun dalam `data/accounts.json` pada peranti yang menjalankan server. Fail itu dibuat dengan kebenaran `0600` dan dikecualikan daripada Git. Gunakan `GHOST_DATA_DIR` untuk meletakkan fail akaun di lokasi lain.

Sesi berbentuk cookie `HttpOnly`, `SameSite=Strict` selama 7 hari dan tidak boleh dibaca oleh JavaScript. Semua endpoint `/api/*` kecuali `/api/auth/status`, `/api/auth/register`, `/api/auth/login` dan `/api/auth/logout` memerlukan sesi sah; tanpa itu server membalas `401`. Butang **Log keluar** di bar atas memadam sesi dan memuat semula skrin masuk. Pendaftaran terbuka kepada sesiapa yang boleh mencapai `127.0.0.1`; jangan dedahkan server ke LAN atau internet. Ini bukan sistem akaun awan dan tidak menghantar kod pengesahan emel.

## Tools GitHub

Buka **Tools & integrasi** untuk melihat CLI-Hub/CLI-Anything, Termux-MCP dan Termux:API, serta menyemak sama ada arahan tempatan tersedia. Kad alat hanya menyediakan arahan dalam Terminal untuk semakan; tiada pemasangan automatik. Butiran pemilihan dan kesesuaian lesen ada dalam [TOOL_SELECTION.md](TOOL_SELECTION.md).

## Sasaran platform

Ghost Platform dirancang untuk **Web, Android dan iOS**. Dashboard web ialah antara muka bersama. Integrasi Termux dan Termux:API hanya untuk Android; web dan iOS memerlukan connector masing-masing dan kebenaran peranti yang berasingan.

### APK Android (peringkat awal)

Folder `android/` mengandungi aplikasi WebView sumber terbuka yang menyambung ke Ghost Platform Node.js pada `http://127.0.0.1:3000`. Ia aplikasi pendamping: buka Termux, jalankan `node server.js`, kemudian buka APK. Ia bukan server Termux yang dibundel di dalam APK, dan belum ada lesen FOSS rasmi untuk pengedaran. Untuk membina APK, perlukan JDK 17, Gradle 8.9 (tiada Gradle wrapper disertakan), dan Android SDK API 35. Tetapkan `ANDROID_HOME` atau `local.properties`, kemudian jalankan `gradle --no-daemon -p android :app:assembleDebug`. Fail APK akan berada di `android/app/build/outputs/apk/debug/app-debug.apk`. Aplikasi membenarkan trafik tanpa TLS hanya untuk `127.0.0.1`; halaman luar dibuka dengan pelayar sistem.

F-Droid belum dihantar. Sebelum penghantaran, projek perlu menetapkan lesen FOSS, membina dan mengesahkan APK daripada sumber, melengkapkan metadata aplikasi, lalu menghantar metadata ke repositori `fdroiddata` untuk semakan. Rujuk [TOOL_SELECTION.md](TOOL_SELECTION.md) untuk nota kesediaan.

## Ejen yang disokong

- **Codex**: CLI lokal, guna sesi/log masuk Codex yang telah disediakan. Dashboard menjalankan `codex exec --json --sandbox read-only --skip-git-repo-check` dan membaca peristiwa JSONL.
- **OpenCode**: CLI lokal, guna model dan penyedia yang dikonfigurasi dalam OpenCode. Dashboard menjalankan `opencode run --agent plan`; agen `plan` tidak mengubah fail projek biasa, tetapi kebenaran shell masih dikawal oleh konfigurasi OpenCode.
- **OpenRouter Free**: laluan model percuma `openrouter/free`.
- **Google Gemini**: `gemini-2.5-flash` melalui free tier.
- **Groq**: `openai/gpt-oss-20b` melalui akaun Free.

CLI Codex dan OpenCode perlu tersedia dalam `PATH` Termux. Dashboard mengesan sama ada arahan `codex` dan `opencode` tersedia. Semak flag dengan `codex exec --help` dan `opencode run --help` selepas menaik taraf, kerana antara muka CLI boleh berubah. Untuk penyedia API, tambah kunci dalam **Penyedia AI**; atau eksport `OPENROUTER_API_KEY`, `GEMINI_API_KEY`, dan `GROQ_API_KEY` sebelum menjalankan server.

### Rujukan hulu dan notis

Ghost Platform dibina oleh `ghostmalaysia` dan **tidak dibina, disokong, atau disekutukan dengan pasukan OpenCode atau OpenAI**. OpenCode ialah projek [anomalyco/opencode](https://github.com/anomalyco/opencode) di bawah lesen MIT; rujukan arahan ada dalam [dokumentasi CLI OpenCode](https://opencode.ai/docs/cli/) dan [dokumentasi agen OpenCode](https://opencode.ai/docs/agents/). Integrasi ini bergantung pada CLI yang dipasang dalam Termux, bukan kod repositori hulu; versi baharu boleh mengubah flag atau gelagat agen.

Kunci yang ditaip dalam dashboard disimpan dalam memori server sahaja dan hilang apabila server dihentikan. Dashboard tidak membaca fail `.env` projek lain. Gunakan kunci Google/Groq yang benar-benar berada pada free tier; akaun bertier berbayar mungkin mengenakan caj. Free tier Google boleh menggunakan kandungan untuk menambah baik produk. OpenRouter Free mempunyai had permintaan dan ketersediaan model boleh berubah.

## Kolaborasi

Tekan **Kerjasama AI** untuk menjalankan panel tetap Codex + OpenCode + Gemini pada tugasan yang sama. Ketiga-tiga panggilan dibuat serentak (`Promise.all` di server) dengan arahan kepakaran berbeza: Codex menumpukan semakan kod/struktur, OpenCode kepada pelan tindakan selamat, dan Gemini kepada penemuan jurang serta sintesis. Gemini adalah ejen utama lalai; jika ia gagal, server memilih ejen berjaya lain untuk menyintesiskan jawapan. Panel kekal semasa menukar tema, bahasa atau mod. Mod Chat/AI Agent turut digunakan oleh panel ini. Setiap respons API menggunakan kuota penyedia.

## Memori & pemindahan

Perbualan disimpan dalam `localStorage` peranti (`ghost-history`) dan disegerakkan ke server lokal. Jika `SUPABASE_URL` dan `SUPABASE_SERVICE_ROLE_KEY` (atau `SUPABASE_ANON_KEY` dengan RLS yang betul) disediakan sebelum `node server.js`, memori disimpan dalam jadual `ghost_memory` di Supabase; sebaliknya ia kekal lokal. Workspace projek (`ghost-workspace`) pula menyimpan senarai projek, ejen terpilih, fail kongsi dan memori per-ejen. Kunci itu tidak dihantar ke pelayar atau APK.

Buat jadual ini dalam Supabase SQL Editor:

```sql
create table if not exists public.ghost_memory (
  id uuid primary key,
  device_id text not null,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  schema_version integer not null default 1
);
create index if not exists ghost_memory_device_created_idx on public.ghost_memory (device_id, created_at);

create table if not exists public.ghost_workspace (
  id uuid primary key,
  device_id text not null,
  kind text not null check (kind in ('project', 'file', 'agent_memory')),
  project_id text not null,
  agent_id text not null default '',
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
create index if not exists ghost_workspace_device_project_idx on public.ghost_workspace (device_id, project_id);
```

Guna **Penyedia AI → Memori & pemindahan** untuk **Segerak**, **Eksport** (JSON), atau **Import** (gabung/ganti). Bundle eksport schema `2` mengandungi `app`, `schema`, `exportedAt`, `deviceId`, `entries` dan `workspace.items`; bundle schema `1` masih diterima tanpa workspace. Tiada API key dalam bundle. Endpoint memori: `GET /api/memory`, `POST /api/memory`, `POST /api/memory/export`, `POST /api/memory/import`. Endpoint workspace: `GET /api/workspace?device=...&project=...` dan `POST /api/workspace`. Bila server baru tersedia, eksport dari sini dan import ke server itu menggunakan adapter yang sama. Projek Supabase free berhenti selepas 1 minggu tanpa aktiviti.

## Projek & ejen terpilih

Bar **Projek** di atas panel chat membolehkan projek dibuat/ditukar dan butiran dibuka melalui **Urus AI & fail**. Setiap projek menggunakan panel tetap tiga ejen (Codex, OpenCode, Gemini); anda boleh memilih ejen utama, simpan fail kongsi, dan tulis nota memori berasingan untuk setiap ejen. Fail kongsi dan memori ejen disuntik ke konteks sebagai data rujukan; kandungan fail tidak dibenarkan mengatasi arahan pengguna. `history` dipisahkan mengikut `metadata.projectId`.

Setiap ejen menerima konteks projek yang berbeza: fail kongsi sama untuk semua, tetapi nota memori hanya untuk ejen itu. Ejen utama projek (Gemini secara lalai) menghasilkan sintesis kolaborasi. Konteks projek dihantar kepada Gemini free tier, jangan simpan kata laluan atau data sulit dalam fail kongsi.

## Termux lokal

Server hanya bind pada `127.0.0.1`, menyekat `Host`/`Origin` bukan tempatan, memerlukan JSON untuk `POST`, menambah header keselamatan (termasuk CSP), dan mengehad kadar permintaan setiap laluan dalam ingatan. Arahan daripada AI boleh dipindahkan ke terminal untuk disemak, atau **Jalankan dengan izin** akan meminta pengesahan sebelum menjalankan arahan. Tiada arahan auto-dijalankan. Selepas arahan berjaya, butang **Minta AI semak output** menghantar output (dipendekkan kepada 4,000 aksara) kembali ke panel tiga AI sebagai data, bukan arahan, untuk cadangan langkah seterusnya. Output Termux tetap dihantar kepada Gemini free tier apabila panel digunakan, jadi semak output terlebih dahulu. Arahan berjalan sebagai pengguna Termux yang menjalankan server, dengan akses yang sama kepada fail dan program pengguna itu. Jangan dedahkan server ke LAN atau internet.

Akaun tempatan kini berasingan daripada identiti Supabase: ia hanya mengawal akses dashboard pada peranti ini. Memori boleh disegerakkan ke Supabase apabila pemboleh ubah persekitaran disediakan; tanpa itu, perbualan hanya kekal pada peranti dan dalam memori server semasa. Jangan anggap akaun pengguna telah disahkan oleh perkhidmatan awan.
