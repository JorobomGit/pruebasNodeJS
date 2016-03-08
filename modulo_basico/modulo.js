'use strict';

var objeto = {
	vuela: function () {
		 console.log('volaaaaando voy');
	}
}

module.exports = {
	objeto1: objeto,
	objeto2: {
		nada: function() {
			console.log('nadando voy');
		}
	}
};