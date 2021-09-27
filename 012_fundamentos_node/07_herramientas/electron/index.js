const {app, BrowserWindow} = require('electron');
// import {app, BrowserWindow} from 'electron';

let mainWindow;

/**
 * crear un BrowserWindow (ventana principal) cuando el app lance el evento
 * ready (listo)
 */
app.on('ready', createWindow)

function createWindow() {
    mainWindow =  new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadFile('index.html');
}