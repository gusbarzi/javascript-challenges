//Escrava uma função que recebe uma string e retorna cada palavra da string invertida e em letras minúsculas, porém, com as palavras na mesma ordem. Asssuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços

function invert(str) {
    const wordsArray = str.split(' ')
    const invertedWords = wordsArray.map((word) => {
        const lowerCaseWord = word.toLowerCase();
        return lowerCaseWord.split('').reverse().join('');
    })

    return invertedWords.join(' ');
}

console.log(invert('Today is a good day for die'))