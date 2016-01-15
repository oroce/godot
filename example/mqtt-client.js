/*
 * client.js :: A client example showing 2 generic producers
 *
 * (C) 2013, Charlie Robbins, Jarrett Cruger, and the Contributors.
 *
 */
var mosca = require('mosca');
var server = new (mosca.Server)({
  port: 1883
});
server.published = function(packet, client, cb) {
  console.log('message on %s containing %s', packet.topic, packet.payload);
  cb();
};
var godot = require('../lib/godot');

//
// This client will expire only once you turn off this client script
//
godot.createClient({
  type: 'mqtt',
  producers: [
    godot.producer({
      host: '127.0.0.1',
      service: 'ohai/there',
      ttl: 1000 * 4
    })
  ]
}).connect(1883);

//
// This client will expire on the first tick
//
godot.createClient({
  type: 'mqtt',
  producers: [
    godot.producer({
      host: '127.0.0.1',
      service: 'new/things',
      ttl: 1000 * 6
    })
  ]
}).connect(1883);
