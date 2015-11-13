console.log('loading custom middleware modules...');
var middlewares = [
					require('body-parser').urlencoded({extended: true}),
					require('body-parser').json(),
					require('./ParamValidator'),
					require('./Rest')
				  ]
module.exports = middlewares;