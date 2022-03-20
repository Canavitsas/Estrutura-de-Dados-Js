//Filter + Map
var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];

var pares = function(item){
    return !(item % 2);
}

var dobrados = function(item){
    return item * 2;
}

var numerosDobrados = numeros.filter(pares).map(dobrados);
console.log(numerosDobrados);

//Filter + Map + Reduce

var carros = [{marca: 'Audi', cor: 'preto'},
              {marca: 'Audi', cor: 'branco'},
              {marca: 'Ferrari', cor: 'vermelha'},
              {marca: 'Ford', cor: 'branco'},
              {marca: 'Peugeot', cor: 'branco'}];

        
function groupBy(array, prop){
    var value = array 
}

function groupBy(array, prop){
    var value = array.reduce(function(total, item){
        var key = item[prop]; //item.marca (Audi)
        total[key] = (total[key] || []).concat(item);
        return total;
    }, {}); 
    return value;
}

var agrupados = groupBy(carros, 'marca');
console.log(agrupados);


//-----------------------------------------------------------

var produtos = [
    {id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
    {id: 456, nome: 'Tênis', cor: 'preto', tamanho: '41', categoria: 'Vestuário'},
    {id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria: 'Esporte'},
    {id: 780, nome: 'Shorts', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'}
];


Array.prototype.groupBy = function(prop){
    var value = this.reduce(function(total, item){
        var key = item[prop]; 
        total[key] = (total[key] || []).concat(item);
        return total;
    }, {}); 
    return value;
}

var produtosFiltrados = produtos.filter(function(item){
    return item.cor == 'preto';
}).filter(function(item){
    return item.tamanho == 'G';
}).groupBy('categoria');

console.log(produtosFiltrados);



//Desafio

Array.prototype.groupBy = function(prop){
    var value = this.reduce(function(total, item){
        var key = item[prop];
        total[key] = (total[key] || []).concat(item);
        return total;
    }, {});
    return value;
}

var convidados = [
    {nome:'Ana', sexo:'Feminino', idade:22},
    {nome:'João', sexo:'Masculino', idade:20},
    {nome:'Nicolas', sexo:'Masculino', idade:17},
    {nome:'Maria', sexo:'Feminino', idade:18},
    {nome:'Joana', sexo:'Feminino', idade:25}
];

var convidadosFiltrados = convidados.sort(function(x, y){
    return (x.nome > y.nome) ? 1 : -1;
}).filter(function(item) {
    return item.idade >= 18;
   }).groupBy('sexo');

console.log(convidadosFiltrados);
    

