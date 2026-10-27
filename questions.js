(() => {
  const single = (subject, number, answer, why) => ({ subject, number, kind: 'single', answer, why });
  const multi = (subject, number, answer, why) => ({ subject, number, kind: 'multi', answer, why });
  const reviewChoice = (subject, number, labels, review, insight = '') => ({ subject, number, kind: 'single', labels, answer: null, review, insight });
  const tf = (subject, number, statements, labels = ['Benar', 'Salah'], review = '') => ({ subject, number, kind: 'tf', statements, labels, review });

  window.TKA_QUESTIONS = [
    single('bahasa', 1, 'D', {
      A: 'Tokoh yang mengusulkan bantuan adalah Hari, si harimau.',
      B: 'Ucil menerima bantuan; ia bukan pengusulnya.',
      C: 'Rino membawa kabar, tetapi bukan tokoh yang mengusulkan bantuan.',
      D: 'Hari si harimau mengusulkan agar para binatang meminta bantuan Ucil.'
    }),
    single('bahasa', 2, 'B', {
      A: 'Ungkapan ini bukan berarti tidak mampu bertindak.',
      B: '“Diam seribu bahasa” berarti diam, tidak mengucapkan sepatah kata pun.',
      C: 'Maknanya bukan menolak mendengarkan orang lain.',
      D: 'Ungkapan itu tidak berarti para binatang tidak mengetahui masalah.'
    }),
    tf('bahasa', 3, [
      { label: 'A', text: 'Tita memberi ide cemerlang yang dapat dilakukan oleh teman-teman di kelas.', answer: 'Tidak Sesuai', why: 'Dalam cerita, Ucil yang memberi gagasan untuk mengatasi masalah danau; pernyataan ini menyebut Tita.' },
      { label: 'B', text: 'Jani menghargai kepercayaan yang diberikan teman-teman sekelas kepada dirinya.', answer: 'Sesuai', why: 'Sikap Jani sejalan dengan tokoh yang menerima amanah dan menghargai kepercayaan teman-temannya.' },
      { label: 'C', text: 'Nina bertanggung jawab dalam menjalankan tugas yang dipercayakan kepadanya.', answer: 'Sesuai', why: 'Pernyataan ini menggambarkan tanggung jawab, nilai yang tampak dalam cerita.' }
    ], ['Sesuai', 'Tidak Sesuai']),
    multi('bahasa', 4, ['B', 'C'], {
      A: 'Sapi herbivora, tetapi tidak disebut sebagai hewan yang khusus memakan daun.',
      B: 'Koala disebut memakan daun eukaliptus.',
      C: 'Panda disebut memakan daun bambu.'
    }),
    single('bahasa', 5, 'D', {
      A: 'Bagan ini menempatkan cara mencerna daun sebelum pengertian folivora.',
      B: 'Contoh folivora muncul sebelum pengertiannya dan cara tubuhnya mencerna daun.',
      C: 'Contoh folivora ditempatkan sebelum penjelasan cara mencerna daun.',
      D: 'Urutannya sesuai teks: kelompok hewan, pengertian folivora, cara mencerna daun, lalu contohnya.'
    }),
    single('bahasa', 6, 'C', {
      A: 'Paragraf ketiga tidak membahas pilihan jenis daun.',
      B: 'Pembagian karnivora, herbivora, dan omnivora terdapat di paragraf pertama.',
      C: 'Paragraf ketiga menjelaskan usus panjang, gerak lebih lambat, bakteri baik, dan daun muda untuk membantu folivora mencerna daun.',
      D: 'Pentingnya menjaga hutan dibahas pada paragraf terakhir.'
    }),
    multi('bahasa', 7, ['B', 'C'], {
      A: 'Itu tuduhan Kenthus yang keliru. Anak lembu sedang makan rumput dan tidak berniat menyerangnya.',
      B: 'Koko menjelaskan bahwa anak lembu tidak jahat.',
      C: 'Koko menjelaskan bahwa lembu makan rumput, bukan katak.'
    }),
    single('bahasa', 8, 'C', {
      A: 'Kenthus mengira anak lembu hendak menelannya, tetapi cerita tidak menyatakan ia benar-benar hendak ditelan.',
      B: 'Kenthus terengah-engah saat menuju kolam, tetapi peristiwa itu bukan penyebab penyesalannya.',
      C: 'Kenthus mengembungkan tubuh berlebihan, jatuh lemas, lalu menyadari ia tidak mendengarkan nasihat Koko.',
      D: 'Koko menasihati Kenthus; cerita tidak menyebut Koko memarahinya.'
    }),
    tf('bahasa', 9, [
      { label: 'A', text: 'Terharu karena Kenthus mau mengakui kesalahannya.', answer: 'Benar', why: 'Di akhir cerita, Kenthus meminta maaf dan mengakui bahwa ia tidak mendengarkan nasihat.' },
      { label: 'B', text: 'Bahagia karena Kenthus berbaikan dengan anak lembu.', answer: 'Salah', why: 'Tidak ada adegan Kenthus bertemu atau berbaikan dengan anak lembu.' },
      { label: 'C', text: 'Antusias karena Kenthus bisa membuktikan kekuatannya.', answer: 'Salah', why: 'Kenthus justru jatuh lemas setelah mengembungkan tubuhnya; ia tidak membuktikan kekuatan.' }
    ]),
    single('bahasa', 10, 'D', {
      A: '“Menegangkan” bukan sekadar membuat orang waspada saat bekerja.',
      B: 'Maknanya bukan kehilangan fokus.',
      C: 'Pilihan ini dekat, tetapi terlalu menekankan rasa takut dan suasana serius.',
      D: 'Dalam konteks kalimat, “menegangkan” berarti menimbulkan kekhawatiran karena keadaan genting.'
    }),
    single('bahasa', 11, 'C', {
      A: 'Misi Apollo 11 berhubungan dengan pendaratan di Bulan, bukan perjalanan ke Venus.',
      B: 'Pernyataan ini tidak menjelaskan peran kode dalam misi.',
      C: 'Kode komputer membantu sistem pendaratan bekerja aman saat astronaut menuju permukaan Bulan.',
      D: 'Pesan kesalahan merupakan peringatan sistem, bukan tujuan atau dampak utama yang ditanyakan.'
    }),
    tf('bahasa', 12, [
      { label: 'A', text: 'Ketelitian bekerja sangat penting agar tidak terjadi kesalahan.', answer: 'Benar', why: 'Pengalaman Margaret Hamilton menunjukkan pentingnya kode yang teliti untuk mencegah kesalahan sistem.' },
      { label: 'B', text: 'Bekerja di proyek luar angkasa dapat memotivasi orang lain.', answer: 'Salah', why: 'Pernyataan ini tidak didukung langsung oleh informasi dan pelajaran yang disampaikan teks.' },
      { label: 'C', text: 'Tanggung jawab terhadap tugas membuat seseorang tetap fokus.', answer: 'Benar', why: 'Hamilton bertanggung jawab atas pekerjaannya dan tetap fokus pada keselamatan misi.' }
    ]),
    reviewChoice('bahasa', 13, ['A', 'B', 'C', 'D'], 'Perlu ditinjau tutor: teks mencantumkan lebih dari satu pilihan sebagai bahan atau alat yang digunakan.', 'Infografis menyebut mainan plastik, cat semprot, gunting atau cutter, lem tembak, dan magnet. Karena beberapa pilihan pada soal terdapat dalam daftar, kunci tunggal D tidak dapat dinilai secara adil.'),
    multi('bahasa', 14, ['A', 'C'], {
      A: 'Langkah kedua mengisi bagian mainan yang berlubang dengan tanah liat sehingga permukaannya tertutup rapi.',
      B: 'Pewarnaan dilakukan pada langkah berikutnya dan bahkan boleh dilewati; itu bukan tujuan langkah kedua.',
      C: 'Tanah liat menutup lubang pada mainan sebelum magnet ditempelkan.'
    }),
    single('bahasa', 15, 'B', {
      A: 'Membagi mainan bukan untuk memperbesar ukurannya.',
      B: 'Mainan dibagi agar magnet dapat ditempelkan di bagian dalam atau sisi yang rata.',
      C: 'Pewarnaan adalah langkah terpisah dan dapat dilewati.',
      D: 'Pemisahan bagian bukan hanya untuk memudahkan memberi lem; tujuannya membantu pemasangan magnet.'
    }),
    single('bahasa', 16, 'C', {
      A: 'Elektrolit bukan terutama untuk mengatur tekanan darah.',
      B: 'Teks infografis tidak menyebut peningkatan fungsi jantung sebagai fungsi utamanya.',
      C: 'Elektrolit membantu mengganti cairan tubuh dan mencegah dehidrasi.',
      D: 'Metabolisme disebut terkait mineral tertentu, bukan fungsi elektrolit yang ditanyakan.'
    }),
    single('bahasa', 17, 'A', {
      A: 'Infografis menjelaskan bahwa air putih berasal dari sumber yang mudah dijumpai seperti sungai, danau, sumur, atau mata air.',
      B: 'Banyaknya kandungan bukan alasan utama yang diberikan teks.',
      C: 'Teks membedakan proses sumber dan pengolahan; pilihan ini tidak menjelaskan mengapa air putih cocok diminum setiap saat.',
      D: 'Infografis mencantumkan rentang pH, tetapi bukan alasan utama pada soal.'
    }),
    tf('bahasa', 18, [
      { label: 'A', text: 'Menekankan pokok utama yang ingin disampaikan dalam infografis.', answer: 'Benar', why: 'Warna berbeda membuat kata “BEDA” sebagai pokok pembahasan lebih menonjol.' },
      { label: 'B', text: 'Menonjolkan informasi penting yang sedang dibahas dalam infografis.', answer: 'Benar', why: 'Warna oranye berfungsi memberi penekanan visual pada informasi utama.' },
      { label: 'C', text: 'Menyesuaikan warna yang mungkin akan disukai pembaca infografis.', answer: 'Salah', why: 'Teks tidak menyebut preferensi warna pembaca sebagai alasan pemilihan warna.' }
    ]),
    single('bahasa', 19, 'D', {
      A: 'Tia ikut menegur pemuda, tetapi bukan tokoh yang menenangkan dan menyelesaikan keributan.',
      B: 'Devi hanya diam dan mengangguk.',
      C: 'Kasir tidak disebut menyelesaikan keributan.',
      D: 'Pak Satpam datang, menenangkan situasi, dan meminta pemuda tetap mengantre.'
    }),
    multi('bahasa', 20, ['A', 'C'], {
      A: 'Tia dan Devi mencari buku lalu menuju kasir untuk membelinya.',
      B: 'Ibu menasihati pemuda yang menyerobot antrean, bukan Tia.',
      C: 'Tia ikut menegur pemuda dan mengingatkan bahwa semua orang perlu mengantre.'
    }),
    tf('bahasa', 21, [
      { label: 'A', text: 'Semua orang yang mengantre juga ingin cepat dilayani.', answer: 'Mendukung', why: 'Jika semua orang ingin cepat dilayani, alasan memiliki satu buku tidak memberi hak untuk mendahului.' },
      { label: 'B', text: 'Mengantre membutuhkan kesabaran setiap orang.', answer: 'Tidak Mendukung', why: 'Pernyataan ini menyebut sikap yang diperlukan, tetapi tidak langsung membantah alasan pemuda tentang satu buku dan waktu.' },
      { label: 'C', text: 'Aturan antrean harus dihormati oleh semua orang.', answer: 'Mendukung', why: 'Cerita menegaskan semua pengunjung harus mengikuti urutan antrean.' }
    ], ['Mendukung', 'Tidak Mendukung']),
    single('bahasa', 22, 'D', {
      A: 'Enamel dapat rusak, tetapi teks menjelaskan penyebab langsungnya.',
      B: 'Kekuatan enamel dibanding tulang bukan penyebab gigi berlubang yang dibahas.',
      C: 'Pembuluh darah dan saraf sensitif berada di bagian dalam gigi, bukan penyebab lubang.',
      D: 'Bakteri memakan sisa gula dan melepaskan asam yang merusak gigi hingga berlubang.'
    }),
    multi('bahasa', 23, ['A', 'C'], {
      A: 'Teks menyebut asam dari bakteri dapat merusak gigi dan menyebabkan lubang.',
      B: 'Gigi yang tidak dirawat tidak membuatnya mengunyah lebih lama; gigi justru dapat rusak.',
      C: 'Sisa makanan dan bakteri dapat menumpuk pada gigi yang tidak dirawat.',
      D: 'Gigi tidak tumbuh bakteri; bakteri berada pada sisa makanan di permukaannya.'
    }),
    tf('bahasa', 24, [
      { label: 'A', text: 'Mempermudah melihat perbedaan kondisi gigi tiap orang.', answer: 'Salah', why: 'Panah pada diagram menunjuk bagian-bagian gigi, bukan membandingkan gigi beberapa orang.' },
      { label: 'B', text: 'Menunjukkan lapisan-lapisan gigi yang sedang dijelaskan.', answer: 'Benar', why: 'Panah menunjuk enamel, dentin, dan pulpa pada gambar penampang gigi.' },
      { label: 'C', text: 'Menggambarkan bentuk dan fungsi dari setiap gigi manusia.', answer: 'Salah', why: 'Gambar menjelaskan bagian dalam satu gigi, bukan bentuk dan fungsi berbagai jenis gigi.' }
    ]),
    multi('bahasa', 25, ['A', 'B'], {
      A: 'Senyum saat melihat kedatangan sahabat menunjukkan kegembiraan dan kerinduan.',
      B: 'Sambutan dengan uluran tangan juga menggambarkan keinginan untuk bertemu dan dekat kembali.',
      C: 'Maaf yang terbuka menunjukkan sikap memaafkan, bukan kerinduan.'
    }),
    single('bahasa', 26, 'D', {
      A: 'Pilihan ini menggambarkan rasa aman dalam persahabatan, bukan makna “tak lekang oleh masa”.',
      B: 'Larik tersebut tidak sedang menceritakan pertemuan setelah lama berpisah.',
      C: 'Penghargaan dan rasa syukur disampaikan pada larik lain.',
      D: '“Tak lekang oleh masa” berarti kesetiaan dan persahabatan tetap kuat walau waktu atau jarak memisahkan.'
    }),
    single('bahasa', 27, 'C', {
      A: 'Puisi tidak mengajarkan seseorang selalu mengalah.',
      B: 'Tidak ada perbandingan yang menempatkan persahabatan di atas keluarga.',
      C: 'Puisi menonjolkan pengertian, kesetiaan, kebersamaan, dan saling menghargai.',
      D: 'Puisi mengakui sesekali ada marah dan salah, tetapi pesannya tentang menjaga persahabatan.'
    }),
    single('bahasa', 28, 'C', {
      A: 'Rengginang ditampilkan sebagai salah satu jenis kerupuk, bukan yang disebut paling tua.',
      B: 'Melarat juga merupakan jenis kerupuk, tetapi bukan jawaban yang disebut teks.',
      C: 'Teks menyebut kerupuk rambak sebagai jenis yang paling tua dan telah lama dikonsumsi.',
      D: 'Gendar adalah salah satu jenis kerupuk, bukan yang disebut paling tua.'
    }),
    tf('bahasa', 29, [
      { label: 'A', text: 'Memiliki nilai jual ke luar negeri hingga puluhan juta dolar.', answer: 'Benar', why: 'Teks menyebut nilai ekspor kerupuk pada 2021 lebih dari 35 juta dolar AS.' },
      { label: 'B', text: 'Sudah ada di Indonesia sejak abad ke-9 dan ke-10.', answer: 'Salah', why: 'Teks menyatakan abad ke-9 atau ke-10, bukan kedua abad sekaligus.' },
      { label: 'C', text: 'Dikirim ke luar negeri lebih dari 20 juta kilogram.', answer: 'Benar', why: 'Teks menyebut jumlah ekspor lebih dari 22 juta kilogram.' }
    ]),
    tf('bahasa', 30, [
      { label: 'A', text: 'Menggambarkan aneka ragam kerupuk yang terdapat di Indonesia.', answer: 'Benar', why: 'Gambar menampilkan beberapa bentuk dan jenis kerupuk.' },
      { label: 'B', text: 'Menginformasikan macam-macam kerupuk yang dikenal di Indonesia.', answer: 'Benar', why: 'Label pada gambar membantu pembaca mengenali jenis kerupuk.' },
      { label: 'C', text: 'Memberikan informasi tentang bahan-bahan kerupuk di Indonesia.', answer: 'Salah', why: 'Gambar menunjukkan kerupuk jadi, bukan bahan pembuatannya.' }
    ]),

    reviewChoice('matematika', 1, ['A', 'B', 'C', 'D'], 'Perlu ditinjau tutor: susunan soal pada dokumen tidak konsisten.', 'Perhitungannya menghasilkan 11/30: 120% − 3 + 2 × 0,75 + 2/3 = 6/5 − 3 + 3/2 + 2/3 = 11/30. Namun, 11/30 juga tampil berdampingan dengan rumus pada dokumen dan pilihan D kosong, sehingga soal tidak dinilai.'),
    single('matematika', 2, 'C', {
      A: 'Jumlah setelah diskon bukan Rp18.000,00; nilai itu hanya sama dengan harga buku tulis sebelum diskon.',
      B: 'Rp24.000,00 adalah harga buku komik sebelum diskon.',
      C: 'Buku gambar = 1/2 × Rp24.000 = Rp12.000; buku tulis = 0,75 × Rp24.000 = Rp18.000. Setelah diskon 10%, jumlahnya Rp10.800 + Rp16.200 = Rp27.000.',
      D: 'Rp30.000,00 melebihi jumlah harga kedua buku setelah diskon.'
    }),
    tf('matematika', 3, [
      { label: 'A', text: 'Pada hari itu Pak Bondan memproduksi 43¾ liter susu kedelai.', answer: 'Benar', why: '7 wadah × 6¼ liter = 7 × 25/4 = 175/4 = 43¾ liter.' },
      { label: 'B', text: 'Setiap botol besar diisi susu kedelai sebanyak 35/46 liter.', answer: 'Salah', why: 'Total 43¾ liter dibagi 50 botol besar sama dengan 7/8 liter per botol, bukan 35/46 liter.' },
      { label: 'C', text: 'Total susu kedelai yang dikemas dalam botol kecil adalah 525/46 liter.', answer: 'Salah', why: 'Isi botol kecil setengah botol besar: 7/16 liter. Untuk 15 botol jumlahnya 105/16 = 6 9/16 liter.' }
    ]),
    single('matematika', 4, 'B', {
      A: 'Jika sisi bawah 2, jumlah pasangan atas-bawah menjadi 4 + 2 = 6, berbeda dari pasangan sisi lain.',
      B: 'Jumlah titik seluruh sisi dadu 21; tiga pasangan berlawanan sama jumlahnya, jadi tiap pasangan berjumlah 7. Sisi bawah = 7 − 4 = 3.',
      C: '4 di sisi bawah akan membuat pasangan dengan sisi atas bernilai 8.',
      D: '5 di sisi bawah akan membuat pasangan dengan sisi atas bernilai 9.'
    }),
    multi('matematika', 5, ['A', 'C'], {
      A: '3.000 + 2 × 500 + 5 × 85 = 4.425 gram.',
      B: 'Lima mi beratnya 5 × 85 = 425 gram = 0,425 kg, kurang dari 0,5 kg.',
      C: 'Satu gula pasir 500 gram, lebih berat daripada seluruh mi yang beratnya 425 gram.'
    }),
    tf('matematika', 6, [
      { label: 'A', text: 'Banyak siswa yang mengunjungi perpustakaan pada hari Senin hanya ¾ dari pengunjung pada hari Rabu.', answer: 'Benar', why: 'Senin 15 orang dan Rabu 20 orang; 15/20 = 3/4.' },
      { label: 'B', text: 'Total siswa pengunjung perpustakaan dari Senin hingga Jumat adalah 100.', answer: 'Salah', why: 'Jumlahnya 15 + 18 + 20 + 24 + 20 = 97 orang.' },
      { label: 'C', text: 'Perbedaan banyak pengunjung harian dengan hari sebelumnya tidak lebih dari 5 orang.', answer: 'Benar', why: 'Selisih berturut-turut adalah 3, 2, 4, dan 4 orang; semuanya tidak lebih dari 5.' }
    ]),
    tf('matematika', 7, [
      { label: 'A', text: 'Rina membaca sepuluh buku.', answer: 'Benar', why: 'Piktogram menunjukkan lima gambar buku; tiap gambar mewakili dua buku, jadi 10.' },
      { label: 'B', text: 'Dika membaca buku lebih sedikit daripada Rina.', answer: 'Benar', why: 'Dika membaca 4 × 2 = 8 buku, lebih sedikit daripada Rina yang membaca 10.' },
      { label: 'C', text: 'Siti membaca tiga buku.', answer: 'Salah', why: 'Tiga gambar buku mewakili 3 × 2 = 6 buku.' }
    ]),
    single('matematika', 8, 'D', {
      A: '1,63 hektar bukan sisa gabungan lahan tomat dan daun bawang.',
      B: '1,87 hektar tidak sesuai dengan luas total dikurangi bagian cabai.',
      C: '2,33 hektar tidak sesuai dengan perhitungan bagian yang ditanyakan.',
      D: 'Lahan cabai = 1/5 × 3,5 = 0,7 hektar. Sisanya untuk tomat dan daun bawang = 3,5 − 0,7 = 2,8 hektar.'
    }),
    single('matematika', 9, 'B', {
      A: 'Volume tetap dikalikan dengan faktor perubahan panjang dan lebar; hasilnya bukan 4,5 m³.',
      B: 'Faktor volume = 2 × 1/2 × 1 = 1, jadi volume balok tetap 9 m³.',
      C: '18 m³ akan terjadi jika hanya panjang yang digandakan dan lebar tidak berubah.',
      D: 'Tidak ada perubahan yang membuat volume menjadi 22,5 m³.'
    }),
    single('matematika', 10, 'B', {
      A: '07.45 hanya menghitung waktu tempuh 1 jam 45 menit, belum memasukkan waktu berhenti.',
      B: '140 ÷ 80 = 1 jam 45 menit. Ditambah berhenti 15 menit menjadi 2 jam; 06.00 + 2 jam = 08.00.',
      C: '08.45 terlalu lama satu jam dari waktu yang dihitung.',
      D: '09.00 menambahkan waktu lebih panjang daripada perjalanan dan berhenti.'
    }),
    tf('matematika', 11, [
      { label: 'A', text: 'Lala harus menunggu 45 hari lagi untuk merayakan ulang tahunnya.', answer: 'Benar', why: 'Dari 30 April ke 14 Juni ada 31 hari pada Mei dan 14 hari pada Juni: total 45 hari.' },
      { label: 'B', text: 'Lala harus menunggu enam minggu dan tiga hari lagi untuk merayakan ulang tahunnya.', answer: 'Benar', why: 'Enam minggu tiga hari = 42 + 3 = 45 hari.' },
      { label: 'C', text: 'Lala harus menunggu dua bulan untuk merayakan ulang tahunnya.', answer: 'Salah', why: 'Dari 30 April ke 14 Juni kurang dari dua bulan penuh; waktunya 45 hari.' }
    ]),
    single('matematika', 12, 'B', {
      A: 'Sisa berat mangga 1,75 kg dibagi tujuh bukan 0,2 kg.',
      B: 'Berat mangga = (3 − 1,25) ÷ 7 = 1,75 ÷ 7 = 0,25 kg per buah.',
      C: '0,3 kg menghasilkan total mangga 2,1 kg, melebihi sisa 1,75 kg.',
      D: '0,35 kg menghasilkan total mangga 2,45 kg, melebihi sisa 1,75 kg.'
    }),
    tf('matematika', 13, [
      { label: 'A', text: 'Air di dalam tangki tersebut adalah 80 liter.', answer: 'Benar', why: '1 hektoliter = 100 liter; 0,8 hektoliter = 80 liter.' },
      { label: 'B', text: 'Petani dapat mengisi bak penampungan sebanyak lima kali hingga tangki kosong.', answer: 'Salah', why: '80 liter ÷ 20 liter per bak = 4 kali, bukan 5.' },
      { label: 'C', text: 'Jika satu baris tanaman cabai membutuhkan 40 dl air, sepuluh baris mengurangi isi tangki menjadi setengahnya.', answer: 'Benar', why: '40 dl = 4 liter per baris; 10 baris memakai 40 liter, yaitu setengah dari 80 liter.' }
    ]),
    multi('matematika', 14, ['A', 'B'], {
      A: '8 × 2 × 4 = 64 kubus satuan, sesuai kapasitas yang diminta.',
      B: '4 × 4 × 4 = 64 kubus satuan, sesuai kapasitas yang diminta.',
      C: '4 × 3 × 5 = 60 kubus satuan, kurang dari 64.'
    }),
    tf('matematika', 15, [
      { label: 'A', text: 'Jarak kandang Zebra adalah 6.000 mm.', answer: 'Salah', why: 'Papan menunjukkan 60 m = 60.000 mm, bukan 6.000 mm.' },
      { label: 'B', text: 'Jarak kandang Capybara dan Kanguru adalah 1.500 cm.', answer: 'Benar', why: 'Keduanya berada searah dari papan: 50 − 35 = 15 m = 1.500 cm.' },
      { label: 'C', text: 'Dari Jerapah ke Kanguru, Nisa berjalan sejauh 0,11 km.', answer: 'Benar', why: 'Kembali 75 m ke papan lalu berjalan 35 m ke Kanguru: 110 m = 0,11 km.' }
    ]),
    single('matematika', 16, 'B', {
      A: '320 = 15 × 21 + 5, jadi sisanya bukan 4 cm.',
      B: '320 cm dibagi 15 cm menghasilkan 21 stik dengan sisa 5 cm.',
      C: 'Sisa pembagian bukan 6 cm.',
      D: 'Sisa pembagian bukan 7 cm.'
    }),
    single('matematika', 17, 'C', {
      A: '4 minggu belum memenuhi jadwal setiap 3 minggu.',
      B: '6 minggu belum memenuhi jadwal setiap 4 minggu.',
      C: 'KPK dari 2, 3, dan 4 adalah 12; mereka bertemu lagi setiap 12 minggu.',
      D: '18 bukan kelipatan 4, sehingga jadwal ketiga sekolah belum bersamaan.'
    }),
    single('matematika', 18, 'A', {
      A: 'a = 5 − 7/2 = 3/2 dan b = 3/4 − 1/2 = 1/4. Maka a − 2b = 3/2 − 1/2 = 1.',
      B: '1¼ tidak sesuai setelah 2b = 1/2 dikurangkan dari a = 1½.',
      C: '2 bukan hasil dari 1½ − ½.',
      D: '2¼ lebih besar daripada nilai a dan tidak sesuai operasi.'
    }),
    single('matematika', 19, 'B', {
      A: 'Satu dari delapan potong sama besar adalah 1/8, tetapi ada dua potong cokelat.',
      B: 'Dua dari delapan potong = 2/8 = 1/4.',
      C: 'Setengah kue berarti empat dari delapan potong berwarna cokelat.',
      D: 'Tiga perempat kue berarti enam dari delapan potong berwarna cokelat.'
    }),
    single('matematika', 20, 'B', {
      A: '58 m belum menjumlahkan seluruh sisi batas bidang tanah.',
      B: 'Sisi yang belum diberi panjang diperoleh dari tanda sama panjang; sisi miring adalah 10 m dari segitiga 6–8–10. Jumlah semua sisi = 68 m.',
      C: '72 m menghitung beberapa sisi terlalu panjang.',
      D: '96 m tidak sesuai dengan panjang sisi yang tertera dan sisi yang dapat diturunkan.'
    }),
    single('matematika', 21, 'C', {
      A: '8 dus hanya menyediakan 192 buku, kurang dari kebutuhan.',
      B: '10 dus menyediakan 240 buku, masih kurang.',
      C: 'Jumlah siswa 28 + 36 + 32 = 96; kebutuhan 96 × 3 = 288 buku. 288 ÷ 24 = 12 dus.',
      D: '24 dus menyediakan jauh lebih banyak daripada 288 buku.'
    }),
    single('matematika', 22, 'B', {
      A: '0,4 bagian = 40%, bukan 3/5.',
      B: '60% = 60/100 = 3/5.',
      C: '1/3 bukan 3/5.',
      D: '5,5 km dari 10 km = 55%, bukan 60%.'
    }),
    reviewChoice('matematika', 23, ['A', 'B', 'C', 'D'], 'Perlu ditinjau tutor: sifat-sifat yang ditulis cocok untuk lebih dari satu pilihan.', 'Persegi mempunyai empat sisi sama panjang, dua pasang sisi sejajar, diagonal tegak lurus, dan sudut berhadapan sama besar. Belah ketupat juga memenuhi keempat ciri tersebut. Soal perlu menambahkan ciri pembeda sebelum dinilai.'),
    single('matematika', 24, 'C', {
      A: '09.45 adalah waktu kegiatan menari selesai, belum ditambah istirahat.',
      B: 'Rani meninggalkan sanggar setelah 20 menit istirahat, bukan pukul 10.00.',
      C: '07.25 + 45 menit = 08.10; + 1 jam 35 menit = 09.45; + 20 menit = 10.05.',
      D: '10.25 menambahkan waktu lebih lama daripada yang tertera.'
    }),
    single('matematika', 25, 'B', {
      A: '9 adalah jumlah tempat kosong jika kapasitas dihitung 12; denah menyatakan panjang lahan 24 m lebih besar dari lebar 4 m.',
      B: 'Panjang lahan = 4 + 24 = 28 m. Dengan kebutuhan 2 m per mobil, kapasitas 14 mobil. Setelah satu dari lima mobil keluar, tersisa 4; 14 − 4 = 10 tempat.',
      C: '12 adalah kapasitas jika panjang dianggap 24 m, padahal denah menyatakan panjang 24 m lebih besar dari lebar.',
      D: '14 merupakan kapasitas total, belum dikurangi empat mobil yang masih terparkir.'
    }),
    tf('matematika', 26, [
      { label: 'A', text: 'Terdapat 4 motor yang sudah keluar dari lahan parkir sebelum pukul 13.00.', answer: null, why: 'Dokumen tidak memberi jumlah motor yang keluar sebelum pukul 13.00, jadi pernyataan ini tidak dapat dipastikan.' },
      { label: 'B', text: 'Sebelum 12 motor memasuki lahan parkir, lahan parkir sudah terisi oleh 8 motor.', answer: 'Salah', why: 'Denah menunjukkan kapasitas 20 motor. Setelah 12 masuk masih dapat menampung 1 lagi, berarti sudah ada 7 motor sebelumnya, bukan 8.' },
      { label: 'C', text: 'Pada pukul 13.00 lahan parkir terisi oleh 20 motor.', answer: 'Salah', why: 'Jika masih dapat menampung 1 motor lagi, saat itu baru terisi 19 motor.' }
    ], ['Benar', 'Salah'], 'Perlu ditinjau tutor: pernyataan A tidak dapat dipastikan dari informasi soal; seluruh butir dikeluarkan dari nilai.'),
    single('matematika', 27, 'D', {
      A: '34% bukan persentase 3/4.',
      B: '50% sama dengan 1/2.',
      C: '66% mendekati 2/3.',
      D: 'Caca membaca 3/4 buku; 3 ÷ 4 × 100% = 75%.'
    }),
    tf('matematika', 28, [
      { label: 'A', text: 'Danu sudah membaca 219 halaman.', answer: 'Salah', why: '2/3 × 329 = 658/3 = 219⅓ halaman, bukan tepat 219.' },
      { label: 'B', text: 'Antok sudah membaca 170 halaman.', answer: 'Benar', why: '50% × 340 = 170 halaman.' },
      { label: 'C', text: 'Caca sudah membaca 287 halaman.', answer: 'Salah', why: '3/4 × 382 = 286,5 halaman, bukan tepat 287.' }
    ], ['Benar', 'Salah'], 'Perlu ditinjau tutor: soal tidak menetapkan aturan pembulatan untuk jumlah halaman pecahan; hasil eksak untuk Danu dan Caca bukan bilangan bulat.'),
    multi('matematika', 29, ['A', 'C'], {
      A: 'Daging sapi mengandung 26 g protein per 100 g. Dalam 250 g terdapat 65 g, cukup untuk kebutuhan minimal 55 g.',
      B: 'Telur ayam mengandung 13 g per 100 g; dalam 250 g terdapat 32,5 g, belum cukup.',
      C: 'Ikan mengandung 22 g per 100 g; dalam 250 g terdapat 55 g, tepat memenuhi kebutuhan minimal.'
    }),
    tf('matematika', 30, [
      { label: 'A', text: 'Ibu hamil dapat menambah konsumsi 50 gram ikan untuk memenuhi kebutuhan protein.', answer: 'Salah', why: 'Protein awal 58 g; 50 g ikan menambah 11 g (22 g per 100 g), menjadi 69 g, masih di bawah 70 g.' },
      { label: 'B', text: 'Ibu hamil dapat menambah konsumsi 50 gram keju untuk memenuhi kebutuhan lemak.', answer: 'Salah', why: 'Lemak awal 45 g; 50 g keju menambah sekitar 16,5 g (33 g per 100 g), menjadi 61,5 g, masih di bawah 62 g.' },
      { label: 'C', text: 'Ibu hamil dapat menambah konsumsi 50 gram daging sapi untuk memenuhi kebutuhan protein.', answer: 'Benar', why: 'Protein awal 58 g; 50 g daging sapi menambah 13 g (26 g per 100 g), menjadi 71 g dan mencapai batas minimal 70 g.' }
    ])
  ];
})();
