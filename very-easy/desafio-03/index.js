//Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas do original sem alterá-lo. Não utilize os métodos do objeto global Array do javascript (reverse, map, foreach, etc)


function reverse(arr) {
    const reversedArray = [];
    
    for(let i = 0; i < arr.length; i++) {
        reversedArray[i] = arr[arr.length - 1 - i];
    }

    return reversedArray;
}

//console.log(reverse([1, 2, 3]))