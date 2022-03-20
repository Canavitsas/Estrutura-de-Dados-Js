
/*
Com o conhecimento de objetos em mãos construa um programinha de controle de convidados mais
elaborado, considerando as propriedades:
Nome
Idade
CPF
Permita que o cadastrante digite estas informações em nosso array de convidados
*/

var convidados = [];

while(true){

    var nome = prompt("Digite o nome do convidado");
    var idade = Number(prompt("Idade do convidado:"));
    var cpf = (prompt("CPF do convidado"));

    if(nome == "S"){

        break;
    }else{
        convidados.push({nome:nome, idade: idade, cpf:cpf})

    }
}


for(i=0; i<convidados.length; i ++){

    if(convidados[i].idade==20){
        console.log(convidados[i]);
    }

}
