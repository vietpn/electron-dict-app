// Modules to control application life and create native browser window
const { app, ipcMain } = require('electron');
const mainWin = require('./mainWin');
const translate = require('google-translate-api');
const request = require('request');

// Enable Electron-reload
require('electron-reload')(__dirname);

var totalWords = [];

// loop get word from array
for (let i = 0; i <= 2; i++) {
  request(`http://www.wordcount.org/dbquery.php?toFind=${i}&method=SEARCH_BY_INDEX`, function (error, response, body) {
    if (body) {
      var arr = body.split("&");
      var rePattern = new RegExp(/^word[0-9]+/);

      arr.forEach(element => {
        if (element.match(rePattern)) {
          var word = element.split('=');
          if (word[1]) {
            console.log(word[1]);
            totalWords.push(word[1]);
          }
        }
      });
    }
  });
}


ipcMain.on('translate-txt', (e, translateTxt) => {
  // using translate text here
  translate(translateTxt, { to: 'vi' }).then(res => {
    // return result translate
    e.sender.send('translate-success', { translateTxt, res });
  }).catch(err => {
    // return new item via callback
    e.sender.send('translate-success', { translateTxt });
  });
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

