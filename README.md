# Praktikum React

## 1. Deskripsi Proyek

Proyek ini merupakan aplikasi web berbasis React yang dibuat untuk memenuhi tugas praktikum. Aplikasi ini menerapkan konsep JSX, komponen, props, state, event handling, key, dan localStorage.

Aplikasi terdiri dari fitur profil mahasiswa, daftar mata kuliah, penghitung kehadiran, dan daftar tugas yang dapat dikelola oleh pengguna.

## 2. Tujuan

Tujuan proyek ini adalah memahami dasar pengembangan antarmuka web menggunakan React, menerapkan komponen yang dapat digunakan kembali, mengelola data yang berubah menggunakan state, serta membuat fitur interaktif dan penyimpanan data pada browser.

## 3. Teknologi yang Digunakan

- **React 19.3.0**: membangun antarmuka pengguna.
- **React DOM 19.3.0**: menampilkan komponen React pada halaman web.
- **Vite 8.3.4**: menjalankan server pengembangan dan membangun aplikasi.
- **Plugin React Vite 6.1.2**: mendukung penggunaan React pada Vite.
- **JavaScript**: mengatur logika dan interaksi aplikasi.
- **CSS**: mengatur tampilan aplikasi.
- **localStorage**: menyimpan daftar tugas di browser.
- **Node.js 24.21.0**: lingkungan untuk menjalankan JavaScript dan perkakas pengembangan.
- **npm 11.19.0**: mengelola dependensi proyek.

## 4. Struktur Proyek

```text
praktikum-react/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── DaftarTugas.jsx
│   ├── main.jsx
│   ├── MataKuliah.jsx
│   ├── PenghitungKehadiran.jsx
│   └── ProfilMahasiswa.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 5. Fitur Aplikasi

### 5.1 Profil Mahasiswa
Menampilkan informasi mahasiswa berupa nama, NIM, dan program studi. Data ditampilkan menggunakan komponen React dan props.

### 5.2 Daftar Mata Kuliah
Menampilkan minimal empat mata kuliah dalam bentuk kartu. Daftar ditampilkan menggunakan fungsi `map()` dan setiap elemen memiliki `key` yang unik.

### 5.3 Penghitung Kehadiran
Menyediakan tombol tambah, kurang, dan reset. Jumlah kehadiran dibatasi dari 0 hingga 30 menggunakan state dan event handling.

### 5.4 Daftar Tugas
Memungkinkan pengguna menambahkan tugas, mengubah status tugas, dan memfilter tugas berdasarkan kategori Semua, Aktif, dan Selesai.

### 5.5 Penyimpanan Data
Menggunakan `localStorage` agar daftar tugas tetap tersimpan ketika halaman dimuat ulang.

### 5.6 Edit Tugas
Memungkinkan pengguna mengubah judul tugas. Validasi diterapkan agar judul tidak boleh kosong, sementara ID dan status tugas tetap dipertahankan ketika judul diubah.

## 6. Persyaratan Sistem

Sebelum menjalankan proyek, pastikan perangkat telah memiliki:
- Node.js
- npm
- Visual Studio Code atau editor kode lainnya
- Browser web

## 7. Cara Menjalankan Proyek

### 7.1 Membuka Proyek
Buka folder `praktikum-react` menggunakan Visual Studio Code.

### 7.2 Memasang Dependensi
Buka terminal pada folder utama proyek, lalu jalankan:

```bash
npm install
```

Perintah tersebut digunakan untuk memasang dependensi yang tercantum pada `package.json`.

### 7.3 Menjalankan Aplikasi
Setelah proses instalasi selesai, jalankan:

```bash
npm run dev
```

### 7.4 Membuka Aplikasi
Buka alamat lokal yang ditampilkan di terminal, biasanya:

`http://localhost:5173/`

Alamat yang sebenarnya mengikuti hasil yang muncul pada terminal.

## 8. Cara Menggunakan Aplikasi

1. Buka aplikasi melalui browser.
2. Periksa informasi pada bagian profil mahasiswa.
3. Lihat daftar mata kuliah yang tersedia.
4. Gunakan tombol tambah dan kurang pada penghitung kehadiran. Tombol reset digunakan untuk mengembalikan nilai menjadi 0.
5. Tambahkan tugas pada bagian daftar tugas.
6. Gunakan filter Semua, Aktif, atau Selesai untuk melihat tugas berdasarkan statusnya.
7. Tandai tugas sebagai selesai atau aktif sesuai kebutuhan.
8. Gunakan fitur edit untuk mengubah judul tugas.
9. Muat ulang halaman untuk memeriksa apakah daftar tugas tetap tersimpan.

## 9. Pengujian

Pengujian dilakukan untuk memeriksa fungsi utama aplikasi, meliputi:
- Tampilan profil mahasiswa.
- Tampilan daftar mata kuliah.
- Batas minimum dan maksimum penghitung kehadiran.
- Fungsi tambah, kurang, dan reset.
- Filter daftar tugas.
- Penyimpanan data setelah halaman dimuat ulang.
- Pengeditan tugas dan validasi judul kosong.

Hasil pengujian dicatat dalam laporan praktikum berdasarkan hasil yang benar-benar diperoleh saat aplikasi dijalankan.

## 10. Catatan Pengembangan

Folder `node_modules` tidak perlu disertakan dalam pengumpulan karena dependensi dapat dipasang kembali dengan perintah `npm install`. File `package.json` dan `package-lock.json` perlu disertakan agar dependensi proyek dapat dikelola dan dipasang kembali.

## 11. Penutup

Proyek ini menjadi latihan dasar untuk memahami penggunaan React dalam membangun aplikasi web interaktif. Melalui proyek ini, konsep komponen, props, state, event handling, key, dan localStorage diterapkan dalam beberapa fitur sederhana.