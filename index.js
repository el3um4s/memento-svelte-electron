const { app, BrowserWindow, screen } = require('electron');
const { autoUpdater } = require("electron-updater");
require('electron-reload')(__dirname);

(async () => {
    const FOUR_HOURS = 1000 * 60 * 60 * 4;
    setInterval(async () => {
        try {
            await autoUpdater.checkForUpdates();
        } catch (error) {
            console.log('That did not go well.')
        }
    }, FOUR_HOURS);

    try {
        await autoUpdater.checkForUpdates();
    } catch (error) {
        console.log('That did not go well.')
    }
   
})();

const createWindow  = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    
    window = new BrowserWindow({
        width: width / 1.25,
        height: height / 1.25,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.loadFile('public/index.html');
}

let window = null;

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit());