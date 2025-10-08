// A function is a reusable block of code that you an represent with a name.

x = 1

function addOne(){
    x = x + 1
}

addOne()
addOne()
addOne()
addOne()
addOne()

function addTwo(){
    x = x + 2
}
addTwo()
addTwo()

function convertXtoPounds(){
    x = x * 2.2
}
convertXtoPounds()

console.log(x);

// Arguments 

let myHeight= 170
let friendHeight= 175

function convertCmToFeet(height){
    return height / 30.48
}   

// console.log("My height in feet is " + convertCmToFeet(myHeight));
// console.log("My friend's height in feet is " + convertCmToFeet(friendHeight));

myHeightInFeet = convertCmToFeet(myHeight)

console.log("My height in feet is " + myHeightInFeet);