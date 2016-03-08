'use strict';

var eventEmitter = new (require('events')).EventEmitter();

eventEmitter.on('Llamada de telefono', function(){
	console.log('ring ring');
});

eventEmitter.on('Llamada de telefono', function(){
	setTimeout(console.log('brr brr'),100);
});

eventEmitter.emit('Llamada de telefono');
