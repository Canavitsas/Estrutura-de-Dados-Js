//Mais comum ver o reduce fazendo funções de agregação
//Reduce pode ser utilizado das 3 formas
var numeros = [1,2,6,3];
//12

var numeros = [1,2,6,3];
//Utilizando map [2,4,12,6]

var numeros = [1,2,6,3];
//Filter 
[6]

/*
array.reduce(callback[, valorInicial])
callback - Função que é executada em cada valor no array, recebe quatro argumentos:
acumulador - O valor retornado na última invocação do callback, ou o argumento Valor Inicial,se fornecido.
valorAtual - O elemento atual que está sendo processado no array.
indice - O índice do elemento atual que está sendo processado no array.
array - O array ao qual a função reduce foi chamada.
valorInicial - Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da
função callback.
*/

//----------------------------------------------------------------------------------------------

var valores = [1.5, 2, 4, 10]; 
//17.5

var calc = function(total, item){
    total = total + item;
    return total;
}

//Forma Simplificada
var calc = function(total, item){
    return total + item;
}

var somatoria = valores.reduce(calc);
console.log(somatoria);

//Teste de Mesa
var calc = function(total, item, indice){
    console.log(`T: ${total} I: ${indice} I: ${item}`)
    return total + item;
}

var somatoria = valores.reduce(calc,0);
console.log(somatoria); //Resultado = 17.5


//Iniciando com 1 
var calc = function(total, item, indice){
    console.log(`T: ${total} I: ${indice} I: ${item}`)
    return total + item;
}

var somatoria = valores.reduce(calc,1);
console.log(somatoria); //Resultado = 18.5


//---------------------Cálculo de média--------------------------
var valores = [1.5, 2, 4, 10]; 

var calc = function(total, item){
    return total + item;
}

var somatoria = valores.reduce(calc);
var media = somatoria/valores.length;
console.log(somatoria);
console.log(media);

//Outra forma de cálculo
var calc = function(total, item, indice, array){
    total = total + item;

    if(indice == array.length - 1){
        return total/array.length;
    }
    return total;
}

var media = valores.reduce(calc);
console.log(media);

//Outra forma 
var media = valores.reduce(function(total, item, indice, array){
    total = total + item;

    if(indice == array.length - 1){
        return total/array.length;
    }
    return total;
});
console.log(media);

//Usando Map e Reduce para o mesmo propósito
var valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var calc = function(item){
    return item * 2;
}

var dobrados = valores.map(calc); //MAP
console.log(dobrados);

//Por Reduce
var calc = function(total, item){
    total.push(item * 2)
    return total;
}

var dobrados = valores.reduce(calc, []);
console.log(dobrados);

//Com concatenação
var calc = function(total, item){
    return  total.concat(item * 2);
}

var dobrados = valores.reduce(calc, []);
console.log(dobrados);

//----------------Função de filter por reduce---------------------

var numeros = [10, 18, 1, 15];

var calc = function(total, item){
    if(item > 10){
        total.push(item);
    }
    return total;
}

var selecionados = numeros.reduce(calc, []);
console.log(selecionados);


//Forma Simplificada
var selecionados = numeros.reduce(function(total, item){
    if(item > 10){
        total.push(item);
    }
    return total;
}, []);

console.log(selecionados)
