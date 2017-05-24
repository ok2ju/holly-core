const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 8022;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('app info', (data) => {
    io.emit('app info', data);
    console.log(data);
  });

  socket.on('app error', (data) => {
    io.emit('app error', data);
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});
