var nomes = [];
var quantConvidados = Number(prompt("Digite o número de convidados"));

for(i = 0; i<quantConvidados; i++){
    nomes[i] = prompt("Digite o nome do convidado" + i);
}
//-------------------------------------------------------------------
var nomes = ["Felipe","Douglas","Joao"];
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);

//--------------------POP--------PUSH--------------------------------
var nomes = ["Ana"];

nomes.push("Felipe");
nomes.push("Carlos");
var removidos = nomes.pop();
nomes.push("Pedro");
console.log(nomes);
console.log(removidos);

//-------------------------------------------------------------------

var nomes = ["Felipe","Douglas","Joao"];

    console.log(nomes.length);

for(i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

//-------------------------forEach--------------------------------------

var nomes = ["Felipe", "Douglas", "Joao"];
nomes.forEach(function(nome, indice){
    console.log(indice + "-" + nome);
});

var nomes = ["Felipe", "Douglas", "Joao"];
var callback = function(nome){
    console.log(nome);
}

nomes.forEach(callback);

//-------------------------UNSHIFT------------------------------------

var nomes = ["Felipe", "Douglas"];   
nomes.unshift("Bruno");
console.log(nomes);

//--------------------------SHIFT--------------------------------------

var nomes = ["Bruno","Felipe", "Douglas"];   
nomes.shift();
console.log(nomes);

//----------------------------SPLICE----------------------------------
//array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
//Se colocar apenas o índice ele vai cortar dali para frente(Deixar só Bruno)

var nomes = ["Bruno","Felipe", "Douglas","Ana"];   
nomes.splice(1, 2, "Zeze","Fulano");
console.log(nomes);

//---------------------IndexOf--------------------------------------

var nomes = ["Bruno","Zeze","Fulano","Douglas"];
var busca = "Fulano";
var indice = -1;

for(i = 0; i < nomes.length; i++){
    if(nomes[i]==busca){
        indice = i;
        break;
    }
}

console.log("Encontrei o " + busca + 
" em: " + indice);


//Uso do indexOf
var nomes = ["Bruno","Zeze","Fulano","Douglas"];
var busca = "Fulano";
var indice = nomes.indexOf(busca);

console.log("Encontrei o " + busca + 
" em: " + indice);

//----------------------Trabalhando com String----------------------

var mensagem = "Plá";
console.log(mensagem[0]);


var mensagem = "Plá";
for(i = 0; i < mensagem.length; i++){
    
    console.log(mensagem[i]);
}

//-----------------------------------Desafio---------------------------------------
var numeros = [];
var media;
var soma = 0;
var quantNum = Number(prompt("Digite quantos numeros irá inserir para média"));

for(i=0; i<quantNum; i++){
    numeros[i] = Number(prompt("Digite o número desejado"));
}

for(i=0; i<numeros.length; i++){
   soma = soma + numeros[i]; 
}

media = soma/numeros.length;

console.log(media);
console.log(numeros.length);