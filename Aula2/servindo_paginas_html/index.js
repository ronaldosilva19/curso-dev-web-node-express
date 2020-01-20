var express = require('express');
var app = express();
var path = __dirname + '/views/';

app.get('/', function (req, res) {
  res.sendFile(path + "index.html");
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

