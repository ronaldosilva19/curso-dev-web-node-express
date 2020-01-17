var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

app.use("/",router);

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.listen(3001,function(){
  console.log("Live at Port 3001");
});