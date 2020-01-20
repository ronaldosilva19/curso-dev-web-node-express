// como o múdulo express foi instalado com o npm e armazenado na pasta "node_modules"
// não é nescessário informar o caminho da pasta do módulo

var express = require("express")
var app = express();
// Uma boa prática é transformar a variável express em uma constante 
//const express = require("express")

// Listen precisa ser a última linha do seu código
console.log("Aplicação rodando na porta 8084");
app.listen(8084);



