var fs = require('fs');

fs.readFile('server.js', 'utf-8', function(error, data){
	console.log('01 readAsync:%s',data);
});

var data = fs.readFileSync('server.js', 'utf-8');
console.log('02 readSync:%s',data);
