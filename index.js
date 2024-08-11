const http = require('http');
const io =require('socket.io');

const port = 8000;

const server = http.createServer((req,res) =>{
    res.end('Server is running!!!');
});

server.listen(port, () => {
    console.log('Server is listening on port ${port}');
});

const ioServer = io.listen(server);

const users = {};

ioServer.on('connection', Socket =>{

});

ioServer.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
        users[socket.id] =name;
        socket.broadcast.emit('user-joined', name);
    });
});

socket.on('send',message =>{
    socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
});

socket.on('disconnect', message =>{
    socket.broadcast.emit('left', users[socket.id]);
    delete users[socket.id];
});
