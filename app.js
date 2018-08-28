require('./logger');

const EventEmitter = require('events');
const emitter = new EventEmitter();


// const fs = require('fs');
//
// fs.readdir('./', function(err, files) {
//   if (err) console.error(err);
//   console.log('Resule', files);
// });

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// Register a listener
// emitter.on('messageLogged', (e) => console.log('listener called for', e.name))

// Raise an event
emitter.emit('messageLogged', { name: 'leon' });

// Raise: logging (data: message)
