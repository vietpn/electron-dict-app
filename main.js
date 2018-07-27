// Modules to control application life and create native browser window
const { app, ipcMain } = require('electron');
const mainWin = require('./mainWin');
const translate = require('./translate');

// Enable Electron-reload
require('electron-reload')(__dirname);

ipcMain.on('translate-txt', (e, translateTxt) => {
  // Get word translated
  translate(translateTxt, (item) => {
    e.sender.send('translate-success', item);
  })
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', mainWin.createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWin === null) {
    mainWin.createWindow();
  }
})

