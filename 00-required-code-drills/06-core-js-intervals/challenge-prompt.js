// Set the interval


// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Create an interval that console logs "Question 01" every 5 seconds

var interval01 = setInterval(function() {
    console.log("Question01");
}, 5000);

// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Create an interval that creates an alert that says "Question 02" every 10 seconds
var interval02 = setInterval(function() {
    console.log("Question02");
}, 10000);


// Clear the interval you made in this question

setTimeout(function() {
    clearInterval(interval02);
}, 25000);


// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Create an interval that appends "3" to the div with an id of "question-03"
// every 2 seconds
var intervalDisplay = $("#question-03"); 
var itnerval03 = setInterval(function() {
    intervalDisplay.append("3");
}, 2000);


// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Create an interval that empties the "#question-03" element every 6 seconds
var empty03Display = setInterval(function (){
    intervalDisplay.empty();
}, 6000);



// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Create an interval that appends "5" to the div with an id of "question-05"
// every second and clear this interval after 5 seconds
var interval05Display = $("#question-05");
var interval05 = setInterval(function() {
    interval05Display.append("5");
}, 1000);

var empty05Display = setInterval(function() {
    interval05Display.empty();
}, 5000);


// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Create an interval that appends "6" to the div with an id of "question-06"
// every second
var interval06Display = $("#question-06");
var interval06 = setInterval(function() {
    interval06Display.append("6");
}, 1000);



// Create a timer to clear the interval after 6 seconds

setTimeout(function() {
    clearInterval(interval06);
}, 6000);


// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// create a timer to clear the interval from question 1 after 10 seconds

setTimeout(function() {
    clearInterval(interval01);
}, 10000);



