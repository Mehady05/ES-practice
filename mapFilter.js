const numbers = [2, 3, 5, 6, 8, 4, 8, 7, 9, 8, 9, 7];
const outPut =[];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     outPut.push(result);
// }

// function suare(element){
//     return element * element;
// }

// const square = element => element * element;


// var result = numbers.map(function (element){
//     return element * element
// })

// var result = numbers.map(element => element * element)
// console.log(result)



// filrer work 

// const result = numbers.filter(x => x > 5);
// console.log(result)

// const result = numbers.filter(x => x < 5);
// console.log(result)

const result = numbers.find(x => x > 5);
console.log(result)


