'use strict';

let log = (req, next) => {
    let client = req.client;
    let logger = client.WSS.M.logger;
    logger.silly('[WebSocketServer] Receive from client %d: %s', client.id, req.data);

    next();
};

module.exports = (middleware) => {
    middleware.use(log);
};
