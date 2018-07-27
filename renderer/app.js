// Modules
const { ipcRenderer } = require('electron');

window.openTranslate = (item) => {
    // Get item's content url
    let contentURL = encodeURIComponent(item.url);    

    let readerWinUrl = `file://${__dirname}/translate.html?url=${contentURL}`;

    // open item in new proxy window
    let readerWin = window.open(readerWinUrl);
}

$('#translate-btn').click((e) => {
    let translateTxt = $('#translate-txt').val();

    // Get txt from input
    if (translateTxt) {
        // send translate to main process via IPC
        ipcRenderer.send('translate-txt', translateTxt);
    }
})

// Listen for new item from main process
ipcRenderer.on('translate-success', (e, item) => {
    if (item) {
        window.openTranslate (item);
    }
});




