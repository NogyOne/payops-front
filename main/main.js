const { app, BrowserWindow } = require('electron')
const serve = require('electron-serve')
const path = require('path')

const PORT = process.env.PORT

const appServe = app.isPackaged
  ? serve({
      directory: path.join(__dirname, '../out'),
    })
  : null

const createWindow = (windowName, options) => {
  const win = new BrowserWindow({
    name: windowName,
    width: options.width,
    height: options.height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL('app://-')
    })
  } else {
    win.loadURL(`http://localhost:3000/home`)
    win.webContents.openDevTools()
    win.webContents.on('did-fail-load', (e, code, desc) => {
      win.webContents.reloadIgnoringCache()
    })
  }
}

app.on('ready', () => {
//   const loginWindow = createWindow('Login', {
//     width: 460,
//     height: 700,
//   })

  const mainWindow = createWindow('Main', {
    width: 1280,
    height: 750,
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
