//Escreva uma função que recebe um número inteiro qualquer, eleve ao quadrado cada um de seus algarismos e depois concatene o resultado retornando um único número inteiro

/* Primeira forma de resolver o desafio
function square(num) {
    const str = num.toString();

    let result = '';

    for (let i = 0; i < str.length; i++) {
        result += Math.pow(Number(str[i]), 2).toString()
    }

    return Number(result);
}
*/

function square(num) {
    const digitsArray = num.toString().split('');
    const squareArray = digitsArray.map(digit => Number(digit) ** 2).join('')

    return Number(squareArray)
}

console.log(square(3514))