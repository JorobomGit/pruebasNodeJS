'use strict';

var Agente = function() {

}

var Agente2 = function (_edad) {
    var edad = _edad;
    return {
        ponEdad: function(nuevaEdad) {
            edad = nuevaEdad;
        },
        leeEdad: function() {
        	console.log('Yo tengo2222:');
        }
    }
}

var Agente3 = function (_edad) {
    var edad = _edad;
    return {
        ponEdad: function(nuevaEdad) {
            edad = nuevaEdad;
        },
        leeEdad: function() {
        	console.log('Yo tengo3333:');
        }
    }
}

var extend = require('util')._extend;

Agente.prototype = extend(Agente.prototype, new Agente3(30), new Agente2(30));
Agente.prototype = Object.assign(Agente.prototype, new Agente3(30), new Agente2(30));
var juan = new Agente();
console.log(juan.leeEdad());
