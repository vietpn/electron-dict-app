// Modules
const { ipcRenderer } = require('electron');
const translate = require('./translate');

$('#translate-btn').click((e) => {
    let translateTxt = $('#translate-txt').val();

    // Get txt from input
    if (translateTxt) {
        // send translate to main process via IPC
        ipcRenderer.send('translate-txt', translateTxt);
    }
})

// Listen for new item from main process
ipcRenderer.on('translate-success', (e, res) => {
    if (res.res) {
        console.log(res);
    }
});


