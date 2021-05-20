import { writable } from "svelte/store";

const articleStore = writable([
    {
        title: "Install svelte",
        content: ["npx degit sveltejs/template my-svelte-project", "cd my-svelte-project", "npm install", "npm run dev"]
    },
    {
        title: "Install Electron",
        content: ["npm i -D electron@latest"]
    },
    {
        title: "Create index.js",
        content: ["const { app, BrowserWindow, screen } = require('electron');",
            `const createWindow = () => {
            const { width, height } = screen.getPrimaryDisplay().workAreaSize;
        
            window = new BrowserWindow({
                width: width / 1.25,
                height: height / 1.25,
                webPreferences: {
                    nodeIntegration: true
                }
            });
        
            window.loadFile('public/index.html');
        };`,
            "let window = null;",
            "app.whenReady().then(createWindow)",
            "app.on('window-all-closed', () => app.quit());"
        ]
    },
    {
        title: "Update package.json",
        content: [`"start": "electron ."`]
    },
    {
        title: "Adding hot reload",
        content: ["npm i electron-reload", "require('electron-reload')(__dirname);"]
    },
    {
        title: "Electron Builder",
        content: ["npm install electron-builder --save-dev"]
    },
    {
        title: "Update package.json",
        content: [`"scripts": {
            "build-installer": "rollup -c && electron-builder build --win",
            "publish": "electron-builder build --win --publish always"
          }`]
    },
    {
        title: "Update package.json",
        content: [`  "build": {
            "appId": "memento",
            "directories": {
              "output": "out"
            },
            "win": {
              "target": [
                "nsis"
              ],
              "icon": "icon.ico"
            },
            "nsis": {
              "installerIcon": "icon.ico",
              "uninstallerIcon": "icon.ico",
              "uninstallDisplayName": "Memento (test Svelte+Electron)",
              "license": "license.txt",
              "oneClick": false,
              "allowToChangeInstallationDirectory": true
            }
          }`]
    },
    {
        title: "Build Installer",
        content: ["npm run build-installer --publish never"]
    },
    {
        title: "Electron Updater",
        content: ["npm i electron-updater"]
    },
    {
        title: "Update index.js",
        content: [`(async () => {
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
           
        })();`]
    },
    {
        title: "Links",
        content: ["https://www.webtips.dev/how-to-make-your-very-first-desktop-app-with-electron-and-svelte#how-to-build-the-app",
            "https://jonasjancarik.medium.com/handling-those-unhandled-promise-rejections-when-using-javascript-async-await-and-ifee-5bac52a0b29f",
            "https://github.com/ptkdev-boilerplate/svelte-electron-boilerplate"
        ]
    },
]);

export default articleStore;