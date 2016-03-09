var express = require('express');
var router = express.Router();
var user = require('../models/user_model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET users listing. */
router.get('/form', function(req, res, next) {
	//Pido datos al modelo
  user.getUsers(function(err, users){
  	//Cuando tengamos los datos realizamos callback y los mandamos a la vista:
  	res.render('user_form', {users: users});
  });
});

module.exports = router;