const express = require('express');
const bodyParser = require('body-parser');

var port = 3000;

var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));

app.get('/', function(req,res) {
	res.send('Hello');
});

app.listen(port,function() {
	console.log('Server listening on port ' + port)
});