const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.emit('newEmail', {
        from: 'junko@example.com',
        text: 'This is an email you are getting.',

    });


    socket.emit('newMessage', {
        from: 'Keeper of the Cheese',
        text: 'Got any lemons?',
        createdAt: 213
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });

    socket.on('createMessage', (newMessage) => {
        console.log('newMessage', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});
