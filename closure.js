// function(){
//     const number = number++;
//     return number;
// }


function stopWatch(){
    let number = 0;
    return function(){
        number++;
        return number;
    }
}

const clock1 = stopWatch();
console.log(clock1());