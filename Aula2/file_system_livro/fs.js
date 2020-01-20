var fs = require('fs');

fs.readFile('livros.txt', 'utf8', function(err, data) {
	console.log(data);
});

