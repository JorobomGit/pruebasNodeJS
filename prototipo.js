'use strict';

//hacer funcion constructora
var Persona = function(name){
	this.name=name;
};
//crear una instancia
var luis = new Persona("Luis");

//Cambiar su prototipo
Persona.prototype.saluda = function(argument){
	 console.log("Saludos " + this.name)
};
//Hemos añadido un metodo saluda
luis.saluda();

//Valido para todas las clases nuevas
var pepe = new Persona("Pepe");

pepe.saluda();

/*HERENCIA*/
// Otra funcion que hereda de persona
var Agente = function(name){
	//Ejecutamos constructor heredado
	//Lo mismo que llamar a super() en otros lenguajes
	Persona.call(this, name); //Bindeamos nombre
}

Agente.prototype = new Persona();

var juan = new Agente("Juan");

juan.saluda();


console.log(Object.getPrototypeOf(juan));
console.log(juan instanceof Agente);
console.log(juan instanceof Persona);
console.log(juan instanceof Object);