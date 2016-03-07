'use strict';

var async = require('async');

console.log("Empezamos");

var escribeTras2Segundos = function(texto, callbackNuestro) {
    setTimeout(function() {
        console.log(texto);
        callbackNuestro();
    }, 500);
};


async.eachSeries([1, 2, 3, 4, 5], //array de elementos
    function(item, siguiente) { //funcion a realizar
        escribeTras2Segundos(item, function() {
            var res = item % 2 ? null : 'error';
            siguiente(res);
        })
    },
    function fin(err) { //callback
        console.log("Fin", err);
    }
);
