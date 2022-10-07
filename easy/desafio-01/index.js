//Escreva uma função que recebe um array bidemensional de inteiros e retorna um único array contendo todos os números em ordem ascendete

function flatAndSort(arr) {
    const numbers = [];

    arr.forEach(list => {
        numbers.push(...list)
    });

    return numbers.sort((a, b) => a - b);
}