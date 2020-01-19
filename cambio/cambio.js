function converter_dolar_para_real(qtd) {
  var cotacao = 4.16;
  var conversao = qtd * cotacao;
  return conversao;
} 

var resultado = converter_dolar_para_real(10);

console.log("Valor convertido: " + resultado);

