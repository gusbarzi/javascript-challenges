//escrava uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços

function highestLetter(str) {
    //const sortedArray = str.toLowerCase().split('').sort();

    const lowerCaseString = str.toLowerCase();
    const letterArray = lowerCaseString.split('');
    const sortedArray = letterArray.sort();

    return sortedArray[sortedArray.length - 1];
}

console.log(highestLetter('Today is a good day for die'));