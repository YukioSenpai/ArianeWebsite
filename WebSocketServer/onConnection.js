'use strict';

let log = (req, next) => {
    let client = req.client;
    let logger = client.WSS.M.logger;
    logger.silly('[WebSocketServer] Client %d connect from %s:%d.', client.id, client.req.connection.remoteAddress, client.req.connection.remotePort);

    next();
};

let sayHello = (req, next) => {
    let client = req.client;

    let res = {
        msg: "[WSS]" + client.req.connection.remoteAddress + " Connection accepted."
    };

    client.sendJSON(res);

    let otherClients = req.client.WSS.clients;
    otherClients.forEach(otherClient => {
        if (otherClient.ws.readyState === otherClient.ws.OPEN) {
            try {
                otherClient.sendJSON({msg: "[WSS] Connection accepted for another client : " + client.req.connection.remoteAddress});
            } catch (e) {
                req.client.WSS.M.logger.warn('[WSS] Could not send JSON to client %s, %s', otherClient.req.connection.remoteAddress, e);
            }
        }
    })
};

module.exports = (middleware) => {
    middleware.use(log);
    middleware.use(sayHello);
};
