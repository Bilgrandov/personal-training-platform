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
        },
        {
            id: 2,
            judul: "🗡️ Modul 2: Pewarisan (Inheritance)",
            teori: "Pewarisan (Inheritance) memungkinkan sebuah Class mewarisi semua properti dan metode dari Class induk. Kita menggunakan kata kunci extends untuk mewarisi dan super untuk menjalankan constructor induk.",
            tantangan: "Tantangan: Buat class Hero yang mewarisi class Karakter dengan kata kunci extends. Tambahkan parameter properti baru 'peran' di constructor-nya dan panggil super().",
            kodeHTML: "<div id='game-screen'>\n  <h2>Log Pertarungan:</h2>\n  <ul id='log'></ul>\n</div>",
            kodeCSS: "body { background: black; color: #00ff00; font-family: monospace; padding: 20px; }",
            kodeJS: "class Karakter {\n  constructor(nama, hp, atk) {\n    this.nama = nama;\n    this.hp = hp;\n    this.atk = atk;\n  }\n  \n  serang(target) {\n    return `${this.nama} menyerang ${target} dengan damage ${this.atk}!`;\n  }\n}\n\n// Tantangan: Buat class Hero di bawah ini yang mewarisi Karakter\n"
        },
        {
            id: 3,
            judul: "🗡️ Modul 3: Enkapsulasi (Encapsulation)",
            teori: "Enkapsulasi bertujuan untuk menyembunyikan detail data dan membatasi akses langsung. Kita bisa menggunakan getter dan setter untuk memastikan data yang diubah tetap valid (misalnya, nilai HP tidak boleh kurang dari 0).",
            tantangan: "Tantangan: Buat getter dan setter untuk properti hp agar nilainya tidak bisa diset kurang dari 0 (jika ada input < 0, atur nilainya menjadi 0).",
            kodeHTML: "<div id='game-screen'>\n  <h2>Log Pertarungan:</h2>\n  <ul id='log'></ul>\n</div>",
            kodeCSS: "body { background: black; color: #00ff00; font-family: monospace; padding: 20px; }",
            kodeJS: "class Karakter {\n  constructor(nama, hp, atk) {\n    this.nama = nama;\n    this._hp = hp; // Menggunakan konvensi _hp untuk properti privat\n    this.atk = atk;\n  }\n  \n  // Tantangan: Tambahkan getter hp dan setter hp di bawah ini:\n  \n}"
        },
        {
            id: 4,
            judul: "🗡️ Modul 4: Polimorfisme (Polymorphism)",
            teori: "Polimorfisme adalah kemampuan objek yang berbeda untuk merespons metode dengan nama yang sama secara unik. Kita dapat menimpa (override) metode serang milik induk di class anak.",
            tantangan: "Tantangan: Buat class Monster yang mewarisi Karakter, lalu timpa metode serang(target) agar mengembalikan log: 'Monster [nama] mencakar [target]!'",
            kodeHTML: "<div id='game-screen'>\n  <h2>Log Pertarungan:</h2>\n  <ul id='log'></ul>\n</div>",
            kodeCSS: "body { background: black; color: #00ff00; font-family: monospace; padding: 20px; }",
            kodeJS: "class Karakter {\n  constructor(nama, hp, atk) {\n    this.nama = nama;\n    this.hp = hp;\n    this.atk = atk;\n  }\n  \n  serang(target) {\n    return `${this.nama} menyerang ${target}!`;\n  }\n}\n\n// Tantangan: Buat class Monster dan timpa metode serang() di bawah ini\n"
        },
        {
            id: 5,
            judul: "🗡️ Modul 5: Logika Pertarungan Bergilir (Battle Loop)",
            teori: "Sekarang, mari satukan semuanya ke dalam logika pertarungan otomatis. Kita akan membuat loop sederhana di mana Hero dan Monster saling menyerang secara bergantian menggunakan perulangan while selama HP keduanya masih di atas 0.",
            tantangan: "Tantangan: Lengkapi fungsi bertarung(hero, monster) menggunakan loop while. Di setiap putaran, hero menyerang monster, dan jika monster masih hidup (hp > 0), monster menyerang balik hero. Gunakan fungsi cetakLog untuk menampilkan log pertarungan.",
            kodeHTML: "<div id='game-screen'>\n  <h2>Simulasi Pertarungan RPG:</h2>\n  <ul id='log'></ul>\n</div>",
            kodeCSS: "body { background: black; color: #00ff00; font-family: monospace; padding: 20px; }",
            kodeJS: "class Karakter {\n  constructor(nama, hp, atk) {\n    this.nama = nama;\n    this.hp = hp;\n    this.atk = atk;\n  }\n  \n  serang(target) {\n    target.hp -= this.atk;\n    return `${this.nama} menyerang ${target.nama} (Sisa HP ${target.nama}: ${target.hp < 0 ? 0 : target.hp})`;\n  }\n}\n\nconst log = document.getElementById('log');\nfunction cetakLog(teks) {\n  const li = document.createElement('li');\n  li.textContent = teks;\n  log.appendChild(li);\n}\n\n// Tantangan: Buat fungsi pertarungan di bawah ini\nfunction bertarung(hero, monster) {\n  \n}"
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
        },
        {
            id: 2,
            judul: "📱 Modul 2: DOM Selection & Event Listener",
            teori: "Agar tombol kalkulator bisa bereaksi ketika diklik, kita harus menangkap semua tombol menggunakan querySelectorAll dan memasang addEventListener pada masing-masing tombol menggunakan perulangan forEach.",
            tantangan: "Tantangan: Lengkapi baris di dalam forEach untuk mencetak teks isi tombol yang sedang diklik ke dalam konsol menggunakan console.log.",
            kodeHTML: "<div class='calculator'>\n  <div class='screen'>0</div>\n  <div class='keypad'>\n    <button>7</button><button>8</button><button>9</button><button>/</button>\n    <button>4</button><button>5</button><button>6</button><button>*</button>\n    <button>1</button><button>2</button><button>3</button><button>-</button>\n    <button>C</button><button>0</button><button>=</button><button>+</button>\n  </div>\n</div>",
            kodeCSS: ".calculator { width: 300px; background: #333; padding: 20px; border-radius: 10px; margin: 20px auto; }\n.screen { background: #fff; text-align: right; font-size: 2rem; padding: 10px; margin-bottom: 10px; border-radius: 5px; color: black; }\n.keypad { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }\nbutton { padding: 15px; font-size: 1.2rem; cursor: pointer; border-radius: 5px; border: none; }",
            kodeJS: "const tombol = document.querySelectorAll('.keypad button');\n\ntombol.forEach(btn => {\n  btn.addEventListener('click', () => {\n    // Tantangan: Tulis console.log teks tombol di bawah ini:\n    \n  });\n});"
        },
        {
            id: 3,
            judul: "📱 Modul 3: Input Angka & Update Layar",
            teori: "Sekarang, mari kita tampilkan angka yang kita klik ke layar kalkulator. Kita perlu menangkap elemen screen, memeriksa apakah layarnya masih bernilai '0', lalu menimpa atau menyambungkannya dengan angka baru.",
            tantangan: "Tantangan: Tangkap elemen screen dengan id 'display'. Jika isi layar saat ini adalah '0', ganti isinya dengan teks tombol yang diklik. Jika bukan '0', sambungkan teks tombol tersebut ke layar.",
            kodeHTML: "<div class='calculator'>\n  <div class='screen' id='display'>0</div>\n  <div class='keypad'>\n    <button>7</button><button>8</button><button>9</button><button>/</button>\n    <button>4</button><button>5</button><button>6</button><button>*</button>\n    <button>1</button><button>2</button><button>3</button><button>-</button>\n    <button>C</button><button>0</button><button>=</button><button>+</button>\n  </div>\n</div>",
            kodeCSS: ".calculator { width: 300px; background: #333; padding: 20px; border-radius: 10px; margin: 20px auto; }\n.screen { background: #fff; text-align: right; font-size: 2rem; padding: 10px; margin-bottom: 10px; border-radius: 5px; color: black; }\n.keypad { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }\nbutton { padding: 15px; font-size: 1.2rem; cursor: pointer; border-radius: 5px; border: none; }",
            kodeJS: "const layar = document.getElementById('display');\nconst tombol = document.querySelectorAll('.keypad button');\n\ntombol.forEach(btn => {\n  btn.addEventListener('click', () => {\n    const nilai = btn.textContent;\n    \n    // Tantangan: Tulis logika untuk memperbarui teks layar di sini:\n    \n  });\n});"
        },
        {
            id: 4,
            judul: "📱 Modul 4: Operasi Matematika & Reset (C)",
            teori: "Kalkulator membutuhkan tombol reset 'C' untuk mengosongkan layar kembali ke '0'. Selain itu, jika tombol yang ditekan adalah operator matematika (+, -, *, /) atau angka, kita harus menambahkannya ke layar.",
            tantangan: "Tantangan: Lengkapi kondisi percabangan di bawah ini. Jika tombol yang diklik adalah 'C', ubah teks layar kembali menjadi '0'.",
            kodeHTML: "<div class='calculator'>\n  <div class='screen' id='display'>0</div>\n  <div class='keypad'>\n    <button>7</button><button>8</button><button>9</button><button>/</button>\n    <button>4</button><button>5</button><button>6</button><button>*</button>\n    <button>1</button><button>2</button><button>3</button><button>-</button>\n    <button>C</button><button>0</button><button>=</button><button>+</button>\n  </div>\n</div>",
            kodeCSS: ".calculator { width: 300px; background: #333; padding: 20px; border-radius: 10px; margin: 20px auto; }\n.screen { background: #fff; text-align: right; font-size: 2rem; padding: 10px; margin-bottom: 10px; border-radius: 5px; color: black; }\n.keypad { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }\nbutton { padding: 15px; font-size: 1.2rem; cursor: pointer; border-radius: 5px; border: none; }",
            kodeJS: "const layar = document.getElementById('display');\nconst tombol = document.querySelectorAll('.keypad button');\n\ntombol.forEach(btn => {\n  btn.addEventListener('click', () => {\n    const nilai = btn.textContent;\n    \n    // Tantangan: Buat kondisi khusus jika nilai === 'C'\n    if (nilai === 'C') {\n      // Tulis kode reset layar di sini\n    } else {\n      if (layar.textContent === '0') {\n        layar.textContent = nilai;\n      } else {\n        layar.textContent += nilai;\n      }\n    }\n  });\n});"
        },
        {
            id: 5,
            judul: "📱 Modul 5: Kalkulasi Hasil Akhir (=)",
            teori: "Modul terakhir! Kita akan mengevaluasi ekspresi matematika di layar menggunakan fungsi bawaan JavaScript eval(). Untuk menghindari crash karena ekspresi yang tidak valid, kita wajib membungkusnya dengan blok try...catch.",
            tantangan: "Tantangan: Tambahkan kondisi else-if jika tombol yang diklik adalah '='. Evaluasikan ekspresi di dalam layar dan tampilkan hasilnya, atau tampilkan 'Error' jika terjadi kesalahan input.",
            kodeHTML: "<div class='calculator'>\n  <div class='screen' id='display'>0</div>\n  <div class='keypad'>\n    <button>7</button><button>8</button><button>9</button><button>/</button>\n    <button>4</button><button>5</button><button>6</button><button>*</button>\n    <button>1</button><button>2</button><button>3</button><button>-</button>\n    <button>C</button><button>0</button><button>=</button><button>+</button>\n  </div>\n</div>",
            kodeCSS: ".calculator { width: 300px; background: #333; padding: 20px; border-radius: 10px; margin: 20px auto; }\n.screen { background: #fff; text-align: right; font-size: 2rem; padding: 10px; margin-bottom: 10px; border-radius: 5px; color: black; }\n.keypad { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }\nbutton { padding: 15px; font-size: 1.2rem; cursor: pointer; border-radius: 5px; border: none; }",
            kodeJS: "const layar = document.getElementById('display');\nconst tombol = document.querySelectorAll('.keypad button');\n\ntombol.forEach(btn => {\n  btn.addEventListener('click', () => {\n    const nilai = btn.textContent;\n    \n    if (nilai === 'C') {\n      layar.textContent = '0';\n    } else if (nilai === '=') {\n      // Tantangan: Hitung hasil ekspresi menggunakan eval() di dalam try...catch\n      \n    } else {\n      if (layar.textContent === '0') {\n        layar.textContent = nilai;\n      } else {\n        layar.textContent += nilai;\n      }\n    }\n  });\n});"
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
    ],

    // Proyek 5: Cozy Frontend Design
    design: [
        {
            id: 1,
            judul: "🎨 Modul 1: CSS Variables & Dynamic Themes",
            teori: "Desain modern tidak mendefinisikan warna kaku di setiap tag. Kita menggunakan CSS Custom Properties (Variables) di :root yang bisa kita timpa secara massal di dalam class .night-mode pada tag body. Ini mempermudah transisi tema Day/Night secara instan.",
            tantangan: "Tantangan: Definisikan CSS variable '--primary-color: #E05A47;' di dalam :root, lalu gunakan variabel tersebut sebagai nilai properti color untuk mewarnai teks judul h1.",
            kodeHTML: "<h1>Cozy Camping Logbook ⛺</h1>",
            kodeCSS: "/* Ketik CSS di bawah ini */\n:root {\n  \n}\n\nh1 {\n  \n}",
            kodeJS: "// Tidak membutuhkan Javascript untuk saat ini"
        },
        {
            id: 2,
            judul: "📝 Modul 2: Grid Notebook Paper (Gradasi CSS)",
            teori: "Kita dapat merakit garis kotak-kotak buku tulis/notebook murni menggunakan kemampuan linear-gradient() di CSS tanpa menggunakan gambar. CSS akan membuat satu sel garis kecil berukuran 30px dan merendernya secara berulang menggunakan background-size.",
            tantangan: "Tantangan: Lengkapi background-image di body dengan menambahkan to right gradient agar garisnya menyilang membentuk kotak: 'linear-gradient(to right, #E6D8BE 1px, transparent 1px)' dan atur ukurannya (background-size) menjadi 30px 30px.",
            kodeHTML: "<h3>Jurnal Petualangan Camp</h3>\n<p>Kotak garis kertas ini dibuat murni menggunakan matematika gradasi CSS.</p>",
            kodeCSS: "body {\n  background-color: #FAF5EB;\n  color: #2D3A3A;\n  min-height: 200px;\n  /* Tambahkan to right gradient di sebelah to bottom gradient dipisahkan koma */\n  background-image: linear-gradient(to bottom, #F0E6D2 1px, transparent 1px);\n  /* Set background-size di bawah: */\n  \n}",
            kodeJS: "// Kosong"
        },
        {
            id: 3,
            judul: "📷 Modul 3: Polaroid Frame & Dynamic Rotation",
            teori: "Efek foto Polaroid dibuat dengan memberikan border putih tebal dan padding bawah ekstra untuk tulisan tangan. Agar letaknya tersebar alami seperti foto fisik di atas meja, kita memutarnya secara acak menggunakan transform: rotate() yang membaca properti dinamis --rotation-angle.",
            tantangan: "Tantangan: Pasang transform: rotate() menggunakan variable --rotation-angle yang sudah disisipkan secara acak pada tag HTML .polaroid.",
            kodeHTML: "<div class=\"polaroid\" style=\"--rotation-angle: -3deg;\">\n  <img src=\"https://picsum.photos/200/140\" alt=\"Campsite\">\n  <p class=\"caption\">Gunung Fuji - Sore</p>\n</div>",
            kodeCSS: "body { background: #FAF5EB; padding: 20px; }\n.polaroid {\n  background: white;\n  padding: 12px 12px 24px 12px;\n  border: 1px solid #ddd;\n  width: 224px;\n  box-shadow: 6px 6px 12px rgba(0,0,0,0.1);\n  /* Panggil transform: rotate() menggunakan var(--rotation-angle) di bawah: */\n  \n}\n.polaroid img { width: 100%; display: block; border: 1px solid #eee; }\n.caption { text-align: center; margin-top: 10px; font-family: cursive; color: #333; }",
            kodeJS: "// Kosong"
        },
        {
            id: 4,
            judul: "🩹 Modul 4: Washi Tape (Pita Perekat Transparan)",
            teori: "Selotip kertas semitransparan (washi tape) dapat disimulasikan di CSS menggunakan background-color bertingkat RGBA (Red Green Blue Alpha) dikombinasikan dengan border putus-putus (dashed) di sisi kiri-kanan untuk meniru robekan kertas selotip.",
            tantangan: "Tantangan: Tempelkan selotip ke tengah atas kartu polaroid dengan menuliskan properti absolute positioning: position: absolute, top: -12px, left: 50%, dan transform: translateX(-50%).",
            kodeHTML: "<div class=\"card\" style=\"position: relative; margin-top: 30px;\">\n  <div class=\"tape\"></div>\n  <div class=\"polaroid\" style=\"background: white; padding: 15px; border: 1px solid #ccc; width: 180px;\">\n    <img src=\"https://picsum.photos/150/110\" style=\"display: block;\">\n  </div>\n</div>",
            kodeCSS: ".tape {\n  width: 80px;\n  height: 20px;\n  background-color: rgba(230, 161, 92, 0.4);\n  border-left: 2px dashed rgba(0,0,0,0.1);\n  border-right: 2px dashed rgba(0,0,0,0.1);\n  /* Ketik absolute position di bawah agar menimpa bagian tengah atas kartu */\n  \n}",
            kodeJS: "// Kosong"
        },
        {
            id: 5,
            judul: "🔥 Modul 5: CSS Campfire (Animasi Api Unggun)",
            teori: "Kita dapat menggambar bentuk api menggunakan penumpukan border-radius melengkung, lalu memicu gerakannya menggunakan aturan @keyframes di CSS untuk merubah ukuran tinggi api (scaleY) secara terus-menerus.",
            tantangan: "Tantangan: Jalankan animasi 'burn' di class .flame selama 1.2 detik secara berulang-ulang (infinite) dan bolak-balik (alternate).",
            kodeHTML: "<div class=\"campfire\">\n  <div class=\"flame\"></div>\n</div>",
            kodeCSS: ".campfire { position: relative; width: 100px; height: 100px; margin: 30px; }\n.flame {\n  width: 40px;\n  height: 60px;\n  background: linear-gradient(to top, #FF4D00, #FFD000);\n  border-radius: 50% 50% 20% 20% / 60% 60% 40% 40%;\n  transform-origin: bottom center;\n  /* Terapkan properti animation 'burn' di bawah ini: */\n  \n}\n\n@keyframes burn {\n  0% { transform: scaleY(0.9) rotate(-2deg); }\n  100% { transform: scaleY(1.15) rotate(2deg); }\n}",
            kodeJS: "// Kosong"
        }
    ],
    
    // Proyek 6: LeetCode & Algoritma (Feynman)
    leetcode: [
        {
            id: 1,
            judul: "🧠 Modul 1: Big O Notation (Efisiensi Kode)",
            teori: "Big O mengukur seberapa banyak langkah kerja kode kita saat data (N) bertambah banyak. <br><br>1. <b>O(1) - Constant</b>: Kecepatannya tetap (1 langkah), berapapun datanya. Contoh: mengambil warna sampul buku depan.<br>2. <b>O(N) - Linear</b>: Kecepatannya berbanding lurus dengan jumlah data. Contoh: mencari nama dengan membuka halaman buku telepon satu-per-satu dari awal sampai akhir.",
            tantangan: "Lengkapi fungsi O(1) 'cariSampul' agar langsung mengambil elemen pertama array, dan fungsi O(N) 'cariNama' agar mencari indeks nama target di dalam array.",
            kodeHTML: "<h2>🧠 Platform Feynman: Big O</h2>\n<p>Gunakan tab <b>script.js</b> di sebelah kanan untuk menulis kodemu, lalu perhatikan output pengujiannya di <b>Terminal Sandbox</b> di bawah.</p>",
            kodeCSS: "body {\n  font-family: sans-serif;\n  color: white;\n  background: #1e1e1e;\n  padding: 20px;\n}",
            kodeJS: "// TANTANGAN:\n// 1. Lengkapi fungsi O(1) 'cariSampul' agar langsung mengembalikan elemen pertama dari array.\n// 2. Lengkapi fungsi O(N) 'cariNama' agar mencari nama target menggunakan perulangan.\n\nfunction cariSampul(buku) {\n  // Tulis kodemu di bawah ini:\n  \n}\n\nfunction cariNama(buku, target) {\n  // Tulis kodemu di bawah ini (gunakan loop for):\n  \n}\n\n// --- TEST SUITE (JANGAN DIUBAH) ---\n(function() {\n  const data = [\"Sampul Biru\", \"Andi\", \"Budi\", \"Cici\"];\n  console.log(\"Menjalankan Pengujian...\");\n  try {\n      const s = cariSampul(data);\n      const n1 = cariNama(data, \"Budi\");\n      const n2 = cariNama(data, \"Zola\");\n      \n      if (s === \"Sampul Biru\" && n1 === 2 && n2 === -1) {\n          console.log(\"🎉 SELAMAT! Kode Anda berhasil lolos pengujian Big O.\");\n      } else {\n          console.log(\"⚠️ Hasil fungsi belum sesuai. Periksa kembali logika Anda.\");\n      }\n  } catch(e) {\n      console.log(\"❌ Terjadi Error: \" + e.message);\n  }\n})();"
        },
        {
            id: 2,
            judul: "🗂️ Modul 2: Array & String (Pondasi Linear)",
            teori: "Array adalah deretan data berurutan seperti gerbong kereta. Gerbong pertama selalu diberi indeks <b>0</b>. <br>Kesalahan pemula yang paling sering terjadi adalah mencoba mengakses indeks di luar kapasitas total gerbong (Index Out of Bounds / Off-by-one). Untuk gerbong sepanjang N, pintu terakhir selalu berada di indeks <b>N - 1</b>.",
            tantangan: "Lengkapi fungsi 'ambilGerbongTerakhir' agar mengembalikan isi dari elemen paling belakang kereta, tanpa melakukan hardcode indeks secara manual.",
            kodeHTML: "<h2>🧠 Platform Feynman: Array & String</h2>\n<p>Gunakan tab <b>script.js</b> di sebelah kanan untuk menulis kodemu, lalu perhatikan output pengujiannya di <b>Terminal Sandbox</b> di bawah.</p>",
            kodeCSS: "body {\n  font-family: sans-serif;\n  color: white;\n  background: #1e1e1e;\n  padding: 20px;\n}",
            kodeJS: "// TANTANGAN:\n// Lengkapi fungsi 'ambilGerbongTerakhir' agar mengembalikan\n// elemen paling belakang dari array 'kereta'.\n// Jangan hardcode indeksnya (gunakan properti .length).\n\nfunction ambilGerbongTerakhir(kereta) {\n  // Tulis kodemu di bawah ini:\n  \n}\n\n// --- TEST SUITE (JANGAN DIUBAH) ---\n(function() {\n  console.log(\"Menguji gerbong kereta...\");\n  try {\n      const k1 = [\"A\", \"B\", \"C\"];\n      const k2 = [\"Solo\", \"Jogja\", \"Bandung\", \"Jakarta\"];\n      \n      if (ambilGerbongTerakhir(k1) === \"C\" && ambilGerbongTerakhir(k2) === \"Jakarta\") {\n          console.log(\"🎉 SELAMAT! Anda berhasil mengambil gerbong terakhir dengan benar.\");\n      } else {\n          console.log(\"⚠️ Output salah atau terdeteksi hardcode indeks.\");\n      }\n  } catch(e) {\n      console.log(\"❌ Terjadi Error: \" + e.message);\n  }\n})();"
        },
        {
            id: 3,
            judul: "🔑 Modul 3: Hash Maps (Pencarian Instan O(1))",
            teori: "Mencari data satu per satu di array butuh O(N) langkah. <br>Dengan <b>Hash Map</b> (menggunakan tipe data Object di JavaScript), kita menyimpan data sebagai pasangan <b>Key (Kunci) dan Value (Nilai)</b>. Komputer bisa menembak langsung ke kunci tersebut secara instan tanpa perlu memutar seluruh data, sehingga waktu carinya hanya <b>O(1)</b>.",
            tantangan: "Lengkapi fungsi 'cariHarga' agar membaca harga barang dari objek 'hargaBarang' menggunakan kunci parameternya secara instan O(1). Jika tidak ada di daftar, kembalikan 0.",
            kodeHTML: "<h2>🧠 Platform Feynman: Hash Map</h2>\n<p>Gunakan tab <b>script.js</b> di sebelah kanan untuk menulis kodemu, lalu perhatikan output pengujiannya di <b>Terminal Sandbox</b> di bawah.</p>",
            kodeCSS: "body {\n  font-family: sans-serif;\n  color: white;\n  background: #1e1e1e;\n  padding: 20px;\n}",
            kodeJS: "// TANTANGAN:\n// Gunakan Object 'hargaBarang' (Hash Map) untuk mengambil harga barang\n// secara instan O(1) berdasarkan nama barang yang dikirim lewat parameter.\n// Jika barang tidak ditemukan di daftar, kembalikan 0.\n\nconst hargaBarang = {\n  \"Apel\": 5000,\n  \"Pisang\": 3000,\n  \"Jeruk\": 4000\n};\n\nfunction cariHarga(barang) {\n  // Tulis kodemu di bawah ini:\n  \n}\n\n// --- TEST SUITE (JANGAN DIUBAH) ---\n(function() {\n  console.log(\"Memulai pencarian harga...\");\n  try {\n      if (cariHarga(\"Apel\") === 5000 && cariHarga(\"Jeruk\") === 4000 && cariHarga(\"Melon\") === 0) {\n          console.log(\"🎉 SELAMAT! Pencarian cepat O(1) menggunakan Hash Map berhasil.\");\n      } else {\n          console.log(\"⚠️ Hasil tidak cocok. Pastikan mengakses object dengan benar.\");\n      }\n  } catch(e) {\n      console.log(\"❌ Terjadi Error: \" + e.message);\n  }\n})();"
        },
        {
            id: 4,
            judul: "🚶‍♂️ Modul 4: Two Pointers Technique (Dua Penunjuk)",
            teori: "Menyisir lorong panjang sendirian untuk membandingkan semua isi kamar akan memakan waktu O(N^2). <br>Dengan teknik <b>Two Pointers</b>, satu orang menyapu dari ujung kiri, dan satu orang menyapu dari ujung kanan secara bersamaan hingga mereka bertemu di tengah. Ini memotong waktu kerja menjadi linear <b>O(N)</b>.",
            tantangan: "Lengkapi fungsi 'cekPalindrome' menggunakan perulangan while yang membandingkan karakter pointer kiri dan kanan. Jika tidak cocok, kembalikan false. Jangan lupa menggeser pointernya.",
            kodeHTML: "<h2>🧠 Platform Feynman: Two Pointers</h2>\n<p>Gunakan tab <b>script.js</b> di sebelah kanan untuk menulis kodemu, lalu perhatikan output pengujiannya di <b>Terminal Sandbox</b> di bawah.</p>",
            kodeCSS: "body {\n  font-family: sans-serif;\n  color: white;\n  background: #1e1e1e;\n  padding: 20px;\n}",
            kodeJS: "// TANTANGAN:\n// Lengkapi fungsi 'cekPalindrome' menggunakan teknik Two Pointers\n// (pointer kiri dan pointer kanan yang saling mendekati).\n// Kembalikan true jika kata adalah palindrome, dan false jika tidak.\n\nfunction cekPalindrome(kata) {\n  let kiri = 0;\n  let kanan = kata.length - 1;\n  \n  // Tulis perulangan while di bawah ini:\n  \n  return true;\n}\n\n// --- TEST SUITE (JANGAN DIUBAH) ---\n(function() {\n  console.log(\"Menguji kata palindrome...\");\n  try {\n      if (cekPalindrome(\"radar\") === true && cekPalindrome(\"katak\") === true && cekPalindrome(\"kucing\") === false) {\n          console.log(\"🎉 SELAMAT! Logika Two Pointers Anda berfungsi dengan sempurna.\");\n      } else {\n          console.log(\"⚠️ Hasil belum tepat. Periksa batas pergeseran kiri dan kanan.\");\n      }\n  } catch(e) {\n      console.log(\"❌ Terjadi Error: \" + e.message);\n  }\n})();"
        },
        {
            id: 5,
            judul: "🪟 Modul 5: Sliding Window (Jendela Geser)",
            teori: "Daripada merakit ulang frame foto pemandangan dari nol setiap kali bergeser, kita cukup menggeser bingkainya sedikit. Kita membuang satu foto yang keluar dari kiri, dan menyerap satu foto baru yang masuk dari kanan. Pola ini sangat ampuh mengoptimalkan sub-array dari O(N*K) menjadi <b>O(N)</b>.",
            tantangan: "Lengkapi loop for di bawah untuk menyelesaikan pergeseran jendela dengan rumus: 'jumlah = jumlah + elemen_masuk - elemen_keluar'.",
            kodeHTML: "<h2>🧠 Platform Feynman: Sliding Window</h2>\n<p>Gunakan tab <b>script.js</b> di sebelah kanan untuk menulis kodemu, lalu perhatikan output pengujiannya di <b>Terminal Sandbox</b> di bawah.</p>",
            kodeCSS: "body {\n  font-family: sans-serif;\n  color: white;\n  background: #1e1e1e;\n  padding: 20px;\n}",
            kodeJS: "// TANTANGAN:\n// Hitung jumlah maksimum dari sub-array dengan panjang K \n// menggunakan teknik Sliding Window (menghindari double-looping).\n\nfunction maxSubArraySum(arr, k) {\n  if (arr.length < k) return 0;\n  \n  // 1. Hitung jumlah jendela pertama\n  let windowSum = 0;\n  for (let i = 0; i < k; i++) {\n      windowSum += arr[i];\n  }\n  \n  let maxSum = windowSum;\n  \n  // 2. Geser jendela ke kanan (lengkapi logika di dalam loop)\n  for (let i = k; i < arr.length; i++) {\n      // windowSum += elemen_masuk - elemen_keluar_kiri;\n      // (Petunjuk: elemen_masuk = arr[i], elemen_keluar_kiri = arr[i - k])\n      \n      maxSum = Math.max(maxSum, windowSum);\n  }\n  \n  return maxSum;\n}\n\n// --- TEST SUITE (JANGAN DIUBAH) ---\n(function() {\n  console.log(\"Menguji Sliding Window...\");\n  try {\n      const arr = [2, 1, 5, 1, 3, 2];\n      if (maxSubArraySum(arr, 3) === 9) {\n          console.log(\"🎉 SELAMAT! Teknik Sliding Window Anda sukses berjalan.\");\n      } else {\n          console.log(\"⚠️ Jumlah maksimal sub-array tidak tepat.\");\n      }\n  } catch(e) {\n      console.log(\"❌ Terjadi Error: \" + e.message);\n  }\n})();"
        }
    ]
};

