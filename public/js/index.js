var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function (message) {
    console.log('New message.', message);

    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  console.log('EFF THIS WASTE OF TIME');

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});

// $(document).ready(function(){
//    // Write your jQuery code here
// });

// jQuery('#message-form').on('submit', function(e) {
//     console.log('FUCK ALL');
//     e.preventDefault();
//
//     console.log(jQuery('[name=message]').val());
//
//     socket.emit('createMessage', {
//         from: 'User',
//         text: jQuery('[name=message]').val()
//     }, function () {
//
//     });
// });
