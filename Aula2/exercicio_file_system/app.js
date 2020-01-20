var fs = require('fs');
fs.open('meu_arquivo.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

