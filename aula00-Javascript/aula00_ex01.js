//Exemplo 01
//Usando var (escopo global/função)

var nome = "Gabriel";
console.log(nome);
nome = 33;
console.log(nome);

if(true){
    var nome = "Maria";
    console.log(nome);
}

console.log(nome);

//Usando escopo de bloco

let idade = 21;
console.log(idade);
idade = "Ola";
console.log(idade);

if(true){
    let idade = 25
    console.log(idade);
}

console.log(idade);

//Usando const (escopo de bloco e valor constante)

const PI = 3.14;
console.log(PI);
PI = 4.190;
console.log(PI);

if(true){
    const PI = 4.14;
    console.log(PI);
}

console.log(PI);
