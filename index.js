'use strict';

const M = require('./Magenta');
const path = require('path');

let Magenta = new M({});

let init = async () => {
    let ORM = await Magenta.setup('ORM');
    let Authentication = await Magenta.setup('Authentication', ['ORM']);

    let WebServer = await Magenta.setup('WebServer');
    WebServer.addRoutes(path.resolve(WebServer.root, 'routes.js'));

    await Magenta.mix(WebServer, Authentication);

    let WebServerAPI = await Magenta.setup('WebServerAPI', ['ORM', 'WebServer'], {"exports": ["text", "img"]});
    let WebServerFileUpload = await Magenta.setup('WebServerFileUpload', ['WebServer'], {"uploadFolder": "uploads"});

    let WebServerSocket = await Magenta.setup('WebSocketServer');

    Magenta.init();
    Magenta.start();
};

init();
