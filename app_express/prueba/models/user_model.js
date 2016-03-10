'use strict';

var conn = require('../lib/connectMongo.js');

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
		console.log(conn.db);
		conn.db.collection('agentes').find({}).toArray(function(err, users){
			if(err){
				cb(err);
				return;
			}
			cb(null, users);
		});
	}
};

//Exporto el modelo
module.exports = user;
