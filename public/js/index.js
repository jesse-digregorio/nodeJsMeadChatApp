var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    socket.emit('createEmail', {
        to: 'albert@example.com',
        text: 'well, hello there.'
    });

    socket.emit('createMessage', {
        from: 'Lemon Merchant',
        text: 'Ya get it?',
        createdAt: 223
    })
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newEmail', function (email) {
    console.log('New email.', email);
});

socket.on('newMessage', function (message) {
    console.log('New message.', message);
});
