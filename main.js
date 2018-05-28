const {app,BrowserWindow} = require('electron')

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 420,
        width: 280,
        frame:false,
        transparent:true
    });

    mainWindow.loadURL( __dirname + '/index.html');
      mainWindow.on('closed', function () {
        mainWindow = null
      })
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})