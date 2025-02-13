//Exemplo 03: Classes

class Animal {
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    exibirInformacoes(){
        return `Ese é um ${this.tipo} chamado ${this.nome}`;
    }
}

const cachorro = new Animal("Husky", "Cachorro");
const gato = new Animal("Zeca", "Gato");

console.log(cachorro.exibirInformacoes());
console.log(gato.exibirInformacoes());

class Produto{
    constructor(nome, preco, tipo){
        this.nome = nome;
        this.preco = preco;
        this.tipo = tipo;

    }

    exibirInformacoes(){
        return `Esse é um ${this.tipo} da marca ${this.nome} e custa ${preco}`;
    }
}