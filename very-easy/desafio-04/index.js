//Escreva uma função que recebe um número inteiro qualquer, eleve ao quadrado cada um de seus algarismos e depois concatene o resultado retornando um único número inteiro

const inSquare = (num) => {
    const str = num.toString();
    const result = ""

    for (let i = 0; i < str.length; i++) {
        result += Math.pow(Number(str[i]), 2).toString();
    }
    
    return Number(result);
}

const square = (num) => {
    const digitsArray = num.toString().split(' ');
    const squaredArray = digitsArray.map(digit => {
       return Number(digit) ** 2
    })
}


function squareDigits(num) {
    const digitsArray = num.toString().split('')
    return Number(digitsArray.map(number => number ** 2).join(''))
  }

console.log(squareDigits(456))