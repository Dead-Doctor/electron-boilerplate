const { app, BrowserWindow, dialog, ipcMain } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    minWidth: 290,
    minHeight: 300,
    webPreferences: {
      nodeIntegration: true,
      enableBlinkFeatures: 'CSSColorSchemeUARendering',
    },
  });
  win.removeMenu();
  win.loadFile('./src/app/index.html');
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
