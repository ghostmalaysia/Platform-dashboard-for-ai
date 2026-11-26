# Ghost Platform · Termux workspace

Dashboard lokal untuk berbual dengan beberapa ejen AI, meminta mereka membandingkan jawapan, dan menghantar cadangan arahan ke Termux pada telefon yang sama. Susun atur pemilihan model dan mod Chat/AI Agent mengambil inspirasi umum daripada aliran kerja produk AI seperti Abacus.AI, dengan identiti dan sambungan Termux Ghost Platform.

## Mula dalam Termux

```sh
git clone https://github.com/ghostmalaysia/Platform-dashboard-for-ai.git
cd Platform-dashboard-for-ai
node server.js
```

Buka `http://127.0.0.1:3000` pada pelayar Android. Tiada pakej Node tambahan diperlukan. Hentikan server dengan `Ctrl+C`.

Pilih tema hitam, biru gelap atau hijau hacker serta Bahasa Melayu atau English melalui **Penyedia AI → Penampilan**. Tetapan disimpan dalam pelayar peranti. Mod **Chat** menjawab seperti perbualan biasa; **AI Agent** meminta model merancang tugasan dan tindakan dengan lebih berstruktur. Arahan Termux masih perlu disemak dan diluluskan secara berasingan.

## Tools GitHub

Buka **Tools & integrasi** untuk melihat CLI-Hub/CLI-Anything, Termux-MCP dan Termux:API, serta menyemak sama ada arahan tempatan tersedia. Kad alat hanya menyediakan arahan dalam Terminal untuk semakan; tiada pemasangan automatik. Butiran pemilihan dan kesesuaian lesen ada dalam [TOOL_SELECTION.md](TOOL_SELECTION.md).

## Sasaran platform

Ghost Platform dirancang untuk **Web, Android dan iOS**. Dashboard web ialah antara muka bersama. Integrasi Termux dan Termux:API hanya untuk Android; web dan iOS memerlukan connector masing-masing dan kebenaran peranti yang berasingan.

### APK Android (peringkat awal)

Folder `android/` mengandungi aplikasi WebView sumber terbuka yang menyambung ke Ghost Platform Node.js pada `http://127.0.0.1:3000`. Ia aplikasi pendamping: buka Termux, jalankan `node server.js`, kemudian buka APK. Ia bukan server Termux yang dibundel di dalam APK. Untuk membina APK, perlukan JDK 17, Gradle 8.9 dan Android SDK API 35; jalankan `gradle --no-daemon -p android :app:assembleDebug`. Fail APK akan berada di `android/app/build/outputs/apk/debug/app-debug.apk`.

F-Droid belum dihantar. Sebelum penghantaran, projek perlu menetapkan lesen FOSS, membina dan mengesahkan APK daripada sumber, melengkapkan metadata aplikasi, lalu menghantar metadata ke repositori `fdroiddata` untuk semakan. Rujuk [TOOL_SELECTION.md](TOOL_SELECTION.md) untuk nota kesediaan.

## Ejen yang disokong

- **Codex**: CLI lokal, guna sesi/log masuk Codex yang telah disediakan. Dashboard menggunakannya dalam mod baca sahaja.
- **OpenCode**: CLI lokal, guna model dan penyedia yang dikonfigurasi dalam OpenCode; dashboard meminta mod plan.
- **OpenRouter Free**: laluan model percuma `openrouter/free`.
- **Google Gemini**: `gemini-2.5-flash` melalui free tier.
- **Groq**: `openai/gpt-oss-20b` melalui akaun Free.

CLI Codex dan OpenCode perlu tersedia dalam `PATH` Termux. Dashboard mengesan sama ada arahan `codex` dan `opencode` tersedia. Untuk penyedia API, tambah kunci dalam **Penyedia AI**; atau eksport `OPENROUTER_API_KEY`, `GEMINI_API_KEY`, dan `GROQ_API_KEY` sebelum menjalankan server.

Kunci yang ditaip dalam dashboard disimpan dalam memori server sahaja dan hilang apabila server dihentikan. Dashboard tidak membaca fail `.env` projek lain. Gunakan kunci Google/Groq yang benar-benar berada pada free tier; akaun bertier berbayar mungkin mengenakan caj. Free tier Google boleh menggunakan kandungan untuk menambah baik produk. OpenRouter Free mempunyai had permintaan dan ketersediaan model boleh berubah.

## Kolaborasi

Pilih sekurang-kurangnya dua ejen yang tersedia, kemudian tekan **Kerjasama AI**. Ejen menjawab tugasan yang sama; ejen utama membaca jawapan tersebut dan menghasilkan sintesis. Setiap respons API menggunakan kuota penyedia.

## Termux lokal

Server hanya bind pada `127.0.0.1`. Arahan daripada AI boleh dipindahkan ke terminal untuk disemak, atau **Jalankan dengan izin** akan meminta pengesahan sebelum menjalankan arahan. Output Termux dimasukkan ke konteks chat untuk giliran seterusnya. Arahan berjalan sebagai pengguna Termux yang menjalankan server, dengan akses yang sama kepada fail dan program pengguna itu. Jangan dedahkan server ke LAN atau internet.

Pendaftaran pelanggan, memori awan dan penyegerakan Supabase belum disambungkan dalam build ini. Jangan anggap akaun atau perbualan telah disimpan ke awan.
