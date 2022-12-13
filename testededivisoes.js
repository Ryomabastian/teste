var prompt = require('prompt-sync')();

const digito = prompt("Digite um numero de 3 digitos: " )
let array = [1]
let tamanho = digito.length;

for (var i=1; i<digito.length; i++){

    array.push(0)

}
console.log(array)

let teste = array.join("");
teste = Number(teste);



//para o primeiro dígito só dividir pela quantidade de digitos por 100
let a = parseInt(digito /teste);

//para o ultimo digito só pegar o resto de 10
let b = parseInt(digito % 10);

//para o numero do meio tem que dividir por 10 e depois pegar o resto de 10.
let c = parseInt(digito /10);
let d = parseInt(c%10)

console.log(a, b, d, tamanho, teste);

