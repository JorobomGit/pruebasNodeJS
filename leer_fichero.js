'use strict';

//Para cargar una libreria
var fs = require('fs');

//Leer fichero  de texto en utf8 y sacar en consola el contenido del fichero.

var path = "./package.json";

//El segundo parametro son las opciones
fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
    if (err)
        return console.log("ERR0R!" + err);    

    var paquete = JSON.parse(data);

    console.log(paquete);
    console.log('FIN');
});