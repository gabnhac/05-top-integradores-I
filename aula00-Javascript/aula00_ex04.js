// Função que recebe um objeto como argumento

function exibirInfoProdutos(produto){
    return `Produto: ${produto.nome}, Preço: ${produto.preco.toFixed(2)}, Estoque: ${produto.estoque} und`;
}

const product = {
    nome: "Maçã",
    preco: 4.456,
    estoque: 5
}
const product2 = {
    nome: "Abacaxi",
    preco: 7.87,
    estoque: 15
}

console.log(exibirInfoProdutos(product));
console.log(exibirInfoProdutos(product2));