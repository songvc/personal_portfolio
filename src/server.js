var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);

app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 3000
app.listen(port, function(){
	console.log('Express server started on port %s', port);
});


