var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'vash');
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
	console.log('HTTP');
	res.send('Hello World');
});

var server = http.createServer(app);
server.listen(3000, function () {
	console.log('Server started');
});