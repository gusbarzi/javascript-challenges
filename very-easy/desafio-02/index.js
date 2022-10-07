//Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço "-" sem utilizar nenhuma estrutura de repetição

function chunks(num) {
    if(num === 0) {
        return ''
    }
    return num === 1 ? 'chunk' : 'chunk-' + chunks(num - 1)
}

const chunk = (num) => {
    if(num === 0) {
        return ''
    }

    if(num === 1) {
        return 'chunk'
    } else {
        return 'chunk-' + chunk(num - 1)
    }
}

const chun = (num) => {
    if(num === 0) {
        return ''
    } return num === 1 ? 'chunk' : 'chunk-' + chun(num - 1)
}

console.log(chun(10));

