const { app, BrowserWindow, ipcMain } = require('electron')
const serve = require('electron-serve')
const path = require('path')

const PORT = process.env.PORT

const appServe = app.isPackaged
  ? serve({
      directory: path.join(__dirname, '../out'),
    })
  : null

const createWindow = (windowName, options) => {
  const iconPath = path.resolve(__dirname, 'public/BlueSpiralV2.ico')

  const win = new BrowserWindow({
    name: windowName,
    width: options.width,
    height: options.height,
    minHeight: options.height,
    minWidth: options.width,
    frame: false,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
    },
    icon: iconPath,
  })

  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL('app://-')
    })
  } else {
    win.loadURL(`http://localhost:3000/login`)
    win.webContents.openDevTools() //Must to put to open when is on dev mode
    win.webContents.on('did-fail-load', (e, code, desc) => {
      win.webContents.reloadIgnoringCache()
    })
  }

  return win
}

app.on('ready', () => {
  //   const loginWindow = createWindow('Login', {
  //     width: 460,
  //     height: 700,
  //   })

  const mainWindow = createWindow('Main', {
    width: 1280,
    height: 800,
  })

  ipcMain.on('minimize-window', () => {
    mainWindow.minimize()
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
