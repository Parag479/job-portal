const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ],
});

const logRequest = (req, res, next) => {
    logger.info({
        method: req.method,
        url: req.url,
        body: req.body,
        timestamp: new Date().toISOString(),
    });
    next();
};

const logError = (error, req, res, next) => {
    logger.error({
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
    });
    next(error);
};

module.exports = {
    logger,
    logRequest,
    logError,
};