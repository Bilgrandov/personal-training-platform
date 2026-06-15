/**
 * @fileoverview Live Code Editor Core Engine
 * Manages DOM manipulation, interactive split-pane resizing, and 
 * dynamic lesson loading for the e-learning platform.
 */

// ==========================================
// 1. DOM Elements
// ==========================================
const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const outputLayar = document.getElementById('output');
const consoleOutput = document.getElementById('console-output');
const btnClearConsole = document.getElementById('clear-console');

const resizer = document.getElementById('drag-handle');
const theoryPanel = document.getElementById('theory-panel');
const btnToggleMateri = document.getElementById('toggle-materi');
const btnTutupDalam = document.querySelector('.toggle-panel');

const judulMateri = document.querySelector('.theory-header h2');
const isiMateri = document.getElementById('theory-content');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

// ==========================================
// 2. State Management
// ==========================================
let isResizing = false;
let currentLessonIndex = 0;

// ==========================================
// 3. Core Engine: Live Preview & Terminal Intercept
// ==========================================
/**
 * Injects user input and sandbox console interceptor into the iframe context.
 * Triggered on every 'input' event from the editor textareas.
 */
function jalankanKode() {
    if (consoleOutput) {
        consoleOutput.innerHTML = '';
    }
    const rakitanWeb = `
        <html>
        <head>
            <style>${cssCode.value}</style>
        </head>
        <body>
            ${htmlCode.value}
            <script>
            (function() {
                const originalLog = console.log;
                console.log = function(...args) {
                    originalLog.apply(console, args);
                    const formatted = args.map(arg => {
                        if (typeof arg === 'object') {
                            try { return JSON.stringify(arg); } catch(e) { return String(arg); }
                        }
                        return String(arg);
                    }).join(' ');
                    window.parent.postMessage({ type: 'CONSOLE_LOG', text: formatted }, '*');
                };
                window.onerror = function(message, source, lineno, colno, error) {
                    window.parent.postMessage({ type: 'CONSOLE_ERROR', text: message + ' (Baris ' + lineno + ')' }, '*');
                    return false;
                };
            })();
            </script>
            <script>
            ${jsCode.value}
            </script>
        </body>
        </html>
    `;
    outputLayar.srcdoc = rakitanWeb;
}

[htmlCode, cssCode, jsCode].forEach(el => {
    el.addEventListener('input', jalankanKode);
});

// Listener untuk menangkap log dari iframe
window.addEventListener('message', (event) => {
    if (!consoleOutput) return;
    const data = event.data;
    if (data && (data.type === 'CONSOLE_LOG' || data.type === 'CONSOLE_ERROR')) {
        const line = document.createElement('div');
        line.classList.add('console-line');
        if (data.type === 'CONSOLE_ERROR') {
            line.classList.add('console-error');
            line.textContent = `❌ ${data.text}`;
        } else {
            line.classList.add('console-log-line');
            line.textContent = `> ${data.text}`;
        }
        consoleOutput.appendChild(line);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
});

// Tombol Clear Console
if (btnClearConsole) {
    btnClearConsole.addEventListener('click', () => {
        consoleOutput.innerHTML = '<div class="console-line console-system">> Console cleared.</div>';
    });
}

// ==========================================
// 4. UI Handlers: Resizer & Sidebar Toggle
// ==========================================
resizer.addEventListener('mousedown', () => {
    isResizing = true;
    resizer.classList.add('is-resizing');
    document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    
    const newWidth = e.clientX;
    // Boundary constraints: min 200px, max 50vw
    if (newWidth > 200 && newWidth < window.innerWidth / 2) {
        theoryPanel.style.width = `${newWidth}px`;
    }
});

document.addEventListener('mouseup', () => {
    if (isResizing) {
        isResizing = false;
        resizer.classList.remove('is-resizing');
        document.body.style.userSelect = 'auto';
    }
});

/**
 * Toggles the visibility of the theory sidebar.
 */
function toggleSidebar() {
    const isHidden = theoryPanel.style.display === 'none';
    theoryPanel.style.display = isHidden ? 'flex' : 'none';
    resizer.style.display = isHidden ? 'block' : 'none';
}

btnToggleMateri.addEventListener('click', toggleSidebar);
btnTutupDalam.addEventListener('click', toggleSidebar);

// ==========================================
// 5. E-Learning Controller (Router & Loader)
// ==========================================
/**
 * Router: Membaca parameter URL (?project=...) untuk menentukan proyek mana yang dimuat.
 */
const urlParams = new URLSearchParams(window.location.search);
const activeProjectKey = urlParams.get('project') || 'dasar'; // Default ke 'dasar' jika URL kosong

// Memilih array materi yang sesuai dari databaseMateri di lesson.js
const daftarModul = databaseMateri[activeProjectKey];

/**
 * Loads lesson data from the active index and populates the UI.
 * Depends on the `daftarModul` array resolved from the router above.
 */
function muatPelajaran() {
    if (typeof daftarModul === 'undefined' || !daftarModul.length) return;

    const materi = daftarModul[currentLessonIndex];

    // Populate UI content
    judulMateri.textContent = materi.judul;
    isiMateri.innerHTML = `
        <h3 style="color: #ff9f1c;">💡 Teori Singkat</h3>
        <p>${materi.teori}</p>
        <br>
        <h4 style="color: #ff9f1c;">🔥 Tantangan</h4>
        <p>${materi.tantangan}</p>
    `;

    // Populate editor templates
    htmlCode.value = materi.kodeHTML;
    cssCode.value = materi.kodeCSS;
    jsCode.value = materi.kodeJS;

    // Trigger initial render
    jalankanKode();
}

btnNext.addEventListener('click', () => {
    if (currentLessonIndex < daftarModul.length - 1) {
        currentLessonIndex++;
        muatPelajaran();
    }
});

btnPrev.addEventListener('click', () => {
    if (currentLessonIndex > 0) {
        currentLessonIndex--;
        muatPelajaran();
    }
});

// Initialize first lesson on load
muatPelajaran();
