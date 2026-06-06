// Dom Selection
const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const outputLayar = document.getElementById('output');
// Execute Code Function
function jalankanKode() {
    const rakitanWeb =
        `
            <html>
            <head>
                <style>${cssCode.value}</style>
            </head>
            <body>
                ${htmlCode.value}
                <script>
                ${jsCode.value}
                </script>
            </body>
            </html>
            `;
    outputLayar.srcdoc = rakitanWeb;
}
htmlCode.addEventListener('input', jalankanKode);
cssCode.addEventListener('input', jalankanKode);
jsCode.addEventListener('input', jalankanKode);