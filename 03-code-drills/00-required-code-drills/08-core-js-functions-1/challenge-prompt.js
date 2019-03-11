// define a function "fun" that console logs "Functions are FUN!"

function fun() {
    console.log("functions sare FUN!");

}

// before moving on, open index.html and see what console logs have been made.
// why doesn't "Functions are FUN! appear yet?"
/*

Your Answer here

we have not called the function
*/



// define a function "thirtySeven" that console logs the sum of 18 and 19

function thirtySeven(){
    console.log(18+19);
}


// call two functions you've defined so far
thirtySeven();
fun();


// define a function "log" that takes in an argument and console logs that argument

function log(arg) {
    console.log(arg);
}


// define a function "hello" that calls on the "log" function to console log "Hello World"

function hello() {
    log("hello world");
}

// call your "hello" function

hello();
// define a function "popUp" that creates an alert that says "This is an alert."

function popUp() {

alert("alert")
}

// define a function "noPopUp" that creates an alert that says "Okay, you won't get a pop up."

function noPopUp() {
    alert("no pop up for u")
}

// define a function "goodDay" that creates a confirm dialogue asking the user if they are having a nice day
// and uses your "log" function to display the response

function goodDay() {
    log(confirm("having good day?"));
    
}

// call your "goodDay" function
goodDay();


// define a function "userPopUp" that creates a confirm dialogue asking the user if they would like a popup
// if they answer yes, call upon your "popUp" function; otherwise, call upon your "noPopUp" function
function userPopUp() {
var popUp = confirm("pop up?");

if (popUp) {
    popUp();
}

}


// call your "userPopUp" function
userPopUp()

// define a function "userName" that prompts the user for their name and then 
// uses your "log" function to display the response

function userName() {
    log(prompt("ur name is..."));
}

// call your "userName" function
userName();


// define a function "favoriteFruit" that prompts the user for their favorite fruit
// and the creates an alert that displays the response

function favoriteFruit() {
    var fruit = prompt("ur fruit?")
    alert(fruit);
}

// call your "favoriteFruit" function
favoriteFruit()


