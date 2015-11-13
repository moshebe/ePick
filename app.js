var path = require('path');
var express = require('express');
var app = express();
app.server = require('http').Server(app);
global.app = app;
app.set('root', path.resolve(__dirname));

app.use('/static/',express.static(app.settings.root + '/static'));
app.set('view engine', 'vash');

app.config = require('./config')();
app.helpers = require('./helpers');
app.models = require('./models');
app.use(require('./middlewares'));
app.controllers = require('./controllers');
require('./routes');



app.server.listen(8000, function () {
	console.log('Service is now ready');
});

//require('./errorHandler');