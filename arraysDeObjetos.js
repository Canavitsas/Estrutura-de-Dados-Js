var nomes = ["Felipe", "Zezinho", "Fulano"];
var idade = [22, 40, 60];
var cpf = ["000.000.000-01", "000.000.000-02", "000.000.000-03"];


for( i = 0; i < nomes.length; i++){
    console.log(nomes[i] + " " + idade[i] + " " + cpf[i]);
}

// * CPF
// * Idade
// * ??

//-------------------------------------------------------------------------------------

var convidado1 = {nome: "Felipe", idade: 22, cpf: "000.000.000-01"};
var convidado2 = {nome: "Zezinho", idade: 40, cpf: "000.000.000-02"};
var convidado3 = {nome: "Fulano", idade: 60, cpf: "000.000.000-03"};

//--------------------------------------------------------------------------------------


convidados = [];

convidados.push({nome: "Felipe", idade: 22, cpf: "000.000.000-01"});
convidados.push({nome: "Zezinho", idade: 40, cpf: "000.000.000-02"});
convidados.push({nome: "Fulano", idade: 60, cpf: "000.000.000-03"});

console.log(convidados);


var convidado = {nome: "Pedro", idade: 21, genero: "Masculino", dataNascimento: {dia: 09, mes: 11, ano: 1999}, cpf: "000.000.000-01"};

console.log(convidado);
console.log(convidado.nome);
console.log(convidado.dataNascimento.dia);


//--------------------------------------------------------------------------------------

var convidado = {nome: "Pedro", idade: 21};

console.log(convidado);

delete convidado.idade;

console.log(convidado);

//--------------------------------------------------------------------------------------

var convidado1 = {idade: 21};
var convidado2 = convidado1;
var convidado3 = {idade: 21};


console.log(convidado1 == convidado2);  //true
console.log(convidado1 == convidado3);  //false


function deepEqual(x, y){

    //Primeiro verifica se x é identico a y
    if(x === y){
        return true;
    }

    //Caso x seja um objeto, y também seja um objeto e ambos não forem nulos, inicia a verificação profunda
    else if((typeof x == "object" &&  x != null) && (typeof y == "object" && y != null)){


        //Primeira estratégia é verificar a quantidade de propriedades com o método key
        if(Object.keys(x).length != Object.keys(y).length){
            return false;
        }

        //Caso seja a mesma quantidade inicia um loop em cada propriedade de x 
        for(var prop in x){
            hasOwnProperty
            //verifica se existe a mesma propriedade em y com o método hasOwnProperty
            if(y.hasOwnProperty(prop)){
                //caso exista a mesma propriedade utiliza o primeiro if na recursão para verificar se são idênticas

                if(!deepEqual(x[prop], y[prop])){
                    return false;
                }
            } else {
                //Caso não exista descarta o resto das propriedades
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}


var convidado1 = {idade: 21};
var convidado2 = convidado1;
var convidado3 = {idade: 21};

console.log(deepEqual(convidado1,convidado3));
console.log(deepEqual(convidado1, {idade: 21}));


//------------------------------------------------------------------------------------

var convidado = {nome:"Felipe", idade: 37};

console.log(convidado.nome);
console.log(convidado["nome"]);


//---------------------------------------------------------------------------------
//Acessa o Array diretamente pelo seu id sem necessidade do uso de for
var convidados = {};

convidados["Felipe"] = {idade:37};

convidados["ABC1234"] = {nome: "Felipe", idade:37};
convidados["XYZ456"] = {nome: "Bruno", idade: 21};

console.log(convidados);

console.log(convidados["ABC1234"]);


//--------------------------------------------------------------------------------------


function ola() {
    var mensagem = "Olá ";
    for(i = 0;i < arguments.length - 1;i++) {
    mensagem += arguments[i];
    if (i < arguments.length - 2){
    mensagem += ", ";
    }
    }
    mensagem += " e " + arguments[arguments.length - 1] + "! Tudo bem!?";
    console.log(mensagem);
   }
   ola("Felipe", "Gabriel", "Bruno", "Douglas");
   