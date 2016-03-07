"use strict";

var http = require('http');

//Creamos servidor con peticion y respuesta
var server = http.createServer(function(request, response) {
	//Escribimos primero una cabecera HTTP
	response.writeHead(200, {'Content-Type' : 'text/plain'});

	//Que envie la cabecera con el texto
	response.end('Hola node\n');
});


//Instanciamos servidor
server.listen(1337, "127.0.0.1");
console.log("Servidor arrancado en http://127.0.0.1:1337");