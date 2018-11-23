'use strict';

let log = (req, next) => {
    let client = req.client;
    let logger = client.WSS.M.logger;
    logger.silly('[WebSocketServer] Client %d disconnect.', client.id);

    next();
};

module.exports = (middleware) => {
    middleware.use(log);
};
