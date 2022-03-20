var numeros = [10, 18, 1, 15];
var resultado = [];
for(i = 0; i <numeros.length; i++){

    if(numeros[i] > 10){
        resultado.push(numeros[i]);
    }
}

console.log(resultado);

//---------------------------------
var numeros = [10, 18, 1, 15];

var maiorQue10 = function(item){
    return item > 10;
}
var novosNumeros = numeros.filter(maiorQue10);
console.log(novosNumeros);

//Passando diretamente a função

var numeros = [10, 18, 1, 15];

var novosNumeros = numeros.filter(function(item){
    return item > 10;
});

console.log(novosNumeros);
//--------------------------------------------------------
//Filter com dados de texto

/*
var nome = "Felipe";
nome[0];
nome.charAt(0);
*/
var nomes = ["Felipe", "Zezinho", "Fulano", "Douglas"]; 

var filtrarNomes = function(item){
    if(item.charAt(0) == "Z"){
        return true;
    } else{
        return false;
    }
}

var convidados = nomes.filter(filtrarNomes);
console.log(convidados);

//Modo mais limpo função
var convidados = nomes.filter(function(item){
    return item.charAt(0) == "Z";
});

console.log(convidados);

//Filtrar numeros pares e impares

var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];

var pares = function(item){
    return !(item % 2);
}

var impares = function(item){
    return item % 2;
}

var numerosPares = numeros.filter(pares);
var numerosImpares = numeros.filter(impares);

console.log(numerosPares);
console.log(numerosImpares);

//------------------------Filter com objetos--------------
var filmes = [
    {titulo: "Titanic", duracao: 195, nota: 7.5},
    {titulo: "The Avemgers", duracao: 203, nota:9.5},
    {titulo: "Bean", duracao: 90, nota: 6.5}
]

var notaCorte = 8;

var bons = function(item){
    return item.nota >= notaCorte;
}

var ruins = function(item){
    return item.nota < notaCorte;
}

var filmesBons = filmes.filter(bons);
var filmesRuins = filmes.filter(ruins);

console.log(filmesBons);
console.log(filmesRuins);

//-----------------------Lista VIP---------------
var convidados = [
    {nome: "Daniel", vip: true, idade: 21},
    {nome: "Gabriel", vip: true, idade: 54},
    {nome: "Felipe", vip: false, idade:37}
]

var filtraVip = function(item){
    return item.vip;
    }

var vips = convidados.filter(filtraVip);
console.log(vips);    