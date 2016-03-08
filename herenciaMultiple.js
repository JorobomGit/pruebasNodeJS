'use strict';

var extend = require('util')._extend;
var eventEmitter = require('events').EventEmitter;

var Agente = function(name){	
	Persona.call(this, name); //Bindeamos nombre
}

var Persona = function(name){
	this.name=name;
};


//Herencia de persona
Agente.prototype = new Persona();

//Extendemos de eventEmitter
Persona.prototype = extend(Persona.prototype, eventEmitter.prototype);

//Emitter
var juan = new Agente("Juan");

juan.on('Llamada de telefono', function(){
	console.log('ring ring');
	console.log('brr brr');
});

juan.emit('Llamada de telefono');



//Process
juan.on('bloblop', function(data){
	console.log('Ha saltado bloblop:', data);
})

process.on('exit', function() {
	juan.emit('bloblop', 'El programa termina');
});