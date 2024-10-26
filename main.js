const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'), // Loads `renderer.js`
    },
  });

  win.loadFile('index.html'); // Loads `index.html` in the window
}

app.whenReady().then(createWindow);
