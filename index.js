'use strict';

var prop = require('mincer/lib/mincer/common').prop;

module.exports = function addEcoEngine(Mincer, eco) {

	var EcoEngine = Mincer.EcoEngine = function EcoEngine() {
		Mincer.Template.apply(this, arguments);
		eco = eco || Mincer.Template.libs.eco || require('eco');
	};

	require('util').inherits(EcoEngine, Mincer.Template);

	EcoEngine.prototype.evaluate = function evaluate(context, locals) {
		//call the function within eco module to compile the data
		this.data = eco.precompile(this.data);
	};

	Mincer.registerEngine('.eco', Mincer.EcoEngine);

	prop(Mincer.EcoEngine, 'defaultMimeType','application/javascript');
};