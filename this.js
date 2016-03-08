//'use strict';

//Objeto con metodos 
var persona = {
	name: 'Juan',
	printname: function(){
		console.log(this.name);
	}
};

var mascota = {
	name: 'Sharpi'
};

persona.printname();

//Llamarlo sin this
setTimeout(persona.printname.bind(persona), 1000);
//Funcion
function saluda (func) {
	func();
}


persona.printname.call(mascota);
persona.printname.apply(persona);
saluda(persona.printname.bind(mascota));