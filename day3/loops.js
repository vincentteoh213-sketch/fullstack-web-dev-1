// loops basically mean you keep doing something similar/same until a condition tells you to stop.

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

let x = 0
// while(x < 5){
//     console.log(x);
//     x = x + 2;
//     // x += 2; // This is the same as x = x + 2
// }   


do{
    console.log(x);
    x += 2
}while(x < 5)


    // For EACH loop

    let arrayofNumbers = [1,2,3,4,5,6,7,8,9,10]

    arrayofNumbers.forEach(number => {
        console.log(number);
    });