//Exemplo 2 
// Funções simples

function saudacao(nome){
    return `Olá, ${nome}!`;
}

console.log(saudacao(34));

//Função anônima

const soma = function(a,b){
    return a + b;
}

console.log(soma("Gabriel ",6));

//Arrow Function

const multiplicacao = (x,y) => x * y

console.log(multiplicacao(6,7));

//Objeto em JS

const pessoa = {
    nome: "Gabriel",
    idade: 21,
    email: "123@gmail.com",
    usuario: "aluno",
    saudar: function(){
        return `Oi, meu nome é ${this.nome} e eu sou um ${this.usuario}.`;
    }
}

console.log(pessoa.usuario);
console.log(pessoa.saudar());

