const eventEmitter = require('events').EventEmitter;
const util = require('util');
const mqtt = require('mqtt');
let client = null;

const Receiver = function(options) {
  const AIOUsername = options.AIOUsername;
  const AIOkey = options.AIOkey;
  client = mqtt.connect('mqtt://io.adafruit.com', {
    username: AIOUsername,
    password: AIOkey
  })
  eventEmitter.call(this);
}

util.inherits(Receiver, eventEmitter);

Receiver.prototype.emitMessage = function(message) {
  this.emit('data', message);
}

module.exports = Receiver;