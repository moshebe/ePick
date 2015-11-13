console.log('loading custom middleware modules...');
var middlewares = [
					require('body-parser').urlencoded({extended: true}),
					require('body-parser').json()
				  ]
module.exports = middlewares;