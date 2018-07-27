
// Modules
const { BrowserWindow } = require('electron');

// BrowserWindow
let bgItemWin

// New read item method
module.exports = (translateTxt, callback) => {

    // Create new offscreen BrowserWindow
    bgItemWin = new BrowserWindow({
        width: 1000,
        height: 1000,
        show: false,
        webPreferences: {
            offscreen: true
        }
    });

    // URL translate of google
    let url = `https://translate.google.com/?sl=en&tl=vi&text=${translateTxt}`;

    // load read item
    bgItemWin.loadURL(url);

    console.log(url);

    // wait for page to finish loading
    bgItemWin.webContents.on('did-finish-load', () => {
        // Get screenshot (thumbnail)
        bgItemWin.webContents.capturePage((image) => {
            // return new item via callback
            callback({ url });

            // clean up
            bgItemWin.close();
            bgItemWin = null;
        })

    })
}