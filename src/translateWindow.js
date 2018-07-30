
// Modules
const { BrowserWindow } = require('electron');
const path = require('path');

// BrowserWindow
let bgItemWin

// New read item method
exports.createWindow = (translateTxt) => {

    // Create new offscreen BrowserWindow
    bgItemWin = new BrowserWindow({
        width: 1000,
        height: 1000,
        show: true,
        webPreferences: {
            preload: path.join(__dirname, "./inject.js")
        }
    });

    // URL translate of google
    let url = `https://translate.google.com/?sl=en&tl=vi&text=${translateTxt}`;

    // load read item
    bgItemWin.loadURL(url);

    bgItemWin.webContents.openDevTools();

    // Handle window closed
    bgItemWin.on('closed', () => {
        bgItemWin = null
    })
}

