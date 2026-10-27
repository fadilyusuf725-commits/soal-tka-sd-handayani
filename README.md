# Latihan TKA SD — Handayani Course

Aplikasi latihan statis tanpa framework, server, font, atau layanan eksternal. Buka `index.html` di browser; semua konten, gambar soal, dan logo tersedia secara lokal.

## Isi

- 30 soal Bahasa Indonesia dan 30 soal Matematika dari berkas sumber di folder `Soal TKA`.
- Pilihan tunggal, pilihan jamak, dan pernyataan Benar/Salah.
- Pembahasan muncul setelah jawaban dikirim. Nilai memakai percobaan pertama.
- Nilai hanya menghitung soal yang kuncinya terverifikasi.

## Catatan peninjauan

Lima soal dikeluarkan dari nilai karena sumbernya memerlukan konfirmasi: Bahasa Indonesia nomor 13; Matematika nomor 1, 23, 26, dan 28. Aplikasi menjelaskan alasannya saat soal dikerjakan.

Kunci Bahasa Indonesia nomor 5 diverifikasi dari bagan pada dokumen, dan nomor 19 dijawab dari isi cerita. Kunci Matematika disusun dari data dan ilustrasi yang tersedia pada soal.

## Berkas proyek

- `index.html` — halaman aplikasi.
- `styles.css` — tampilan responsif.
- `app.js` — alur latihan dan penilaian.
- `questions.js` — kunci, tipe soal, dan pembahasan.
- `question-content.js` — konten soal hasil ekstraksi dokumen sumber.
- `assets/` — logo Handayani Course dan ilustrasi/diagram soal.

## Deploy

GitHub Actions menerbitkan situs ke GitHub Pages setiap ada perubahan pada branch `main`. Berkas workflow ada di `.github/workflows/deploy-pages.yml`.

URL situs: https://fadilyusuf725-commits.github.io/soal-tka-sd-handayani/

