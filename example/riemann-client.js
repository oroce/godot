var godot = require('..');

godot.createClient({
  type: 'tcp',
  codec: 'protobuf',
  producers: [
    godot.producer({
      host: 'myserver',
      service: 'ping',
      ttl: 1000 * 5
    })
  ]
}).connect(5560);
