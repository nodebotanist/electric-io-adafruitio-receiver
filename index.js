const eventEmitter = require('events').EventEmitter;
const util = require('util');
const mqtt = require('mqtt');
let client = null;

const Receiver = function(options) {
  console.log('In the AdafruitIO receiver!')
  const AIOUsername = options.AIOUsername;
  const AIOkey = options.AIOkey;
  client = mqtt.connect('mqtt://io.adafruit.com', {
    username: AIOUsername,
    password: AIOkey
  })

  client.on('connect', () => {
    console.log('connected to AdafruitIO')
  })

  client.on('error', (err) => {
    console.log('Error connecting to AdafruitIO: ', err)
  })
  eventEmitter.call(this);
}


util.inherits(Receiver, eventEmitter);

Receiver.prototype.emitMessage = function(message) {
  this.emit('data', message);
}

module.exports = Receiver;