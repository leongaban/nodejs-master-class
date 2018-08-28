const EventEmitter = require('events');

class Logger extends EventEmitter {

  // Log method
  log(message) {
    console.log(message);

    // Raise an event
    this.emit('messageLogged', { name: 'leon' , message });
  }
}


module.exports = Logger;
