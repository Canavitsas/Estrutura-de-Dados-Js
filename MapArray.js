var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var multiplica = function(item){
    return item * 2;
}

var dobrados = numeros.map(multiplica);
console.log(dobrados);

//---------Forma Simplificada---------------
var dobrados = numeros.map(function(item){
    return item * 2;
});

console.log(dobrados);

//--------------------------------------------------
var fahrenheit = [0, 32 , 45, 46, 47, 91, 93, 121];

var celcius = fahrenheit.map(function(item){
    return Math.round((item - 32)*5/9);
});

console.log(celcius);
//---------------------------------------------------
var convidados = [
    {nome: "felipe", vip:false, idade: 21}, 
    {nome: "danIEL", vip: true, idade: 32},
    {nome: "João", vip: true, idade: 60}
];

var convidadosNormalizados = convidados.map(function(item){
    return Object.assign(item, {nome: item.nome.toUpperCase()});
});

console.log(convidadosNormalizados);