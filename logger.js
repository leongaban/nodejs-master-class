const EventEmitter = require('events');
const emitter = new EventEmitter();

const url = 'http://mylogger.io/log';

function log(message) {
  // Send an HTTP request
  console.log(message);
}

emitter.on('messageLogged', (e) => console.log('messageLogged called', e));

module.exports = log;
