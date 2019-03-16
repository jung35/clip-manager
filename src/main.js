const { app, BrowserWindow } = require("electron");

require("electron-reload")(__dirname);

app.on("ready", () => {
  const main_window = new BrowserWindow({ width: 800, height: 600 });

  main_window.loadURL(`file://${__dirname}/index.html`);
});
