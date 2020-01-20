var express = require("express");
var app = express();
var path = __dirname + '/views/';

app.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.get("/sobre",function(req,res){
  res.sendFile(path + "sobre.html");
});

app.listen(3001,function(){
  console.log("Live at Port 3001");
});