# 🛠️ MyPro - Web Utility Hub & Project Catalog

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-success?style=for-the-badge&logo=github&logoColor=white)](https://williyanto.github.io/mypro/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](#)

Selamat datang di **MyPro**, sebuah hub web portal interaktif yang mengintegrasikan berbagai aplikasi utilitas, kalkulator teknik, alat pengujian material, serta instrumen produktivitas berbasis web. Seluruh aplikasi dirancang menggunakan teknologi web native ringan agar dapat diakses dengan cepat dan responsif dari perangkat apa pun.

🔗 **Live Demo:** [willyanto.github.io/mypro/](https://williyanto.github.io/mypro/)

---

## 🌟 Fitur Utama Portal

Dashboard utama dilengkapi dengan fitur modern untuk mempermudah pencarian dan navigasi antar-proyek:
* 🌓 **Mode Gelap/Terang (Dark/Light Mode):** Toggle tema yang menyimpan preferensi pengguna secara lokal (*Local Storage*).
* 🔍 **Pencarian Real-Time:** Filter proyek secara instan langsung saat mengetik.
* 🎛️ **Tata Letak Dinamis (Grid/List View):** Ubah tampilan proyek dalam bentuk kartu (Grid) atau baris daftar (List) sesuai kenyamanan mata.
* ⏰ **Jam Digital Real-Time:** Menampilkan hari, tanggal, dan waktu presisi pada bagian atas portal.
* ✨ **Micro-Animations:** Transisi halus saat melakukan scroll (*Intersection Observer API*) dan efek hover interaktif.

---

## 📁 Kategori & Daftar Aplikasi

Aplikasi utilitas di dalam repositori ini dikelompokkan secara logis ke dalam beberapa kategori utama:

### ⚡ Teknik Elektro & Perkabelan
Aplikasi kalkulator dan konverter untuk menunjang pekerjaan di bidang kelistrikan, resistor, dan manajemen kabel.
* **Kalkulator Hambatan Konduktor (`/1.kalkulator_hambatan_konduktor`):** Menghitung nilai hambatan listrik pada konduktor.
* **Konverter Hambatan IR (`/2.konverter_hambatan`):** Alat konversi nilai resistansi internal (IR) rangkaian listrik.
* **Hitung Panjang Kabel di Drum (`/5.hitungpanjangkabel_didrum`):** Estimasi panjang sisa kabel yang digulung pada drum.
* **Kalkulator Resistor (`/10.kalkulator_resistor`):** Identifikasi nilai hambatan berdasarkan gelang warna resistor.
* **Kalkulator Hambatan Trial (`/12.CR_trial`):** Eksperimen perhitungan resistansi dinamis.
* **Kalkulator Daya Listrik (`/21.kalkulator_daya_listrik`):** Menghitung daya, tegangan, arus, dan hambatan (Hukum Ohm).

### 🧪 Material & Pengujian (Engineering Tests)
Kalkulator kalkulasi parameter laboratorium dan pengujian kualitas material.
* **Kalkulator Uji Bending (`/6.uji_tekuk_bending_fix`):** Analisis hasil dan parameter uji tekuk bending pada material.
* **Uji Cold Bending (`/7.coldbending_test`):** Perhitungan hasil pengujian tekuk dingin (cold bending).
* **Uji Heat Shock (`/8.heatshock_test`):** Evaluasi ketahanan material terhadap perubahan suhu ekstrem yang tiba-tiba.
* **Faktor Koreksi Suhu (`/22.faktor_koreksi_suhu`):** Perhitungan faktor koreksi temperatur untuk pengukuran kelistrikan/material.
* **Uji Bakar / Flame Retardant (`/29.flame_retardant`):** Pengukuran tingkat ketahanan bakar material terhadap api.

### 🔢 Matematika, Dimensi & Logika
* **Konverter Panjang (`/3.konverter_panjang`):** Konversi cepat berbagai satuan panjang (mm, cm, m, inch, feet, dll).
* **Kalkulator Dimensi (`/4.kalkulator_dimensi`):** Menghitung dimensi geometris objek fisik.
* **Generator Angka Acak (`/9. generator_angka`):** Menghasilkan angka acak dengan rentang parameter tertentu.
* **Hitung Volume Drum (`/27.volume_drum`):** Perhitungan volume cairan dalam drum silinder (posisi horizontal maupun vertikal).
* **Kalkulator Waktu (`/28.kalkulator_waktu`):** Alat hitung selisih dan kalkulasi akumulasi waktu.

### 💼 Manajemen & Produktivitas Keuangan
* **Kalkulator Alokasi Gaji (`/17.alokasi_gaji`):** Pembagian pos pengeluaran bulanan berdasarkan persentase (misal: 50/30/20).
* **Pengatur Keuangan (`/23.Pengatur_Uang`):** Catatan pengeluaran dan pemasukan sederhana.
* **Manajemen Aset (`/24.manajemen_aset`):** Sistem inventarisasi aset digital atau fisik.
* **Kalkulator Jam Lembur (`/30.hitung_jamlembur`):** Perhitungan upah lembur karyawan berdasarkan regulasi jam kerja.

### 🎮 Edukasi & Multimedia
* **Android KW (`/11.android_kw`):** Halaman simulasi/antarmuka bergaya Android OS.
* **Streaming Video (`/14.web streaming video`):** Player pemutar video streaming ringan.
* **Cari Metadata Musik (`/25.cari_metadata_musik`):** Ekstraksi dan pencarian informasi metadata file audio.
* **Analisis Kripto (`/26.analisis kripto`):** Simulasi pemantauan harga aset kripto.
* **Mainan Edukasi Anak (`/31.mainan_edukasi`):** Aplikasi game edukasi interaktif untuk anak pintar.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun sepenuhnya menggunakan teknologi web client-side tanpa membutuhkan server backend:
- **HTML5:** Struktur semantik dokumen web.
- **CSS3 & Bootstrap 5.3:** Framework CSS untuk layouting responsif dan komponen visual.
- **Bootstrap Icons:** Set ikon vektor modern.
- **Vanilla JavaScript (ES6+):** Logika kalkulator, manipulasi DOM, filter pencarian, dan sistem dark mode.

---

## 🚀 Cara Menjalankan Secara Lokal

Karena proyek ini bersifat statis, Anda tidak memerlukan server web khusus. Cukup ikuti langkah berikut:

1. **Clone Repositori:**
   ```bash
   git clone https://github.com/williyanto/mypro.git
   ```
2. **Masuk ke Direktori:**
   ```bash
   cd mypro
   ```
3. **Buka di Browser:**
   Klik ganda pada file `index.html` untuk menjalankan portal langsung di browser favorit Anda. Atau gunakan extension *Live Server* di VS Code untuk pengalaman development terbaik.

---

## 👤 Penulis
* **Williyanto Adi** - Developer & Kreator
* GitHub: [@williyanto](https://github.com/williyanto)
