// Modules
const { ipcRenderer } = require('electron');

$('#translate-btn').click((e) => {
    let translateTxt = $('#translate-txt').val();
    console.log(translateTxt);
})