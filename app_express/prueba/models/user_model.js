'use strict';

//Datos
var users = [{
    name: 'Smith',
    age: 30
}, {
    name: 'Pepe',
    age: 23
}];

//Metodos del modelo
var user = {
	getUsers: function(cb){

		cb(null, users);
	}
};

//Exporto el modelo
module.exports = user;
