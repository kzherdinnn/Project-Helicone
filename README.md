# Project Helicone: Gerbang Percapakan AI 🚀

<p align="center">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
  <img style="margin-right: 8px;" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
</p>

## Daftar Isi
* [Gambaran Umum](#gambaran-umum)
* [Mengapa Project-Helicone?](#mengapa-project-helicone)
* [Teknologi yang Digunakan](#teknologi-yang-digunakan-️)
* [Cara Memulai](#cara-memulai-)
* [Cara Berkontribusi](#cara-berkontribusi-)
* [Lisensi](#lisensi-)

---

## Gambaran Umum
Project-Helicone adalah sebuah alat yang dirancang untuk developer guna menyederhanakan integrasi AI percakapan ke dalam aplikasi. Proyek ini memfasilitasi interaksi pengguna dengan model bahasa (LLM) dengan cara menangkap *prompt* dan mengambil respons melalui **Groq**, sementara **Helicone** bertindak sebagai platform untuk observabilitas dan analisis. Hal ini memastikan akses API yang teroptimalkan dan termonitor dalam arsitektur yang kohesif.

---

## Mengapa Project-Helicone?
Proyek ini bertujuan untuk mempercepat pengembangan antarmuka percakapan yang didukung AI. Fitur-fitur utamanya meliputi:

* **🧩🔑 Manajemen Lingkungan**: Mengelola API key secara aman melalui file `.env` untuk pengaturan yang mulus dan aman.
* **🚀⚡ Optimisasi & Observabilitas API**: Memanfaatkan **Groq** untuk panggilan API yang lebih cepat dan efisien ke model bahasa, serta **Helicone** untuk memantau, melakukan *debug*, dan menganalisis penggunaan API.
* **💬📝 Titik Masuk Percakapan Interaktif**: Skrip ini berfungsi sebagai terminal interaktif untuk mengeksekusi dan mengelola kueri percakapan secara *real-time*.
* **🔧🛠 Orkestrasi Dependensi**: Menangani semua dependensi dan konfigurasi yang diperlukan untuk memastikan aplikasi berjalan lancar.
* **🌐🌟 Siap Diintegrasikan**: Dapat dengan mudah disematkan ke dalam aplikasi yang lebih besar untuk meningkatkan fungsionalitas berbasis AI.

---

## Teknologi yang Digunakan 🛠️
* **Bahasa Utama**: JavaScript
* **Lingkungan Runtime**: Node.js
* **Penyedia LLM**: Groq
* **Platform Observabilitas**: Helicone
* **Manajer Paket**: npm
* **Kontrol Versi**: Git

---

## Cara Memulai 🏁
Ikuti langkah-langkah berikut untuk menyiapkan dan menjalankan proyek ini di lingkungan lokal Anda.

### Prasyarat
Pastikan Anda telah menginstal perangkat lunak berikut:
* [Node.js](https://nodejs.org/en/) (sudah termasuk npm)
* [Git](https://git-scm.com/)

### Instalasi
1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/kzherdinnn/Project-Helicone.git](https://github.com/kzherdinnn/Project-Helicone.git)
    ```

2.  **Masuk ke direktori proyek:**
    ```bash
    cd Project-Helicone
    ```

3.  **Instal semua dependensi:**
    ```bash
    npm install
    ```
4.  **Siapkan variabel lingkungan:**
    Buat file `.env` di direktori utama proyek dan tambahkan API key Anda:
    ```env
    GROQ_API_KEY="gsk_ApiKeyGroqAnda"
    HELICONE_API_KEY="sk-helicone-ApiKeyHeliconeAnda"
    ```

### Penggunaan
Jalankan skrip interaktif dari terminal Anda:
```bash
node demo.js
