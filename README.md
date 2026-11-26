# AI Termux Dashboard

Dashboard ringan untuk menjalankan arahan pada Termux yang sama. Pelayan berjalan secara lokal pada telefon; buka `http://127.0.0.1:3000` dalam pelayar Android.

## Mula

```sh
node server.js
```

Tiada pakej tambahan diperlukan. Gunakan Termux dan Node.js. Untuk hentikan pelayan, tekan `Ctrl+C` dalam Termux.

## Keselamatan

Pelayan hanya bind ke `127.0.0.1`, tidak membuka akses LAN atau internet. Arahan yang dihantar melalui dashboard berjalan sebagai pengguna Termux yang menjalankan pelayan dan boleh mengakses fail serta program yang pengguna itu boleh akses. Jalankan hanya arahan yang awak fahami. Jangan jadikan pelayan ini terbuka ke internet.

## Status

Ini asas sambungan lokal: dashboard menghantar arahan kepada Termux dan memaparkan output. Sambungan kepada model AI/API luaran belum dikonfigurasi; pilih penyedia AI dan tetapkan kunci API sebelum menambah fungsi chat AI.
