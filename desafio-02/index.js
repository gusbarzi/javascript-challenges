//Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço "-" sem utilizar nenhuma estrutura de repetição

function chunks(num) {
    if(num === 0) {
        return ''
    }

    if (num === 1) {
        return 'chunk'
    } else {
        return 'chunk-' + chunks(num - 1)
    }
}

console.log(chunks(3));