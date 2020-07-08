var socket = io();

// escuchar (on)
socket.on('connect', function() {
    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servicidor');
});

//Enviar información 
socket.emit('enviarMensaje', {
    usuario: 'Lu Lu',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respursta server', resp);

});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});