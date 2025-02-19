const numeros = [1,2,3,4,5,6];

numeros.forEach((numero) => {
    console.log(numero)
});

const dobrados = numeros.map(num => num*2);
console.log(dobrados);

const impares = numeros.filter(item => item%2 !== 0 );
console.log(impares);

const maiorQue9 = dobrados.find(item => item > 9);
console.log(maiorQue9);

const todosMaioresQue2 = dobrados.every(item => item > 2);
console.log(todosMaioresQue2);

const algumMaiorQue12 = dobrados.some(item => item > 12);
console.log(algumMaiorQue12);