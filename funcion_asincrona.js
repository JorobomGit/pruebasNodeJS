'use strict';

console.log("Empezamos");

var escribeTras2Segundos = function(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
};

escribeTras2Segundos("texto1", function() {
    escribeTras2Segundos("texto2", function() {
        console.log("Fin");
    });
});