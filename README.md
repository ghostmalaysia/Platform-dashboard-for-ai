# ruangAI · Termux workspace

Dashboard lokal untuk berbual dengan beberapa ejen AI, meminta mereka membandingkan jawapan, dan menghantar cadangan arahan ke Termux pada telefon yang sama.

## Mula dalam Termux

```sh
git clone https://github.com/ghostmalaysia/Platform-dashboard-for-ai.git
cd Platform-dashboard-for-ai
node server.js
```

Buka `http://127.0.0.1:3000` pada pelayar Android. Tiada pakej Node tambahan diperlukan. Hentikan server dengan `Ctrl+C`.

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
