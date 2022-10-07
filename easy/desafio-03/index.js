//Escreva uma função que recebe uma string. verifica se ela possui a mesma quantidade de cada letra que a compõe e retorna true caso possua ou false caso não possua

function compareCount(count, index, array) {
    return index !== 0 ? count === array[index - 1] : true
}

function checkBalance(str) {
    const charCount = {}

    for (let i = 0; i < str.length; i++) {
        const currentLetter = str[i]
        charCount[currentLetter] = charCount[currentLetter] ? charCount[currentLetter] + 1 : 1      
    }

    return Object.values(charCount).every(compareCount)
}

console.log(checkBalance('this is theh'))