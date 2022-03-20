var fatorial = Number(prompt("Digite o numero fatorial"));

var resultado = fatorial;

for(var i = fatorial - 1; i > 1; i --){
    resultado *= i;
}

console.log(resultado);



//Função Recursiva Desafio
function calcularFatorial(fatorial){

    if(fatorial==1){
        return resultado = 1;
    }
    else{
    var resultado = fatorial*calcularFatorial(fatorial-1);
    }
    
    return resultado;
}

console.log(calcularFatorial(6));