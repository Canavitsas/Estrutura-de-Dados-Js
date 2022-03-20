//Ex de atingir limite de Stack 

function galinha(){
    return ovo;
}

function ovo(){
    return galinha();
}

console.log(galinha() + "veio primeiro");


//
function potencia(base, expoente){
    if(expoente == undefined){
        expoente = 2; //Define o expoente padrão 
    }

    var resultado = 1;
    for (var cont = 0; cont<expoente; cont++){
        resultado *= base;
    } 
    return resultado;
}

console.log(potencia(2));
console.log(potencia(2,3));