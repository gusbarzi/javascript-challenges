//escrava uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços

const numbers = [4, 5, 2, 3, 1]
const numbers1 = [4, 5, 2, 3, 1]
const numbers2 = [4, 5, 2, 3, 1]
numbers.sort(function (b, a) {
    return a - b;
})
numbers1.sort(function (a, b) {
    return a + b;
})
numbers2.sort(function (a, b) {
    return a = b;
})

//console.log(numbers)
//console.log(numbers1)
//console.log(numbers2)

const highestLetter = (str) => {
    const lowerCaseString = str.toLowerCase();
    const lettersArray = lowerCaseString.split('');
    const sortedArray = lettersArray.sort();
    return sortedArray[sortedArray.length - 1]
}

const highestLetter2 = (str) => {
    const sortedArray = str.toLowerCase().split('').sort();
    return sortedArray[sortedArray.length - 1]
}

console.log(highestLetter('Today is a good day for die'));
console.log(highestLetter2('A morte e como vento, esta sempre ao seu lado'));