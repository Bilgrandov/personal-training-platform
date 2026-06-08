// Database Modul Pembelajaran (Kurikulum Standar Industri)
const daftarModul = [
    {
        id: 1,
        judul: "🎨 Modul 1: Fondasi Styling (Warna & Ukuran)",
        teori: "Standar industri tidak menggunakan ukuran absolut seperti 'px' untuk teks karena buruk bagi aksesibilitas. Kita menggunakan 'rem' (Relative to Root). Untuk warna, kita menghindari nama bawaan ('red', 'blue') dan wajib menggunakan HEX Code (#) atau HSL agar presisi.",
        tantangan: "Tantangan: Gunakan kode HEX #ff9f1c untuk mewarnai judul <h1>, dan ubah ukuran paragraf <p> menjadi 1.5rem.",
        kodeHTML: "<h1>Judul Website</h1>\n<p>Ini adalah paragraf dengan ukuran dinamis.</p>",
        kodeCSS: "body {\n  background-color: #1e1e1e;\n  color: white;\n}\n\n/* Ketik CSS-mu di bawah ini */\n\n",
        kodeJS: "// Kosong untuk saat ini"
    },
    {
        id: 2,
        judul: "🧱 Modul 2: Flexbox (Layout 1 Dimensi)",
        teori: "Flexbox diciptakan khusus untuk merapikan elemen ke samping (baris) atau ke bawah (kolom). Ini adalah standar mutlak untuk merakit komponen modern seperti Navbar, Sidebar, atau sekumpulan tombol.",
        tantangan: "Tantangan: Buat class .navbar sejajar ke samping (display: flex), dorong item menyebar ke tepi (justify-content: space-between), dan rata tengah secara vertikal (align-items: center).",
        kodeHTML: "<div class='navbar'>\n  <div class='logo'>LogoKu</div>\n  <div class='links'>\n    <a href='#'>Home</a>\n    <a href='#'>About</a>\n  </div>\n</div>",
        kodeCSS: ".navbar {\n  background: #333;\n  padding: 15px;\n  color: white;\n  /* Ketik properti Flexbox di sini: */\n  \n}\n\n.links a {\n  color: #ff9f1c;\n  margin-left: 10px;\n}",
        kodeJS: "// Kosong untuk saat ini"
    },
    {
        id: 3,
        judul: "🍱 Modul 3: CSS Grid (Layout 2 Dimensi)",
        teori: "Jika Flexbox membariskan 1 dimensi (kiri-kanan), maka Grid mengurus 2 dimensi sekaligus (Denah Atas-Bawah-Kiri-Kanan). Digunakan untuk membentuk fondasi tata letak halaman utama seperti Dashboard atau Bento Grid.",
        tantangan: "Tantangan: Nyalakan Grid (display: grid), lalu atur agar kolomnya terbagi 3 secara rata dengan (grid-template-columns: repeat(3, 1fr)).",
        kodeHTML: "<div class='grid-container'>\n  <div class='card'>Kartu 1</div>\n  <div class='card'>Kartu 2</div>\n  <div class='card'>Kartu 3</div>\n  <div class='card'>Kartu 4</div>\n</div>",
        kodeCSS: ".grid-container {\n  /* Ketik properti Grid di sini: */\n  \n  gap: 15px;\n}\n\n.card {\n  background: #444;\n  padding: 20px;\n  border-radius: 8px;\n  color: white;\n}",
        kodeJS: "// Kosong untuk saat ini"
    },
    {
        id: 4,
        judul: "📝 Modul 4: Struktur HTML Form (GET vs POST)",
        teori: "Secara tradisional, form punya 2 metode: \n1. GET: Data menempel di URL secara terbuka (Cocok untuk fitur Search). \n2. POST: Data dibungkus rahasia di dalam bodi (Wajib untuk Login/Password). \nDi web modern (React/Vue), kita mencegah pengiriman bawaan HTML ini dan murni menyedot datanya pakai JavaScript.",
        tantangan: "Tantangan: Ganti atribut 'type' pada input Sandi menjadi 'password'. Tambahkan atribut 'required' pada kedua input agar tidak bisa dikirim kalau kosong.",
        kodeHTML: "<form id='login-form'>\n  <label>Email:</label><br>\n  <input type='email' id='email' placeholder='admin@contoh.com'>\n  <br><br>\n  <label>Sandi (Terbuka):</label><br>\n  <!-- Ubah type input di bawah ini -->\n  <input type='text' id='password' placeholder='Rahasia'>\n  <br><br>\n  <button type='submit'>Kirim Default (Refresh)</button>\n</form>",
        kodeCSS: "body { font-family: sans-serif; color: white; background: #222; padding: 20px; }",
        kodeJS: "// Saat tombol diklik, form akan secara default me-refresh layar (perilaku tradisional)."
    },
    {
        id: 5,
        judul: "🚀 Modul 5: Modern Form API Handling",
        teori: "Di perusahaan modern, kita tidak membiarkan form HTML me-refresh halaman. Kita menahannya pakai 'e.preventDefault()', lalu membungkus isian ketikan user ke dalam format JSON, dan menembakkannya ke server API lewat lorong HTTP POST menggunakan fitur 'Fetch API'.",
        tantangan: "Tantangan: Jalankan kode JS ini dan klik Kirim. Lihat teks status yang berubah karena kita berhasil menembak API beneran!",
        kodeHTML: "<form id='api-form'>\n  <input type='text' id='judul' placeholder='Masukkan Judul Artikel Baru' required>\n  <button type='submit'>Tembak API (POST)</button>\n</form>\n<h3 id='status' style='color: #4af626;'></h3>",
        kodeCSS: "body { font-family: sans-serif; padding: 20px; background: #111; color: white; }\ninput, button { padding: 8px; }",
        kodeJS: "const form = document.getElementById('api-form');\nconst statusTeks = document.getElementById('status');\n\nform.addEventListener('submit', async (e) => {\n  // 1. Mencegah web melakukan reload layar\n  e.preventDefault();\n  statusTeks.textContent = 'Mencoba mengirim data ke server...';\n  \n  // 2. Mengambil isi teks\n  const inputJudul = document.getElementById('judul').value;\n  \n  // 3. STANDAR INDUSTRI: Mengirim data rahasia lewat metode POST via JSON\n  try {\n      const respon = await fetch('https://jsonplaceholder.typicode.com/posts', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify({ title: inputJudul, userId: 1 })\n      });\n      \n      if(respon.ok) {\n        statusTeks.textContent = 'Sukses! Server merespons: 201 Created';\n      }\n  } catch (error) {\n      statusTeks.textContent = 'Gagal mengirim data.';\n  }\n});"
    }
];
