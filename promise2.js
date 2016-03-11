'use strict';

function conArroz(plato) {
    return new Promise(function(resolve, rejected) {
        resolve(plato + ' arroz')
    });
}

function conAjo(plato) {
    return new Promise(function(resolve, rejected) {
        resolve(plato + ' ajo')
    });
}

function conSal(plato) {
    return new Promise(function(resolve, rejected) {
        resolve(plato + ' sal')
    });
}

function con(plato, ing) {
    return new Promise(function(resolve, rejected) {
        resolve(plato + ' ' + ing);
    });
}

var paella = 'paella con';
console.log('Preparando plato...');

conArroz(paella)
    .then(conAjo)
    .then(conSal)
    .then(function(plato) {
        console.log(plato);
        console.log('Listo!');
    })
    .catch(function(err) {
        console.log('Error', err);
    });


