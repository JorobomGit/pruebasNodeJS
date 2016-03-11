'use strict';

var sleep = function(ms) {

    var promesa = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if ((ms % 2) !== 0) return reject(new Error('Error'));
            resolve({name: 'Juan'});
        }, ms);
    });

    return promesa;
};

var promesa = sleep(1000);


console.log(promesa);

promesa.then(function(data) {
    console.log('Promesa terminada ', data);
}).catch(function(err) {
    console.log('Promesa fallida ', err);
});
