var socket = io();

// la funcion .on, son para escuchar suscesos

socket.on('connect', function() {
    console.log('Conectado al servidor')
});

socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor')
});

//la funcion .emit son para enviar informacion
//envio la informacion 
socket.emit('enviarMensaje', {
    usuario: 'diego',
    mens: 'hola mundo'
}, function(resp) {
    console.log('respuesta desde el server', resp)
});


//ESCUCHO LA INFORMACION
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje)
})