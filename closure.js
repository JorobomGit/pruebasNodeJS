'use strict';

function creaAgente(_edad) {
    var edad = _edad;
    return {
        ponEdad: function(nuevaEdad) {
            edad = nuevaEdad;
        },
        leeEdad: function() {
        	console.log('Yo tengo:' + edad);
            return edad;
        }
    }
}
var agente = creaAgente(30);
var agente2 = creaAgente(25);

console.log(agente.leeEdad());

setTimeout(agente.leeEdad, 1000);
setTimeout(agente2.leeEdad, 1000);
