//Escreva uma função que recebe um número quqlquer de números inteiros como argumento e retorne a média aritmética entre eles

function mediaAcademia(...numbers) {
   const sum = numbers.reduce((acc, num) =>  acc + num, 0)

    return sum / numbers.length;
}

function avarage(numbers) {
    let sum = 0

    numbers.forEach((num) => {
        sum += num;
    })

    const avarage = sum / numbers.length;

    return avarage;
}

const mediaAcademy = (numbers) => {
    const sum = numbers.reduce((acc, num) => {
       return acc + num
    });

    return sum / numbers.length

}

function mediaArray(numbers) {
    sum = 0

    numbers.forEach((num) => {
        sum += num;
    })

    return sum / numbers.length; 
}


const mediaArr = (numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num);

    return sum / numbers.length;
}
console.log(mediaArray([1, 2, 4, 5])) 