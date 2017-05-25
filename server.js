const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 8022;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (data) => {
    io.emit('message', data);
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});
