// Module
const { BrowserWindow } = require('electron');

// BrowserWindow instance 
exports.win;

// mainWindow createWindow
exports.createWindow = () => {
    this.win = new BrowserWindow({
        width: 800,
        height: 650,
    })

    // Devtools
    this.win.webContents.openDevTools()

    // load main window content
    this.win.loadFile('./renderer/main.html')

    // Handle window closed
    this.win.on('closed', () => {
        this.win = null
    })
}