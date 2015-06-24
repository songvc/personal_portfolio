var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);
var path = require('path');

var dist = path.join(__dirname,'/dist')

app.use(express.static(dist));

app.get('/', function(req, res){
    res.sendFile(dist + '/index.html');
});

var port = process.env.PORT || 3000
app.listen(port, function(){
	console.log('Express server started on port %s', port);
});


