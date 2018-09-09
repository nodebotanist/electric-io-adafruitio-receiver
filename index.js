const eventEmitter = require('events').EventEmitter;
const util = require('util');
const mqtt = require('mqtt');

const Receiver = function(options) {
  const AIOUsername = options.AIOUsername;
  const AIOkey = options.AIOkey;
  eventEmitter.call(this);
}

util.inherits(Receiver, eventEmitter);

Receiver.prototype.emitMessage = function(message) {
  this.emit('data', message);
}

module.exports = Receiver;