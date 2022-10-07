//Escrava uma função que recebe uma string e retorna cada palavra da string invertida e em letras minúsculas, porém, com as palavras na mesma ordem. Asssuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços

const invert = (str) => {
    const wordsArray = str.split(' ')
    const invertedWords = wordsArray.map((word) => {
        const lowerCaseWords = word.toLowerCase();
        return lowerCaseWords.split('').reverse().join('')
    });

    return invertedWords.join(' ')
}

const invertWord = (word) => {
    return word.split('').reverse().join('')
}

const invert2 = (str) => {
    return str.toLowerCase().split(' ').map(invertWord).join(' ')

    
}

console.log(invert('Today is a good day for die'))