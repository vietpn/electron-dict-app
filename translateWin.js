// Modules
const { BrowserWindow } = require('electron');

// BrowserWindow
let translateWin;

// New read item method
module.exports = (translateTxt, callback) => {

    // Create new offscreen BrowserWindow
    translateWin = new BrowserWindow({
        width: 500,
        height: 650,
        minWidth: 350,
        maxWidth: 650,
        minHeight: 310
    });

    // load translate window content
    translateWin.loadFile('./renderer/translate.html');

    // Handle window closed
    translateWin.on('closed', () => {
        translateWin = null
    })

}