var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'fd'
});
// app.get('/', function(req, res) {
// 	res.sendfile(path.join(__dirname + '/index1.html');
// });
app.use('/', express.static(__dirname + '/public'));

app.get('/insertfd',function(req, res) {
	connection.connect();
	connection.query('INSERT INTO fixed_deposit SET ?', req.query, function(err, rows, fields) {
		if (err) throw err;
		// console.log('The solution is: ', rows[0].solution);
		connection.end();

		res.send(rows);
	});


});
app.get('/getfd',function(req, res) {
	connection.connect();
	connection.query('SELECT * FROM fixed_deposit', req.query, function(err, rows, fields) {
		if (err) throw err;
		// console.log('The solution is: ', rows[0].solution);
		connection.end();

		res.send(rows);
	});


});



var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

