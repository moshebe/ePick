var requirer = require('require-dir');
module.exports = function () {
	var config = {};
	var configs = requirer('./');
	for(var conf in configs) {
		config[conf] = configs[conf];
	}
	config.root = app.settings.root;
	return config;
};