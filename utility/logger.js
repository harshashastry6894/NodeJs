const { format } = require('winston');
const winston = require('winston');

const logger = new winston.createLogger({
    level: 'info',
    format: winston.format.combine(format.timestamp(), format.json()),
    // defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            json: false,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.File({
            level: 'error',
            filename: './logs/error.log',
            handleExceptions: true,
            json: false,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

logger.stream = { 
    write: function(message, encoding){ 
      // use message.trim() to remove empty line between logged lines
      // https://stackoverflow.com/a/28824464/3109731
      logger.info(message.trim()); 
    } 
  }; 

module.exports = logger;