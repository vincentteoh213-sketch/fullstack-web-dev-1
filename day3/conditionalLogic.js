let x = 500

console.log(x === 7); // true

// == Checks for value only
// === Checks for value and data type

// >, <, Larger than, Smaller than
// >=, <= Larger than or equal to, Smaller than or equal to

//Operators

// Comparison Operators

if(x > 5){
    console.log("x is larger than 5");
}else{
    console.log("x is smaller than or equal to 5");
}

if(x > 700){
    console.log("x is larger than 700");
}else if(x > 400){
    console.log("x is smaller than or equal to 700 but larger than 400");
}else{
    console.log("x is smaller than or equal to 400");
}

//LOGIC GATES

// && AND GATE
// || or GATE
// ! NOT GATE

age = 10;
weight = 70;

if(age < 25 && weight > 50){
    console.log("Overweight for this age");
}else{
    console.log("Not overweight for this age");
}

let money = false
let vip = false
if(money === true || vip === true){
    console.log("Welcome to the club");
}else{
    console.log("Get out of here");
}

let y = 8

if(!(y = 8)){
    console.log("y is larger 8");
}else{
    console.log("y is not larger 8");
}   