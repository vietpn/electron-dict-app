// Modules
const { ipcRenderer } = require('electron');

$('#translate-btn').click((e) => {
    let translateTxt = $('#translate-txt').val();

    // Get txt from input
    if (translateTxt) {
        // send translate to main process via IPC
        ipcRenderer.send('translate-txt', translateTxt);
    }
})