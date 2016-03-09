'use strict';

var express = require('express');
var router = express.Router();

//Metodo, ruta y callback
router.get('/', function(req, res) {
	console.log(req.query)
	res.send('Hola express');
});

//Este filtro es mas especifico, si lo pusieramos debajo de la de /:id, nunca entraría
router.get('/:id([0-9]+)/piso/:piso(A|B|C)', function(req, res) {
	console.log(req.params, ' el id es ', req.params.id, 'el piso es ', req.params.piso);
	res.send('Hola express2');
});

router.get('/:id([0-9]+)', function(req, res) {
	console.log(req.params, ' el id es ', req.params.id);
	res.send('Hola express3');
});

router.get('/:id', function(req, res) {
	console.log(req.params);
	res.send('Hola express4');
});

router.post('/', function(req, res) {
	//post a http://localhost:3000/admin
	console.log(req.body);
	res.send("body recogido");
})

//Exportamos
module.exports = router;