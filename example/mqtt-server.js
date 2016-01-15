var mqtt = require('mqtt');
var client = mqtt.connect({
  port: 1883
});

var tick = 0;
setInterval(function() {
  client.publish('yo/message', JSON.stringify({
    tick: ++tick
  }, null, 2), {
    qos: 1,
  });
}, 2000);


var g = require('../');

g.createServer({
  type: 'mqtt',
  reactors: [
    function (socket) {
      socket
        .pipe(new g.console())
    }
  ]
}).listen(1883);
