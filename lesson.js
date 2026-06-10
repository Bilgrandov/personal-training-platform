// Database Multikursus (Kumpulan Proyek)
const databaseMateri = {
    // Proyek 1: Fondasi Web Modern
    dasar: [
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
    ],

    // Proyek 2: Game RPG (OOP)
    oop: [
        {
            id: 1,
            judul: "🗡️ Modul 1: Konsep Class & Object",
            teori: "OOP (Object Oriented Programming) membungkus data dan fungsi ke dalam sebuah cetakan (Class). Mari kita buat Class 'Karakter' untuk game RPG kita.",
            tantangan: "Tantangan: Buat instance baru dari Class Karakter bernama 'Hero', lalu cetak statusnya ke layar.",
            kodeHTML: "<div id='game-screen'>\n  <h2>Log Pertarungan:</h2>\n  <ul id='log'></ul>\n</div>",
            kodeCSS: "body { background: black; color: #00ff00; font-family: monospace; padding: 20px; }",
            kodeJS: "class Karakter {\n  constructor(nama, hp, atk) {\n    this.nama = nama;\n    this.hp = hp;\n    this.atk = atk;\n  }\n  \n  serang(target) {\n    return `${this.nama} menyerang ${target} dengan damage ${this.atk}!`;\n  }\n}\n\n// Ketik kodemu di sini:\n// const hero = new Karakter('Arthur', 100, 15);\n"
        }
    ],

    // Proyek 3: Aplikasi Kalkulator (DOM)
    dom: [
        {
            id: 1,
            judul: "📱 Modul 1: Layout Kalkulator (Grid)",
            teori: "Sebelum membuat logika JS, kita harus merakit layout tombol kalkulator menggunakan CSS Grid agar susunan angkanya presisi seperti mesin kasir.",
            tantangan: "Tantangan: Atur .keypad menjadi grid (display: grid) dengan 4 kolom rata (grid-template-columns: repeat(4, 1fr)).",
            kodeHTML: "<div class='calculator'>\n  <div class='screen'>0</div>\n  <div class='keypad'>\n    <button>7</button><button>8</button><button>9</button><button>/</button>\n    <button>4</button><button>5</button><button>6</button><button>*</button>\n    <button>1</button><button>2</button><button>3</button><button>-</button>\n    <button>C</button><button>0</button><button>=</button><button>+</button>\n  </div>\n</div>",
            kodeCSS: ".calculator { width: 300px; background: #333; padding: 20px; border-radius: 10px; margin: 20px auto; }\n.screen { background: #fff; text-align: right; font-size: 2rem; padding: 10px; margin-bottom: 10px; border-radius: 5px; }\n\n.keypad {\n  /* Ketik properti Grid di sini */\n  \n  gap: 10px;\n}\n\nbutton { padding: 15px; font-size: 1.2rem; cursor: pointer; border-radius: 5px; border: none; }",
            kodeJS: "// Kosong"
        }
    ],

    // Proyek 4: Rahasia Dapur Live Code Editor
    platform: [
        {
            id: 1,
            judul: "🛠️ Modul 1: Menyedot Ketikan Secara Live",
            teori: "Rahasia utama dari editor buatanmu ini adalah mengambil teks saat pengguna mengetik, secara real-time. Kita tidak menggunakan tombol 'Run' atau 'Submit', melainkan mendeteksi event 'input' yang dipadukan dengan properti '.value'.",
            tantangan: "Tantangan: Tangkap ketikan di kotak input di bawah dan munculkan ke layar secara live (real-time).",
            kodeHTML: "<input type='text' id='kotak-ketik' placeholder='Ketik sesuatu...'>\n<br><br>\n<h2 id='layar'>...</h2>",
            kodeCSS: "body { font-family: sans-serif; padding: 20px; background: #222; color: white; }\ninput { padding: 10px; font-size: 1.2rem; border-radius: 5px; }",
            kodeJS: "const kotak = document.getElementById('kotak-ketik');\nconst layar = document.getElementById('layar');\n\n// Ganti tulisan 'click' dengan 'input' untuk memicu sifat Real-Time\nkotak.addEventListener('input', () => {\n  layar.textContent = kotak.value;\n});"
        },
        {
            id: 2,
            judul: "🛠️ Modul 2: Template Literals & Iframe",
            teori: "Bagaimana cara kita menggabungkan HTML, CSS, dan JS menjadi satu kesatuan dokumen web utuh? Jawabannya adalah menggunakan fitur Backtick (`) JavaScript, lalu menyuntikkannya ke dalam 'perut' elemen Iframe menggunakan atribut sakti: 'srcdoc'.",
            tantangan: "Tantangan: Gabungkan variabel warna dan teks ke dalam rakitan web, lalu suntikkan ke iframe.",
            kodeHTML: "<iframe id='layar-iframe' style='width: 100%; height: 200px; background: white; border: none; border-radius: 8px;'></iframe>",
            kodeCSS: "body { background: #111; padding: 20px; }",
            kodeJS: "const iframe = document.getElementById('layar-iframe');\nconst warnaBody = 'lightblue';\nconst teksH1 = 'Halo, saya hidup di dalam Iframe!';\n\n// Merakit dokumen utuh\nconst rakitanWeb = `\n  <body style='background: ${warnaBody};'>\n    <h1>${teksH1}</h1>\n  </body>\n`;\n\n// Tantangan: Suntikkan hasil rakitan ke dalam perut iframe\niframe.srcdoc = rakitanWeb;"
        },
        {
            id: 3,
            judul: "🛠️ Modul 3: Logika Resizer (Drag & Drop)",
            teori: "Fitur batas pemisah yang bisa digeser (Resizer) diatur oleh 3 event JS:\n1. 'mousedown' (Klik ditahan) -> Mengaktifkan status sedang ditarik.\n2. 'mousemove' (Mouse bergerak) -> Membaca kordinat layar horisontal (e.clientX) untuk mengubah lebar panel.\n3. 'mouseup' (Klik dilepas) -> Mematikan status sedang ditarik.",
            tantangan: "Tantangan: Lengkapi logika mousemove agar kotak oranye bertambah lebar mengikuti gerakan pointer mouse-mu.",
            kodeHTML: "<div id='kotak' style='width: 100px; height: 100px; background: orange; margin-bottom: 20px;'></div>\n<button id='tarik'>1. Klik Tahan Saya</button>\n<p>2. Lalu geser-geser mousemu di sembarang arah!</p>",
            kodeCSS: "body { padding: 20px; background: #222; color: white; font-family: sans-serif; }\nbutton { padding: 10px; cursor: ew-resize; background: #ff9f1c; border: none; }",
            kodeJS: "const kotak = document.getElementById('kotak');\nconst tarik = document.getElementById('tarik');\nlet isResizing = false;\n\ntarik.addEventListener('mousedown', () => isResizing = true);\ndocument.addEventListener('mouseup', () => isResizing = false);\n\ndocument.addEventListener('mousemove', (e) => {\n  if(!isResizing) return; // Jika tidak ditahan, batalkan\n  \n  // Tantangan: Gunakan e.clientX untuk mengubah lebar kotak\n  kotak.style.width = `${e.clientX}px`;\n});"
        },
        {
            id: 4,
            judul: "🛠️ Modul 4: Multi-Database Array",
            teori: "Bagaimana cara kita menyimpan kurikulum yang berbeda-beda? Kita menggunakan Object JavaScript sebagai 'Lemari Besar', dan Array sebagai 'Laci Materi'. Kita juga menggunakan variabel 'currentLessonIndex' untuk melacak bab mana yang sedang dibuka oleh user.",
            tantangan: "Tantangan: Akses laci 'oop' bab 1 (yaitu indeks ke-0) dan munculkan judulnya ke layar hijau.",
            kodeHTML: "<h2 id='judul'>...</h2>",
            kodeCSS: "body { background: #222; color: #4af626; font-family: monospace; padding: 20px; font-size: 1.5rem; }",
            kodeJS: "const databaseMateri = {\n  dasar: [{judul: 'Modul 1: HTML'}, {judul: 'Modul 2: CSS'}],\n  oop: [{judul: 'Materi 1: Class & Object'}]\n};\n\nconst indexSaatIni = 0;\nconst laciPilihan = 'oop';\n\n// Tantangan: Sedot database berdasarkan variabel laci & indeks\nconst materi = databaseMateri[laciPilihan][indexSaatIni];\n\ndocument.getElementById('judul').textContent = materi.judul;"
        },
        {
            id: 5,
            judul: "🛠️ Modul 5: Rahasia URL Routing",
            teori: "Agar 1 file HTML (editor.html) bisa memuat materi yang berbeda-beda, kita menyematkan pesan rahasia di URL (seperti '?project=oop'). Kita membongkar pesan tersebut menggunakan fitur mutakhir bawaan browser: 'URLSearchParams'.",
            tantangan: "Tantangan: Simulasikan pembedahan URL di bawah ini, lalu tangkap kata kuncinya.",
            kodeHTML: "<div class='kotak'>\n  <p>URL Tersimulasi: <br> <span style='color: orange;'>www.web.com?project=master-dom</span></p>\n  <h2 id='hasil-rute'>Mencari proyek...</h2>\n</div>",
            kodeCSS: "body { background: #111; color: white; font-family: sans-serif; padding: 20px; }\n.kotak { border: 1px solid #555; padding: 20px; border-radius: 8px; }",
            kodeJS: "// Kita pura-pura menangkap URL dari browser\nconst simulasiURL = '?project=master-dom';\n\n// 1. Ekstrak kuncinya menggunakan API browser\nconst urlParams = new URLSearchParams(simulasiURL);\n\n// 2. Ambil nilai dari parameter 'project'\nconst namaProyek = urlParams.get('project');\n\ndocument.getElementById('hasil-rute').textContent = 'Memuat Modul Proyek: ' + namaProyek;"
        }
    ]
};
