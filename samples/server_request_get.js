var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(request, response){
	var parsedUrl = url.parse(request.url);
	console.log(parsedUrl);

	var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
	console.log(parsedQuery);

	response.writeHead('200', {'Content-Type':'text/html'});
	response.end('a = ' + parsedQuery.a);
});

server.listen(5050, function(){
	console.log('server running...');
});
