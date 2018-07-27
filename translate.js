
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

    bgItemWin.webContents.on('dom-ready', () => {
        callback({ url });

        bgItemWin.webContents.executeJavaScript(`function translate() { return document.getElementById("result_box").textContent } translate() `)
            .then((res) => {
                console.log(res);
            })

        // clean up
        bgItemWin.close();
        bgItemWin = null;
    })
}