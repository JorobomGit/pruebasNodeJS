'use strict';


function versionModulo(nombre, callback){
    var path = "node_modules/" + nombre + "/package.json";
	var fs = require('fs');
    //El segundo parametro son las opciones
    fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
        if (err)
            return callback(err);

        var paquete = JSON.parse(data);
        callback(err, paquete.version);
    });

}

versionModulo('chance', function(err, str) {
    if (err) {
        console.error('Hubo un error: ', err);
        return;
    }
    console.log('La version del módulo es:', str);
});
