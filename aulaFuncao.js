var soma = function(x,y){
    return x + y;
}

var sub = function(x,y){
    return x - y;
}

var mult = function(x,y){
    return x * y;
}

var div = function(x,y){
    return x / y;
}

var calculadora = function(x, y, operacao){
    return operacao(x,y);
}
    
calculadora(15,10,mult);

//Formas de declarar Funções
var f1 = function(){
    console.log("Olá");
}

function f1(){
    console.log("Olá");
}

//Desafio calculadora
var soma = function(x,y){
    return x + y;
}

var calculadora = function(x, y, operacao){
    return operacao(x,y);
}

calculadora(x = Number(prompt("Entre com o valor de x: ")),y = Number(prompt("Entre com o valor de y: ")),soma);

//Desafio calculadora ideal
function soma(x,y){
    return x + y;
}

var n1 = Number(prompt("Entre com o valor do primeiro número"));
var n2 = Number(prompt("Entre com o valor do segundo número"));

console.log(soma(n1,n2));