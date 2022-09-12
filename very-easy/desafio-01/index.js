//Escreva uma função que recebe um número quqlquer de números inteiros como argumento e retorne a média aritmética entre eles

function mediaAcademia(...numbers) {
   const sum = numbers.reduce((acc, num) =>  acc + num, 0)

    return sum / numbers.length;
}

console.log(mediaAcademia(10, 9, 6, 8, 9, 1, 5, 7));