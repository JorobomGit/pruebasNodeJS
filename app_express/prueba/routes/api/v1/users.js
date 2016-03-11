'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var auth = require('../../../lib/auth');

var admin = 'admin';
var pass = 'pass';

//router.use(auth('admin','pass2'));


/* GET users listing. */
router.get('/', auth(admin,pass), function(req, res) {

	var sort = req.query.sort || 'name';

    User.list(sort, function(err, rows) {
        if (err) return res.json({ result: false, err: err });
        //Cuando esten disponibles los mando en JSON
        res.json({ result: true, rows: rows });
    });
});

//Añadir un user
router.post('/', function(req, res) {
    //Instanciamos objeto en memoria
    var user = new User(req.body);

    //Lo guardamos en la BD
    user.save(function(err, newRow) {
        if (err) return res.json({ result: false, err: err });

        res.json({ result: true, row: newRow });
    });

});

//Actualizar un user
router.put('/:id', function(req, res) {

    User.update({ _id: req.params.id }, { $set: req.body },
        function(err, data) {
            if (err) return res.json({ result: false, err: err });
            res.json({ result: true, row: data });
        });
});

module.exports = router;
