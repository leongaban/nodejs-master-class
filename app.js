const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (e) => {
  console.log('messageLogged called', e);
});

logger.log('A message has been broadcast!');
