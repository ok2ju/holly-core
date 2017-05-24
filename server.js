const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 8022;

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('news', { hello: 'world' });
  io.emit('news', 'hooray! news');
  socket.emit('app error', { message: 'Test stack trace :)' });

  socket.on('app error', (data) => {
    socket.emit('app error', { message: 'Test stack trace :)' });
    console.log(data);
  });

  socket.on('app info', (data) => {
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});
