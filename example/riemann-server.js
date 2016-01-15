var godot = require('..');

godot.createServer({
  //
  // Defaults to UDP
  //
  type: 'tcp',
  reactors: [
    function (socket) {
      return socket
        .pipe(godot.console(function(data) {
          console.log('data arrived', data);
        }));
    }
  ],
  codec: 'protobuf'
}).listen(5560);
