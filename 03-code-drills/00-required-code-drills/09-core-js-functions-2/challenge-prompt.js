// define a function "warble" that takes in a string as an argument,
// appends " arglebargle" to the end of it, and returns the result
 function warble(str) {
     var argle = str + "arglebargle";
     return argle; 
 }



// console log the result of calling your "warble" function with the argument "hello"
console.log(warble(hello));


// define a function "wibble" that takes a string as an argument,
// console logs the argument, prepends "wibbly " to the argument, and returns the result

function wibble(str) {
    console.log(str);
    var wibble = str + "wibbly"
    return wibble;
}


// console log the result of calling your "wibble" function with the argument "bibbly"
console.log(wibble("bibbly"));



// define a function "consoleSum" that takes in two numbers as arguments
// and console logs the sum of those two numbers

function consoleSum(x, y) {
    var numSum = (x + y);
    console.log(numSum);


}



// testing your function - un-comment the following two lines when you have finished your function

console.log("The following should be 5");
consoleSum(2, 3);

// define a function "returnSum" that takes in two numbers as arguments
// and returns the sum of those two numbers
function returnSum(x, y) {
    var numSum = (x + y);
    return numSum;


}



// testing your function - un-comment the following two lines when you have finished your function

console.log("The following should be 12");
console.log(returnSum(5, 7));

// using either "consoleSum" or "returnSum" and no mathematical operators,
// define a function that takes in 3 arguments and finds the sum of those 3 numbers

function threeSum (x, y, z) {
    var twoSum = consoleSum(x, y)
    consoleSum(twoSum, z);
}



// define a function "danceParty" that takes in a string as an argument,
function danceParty(str) {

// creates an alert that says "dance!",
alert("dance!");
// saves the result of calling your "wibbly" function with that argument,
var wibbleRes = wibbly(str);
var warbleRes = warble(str);
// saves the result of calling your "warble" function with that argument,
// concatenates the two results together and returns that string

return wibbleRes + warbleRes;
}




// console log the result of calling your "danceParty" function with your name as the argument

danceParty("Liam");
