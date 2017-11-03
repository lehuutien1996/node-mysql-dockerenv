var http = require('http');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'db',
    user     : 'tien',
    password : 'tien',
    database : 'test_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});


var port = 3000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port);

console.log('Server running at http://localhost:' + port);




