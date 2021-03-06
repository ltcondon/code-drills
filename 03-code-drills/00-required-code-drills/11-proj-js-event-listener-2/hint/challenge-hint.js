// declare a variable for the array we're storing the history of user key presses 
// into and assign it to an empty array

var pressedKeys = [];

// declare a variable that is a string of all 26 lowercase letters in the english alphabet
var letters = "abcdefghijklmnopqrstuv";

// we can use a string in this situation because we're only checking against individual characters
// if we were to have to validate non-alphanumeric characters, we would have to use an array


// create a key press listener

document.onkeypress(function(event) {
  var keyPress = event.key;
  keyPress = keyPress.toLowercase();



  // store the key the user pressed into a variable and
  // change it to lower case to make our logic not case sensitive

  if (letters.includes(keyPress)) {

  
  // create an if statement that checks whether the key is part of our alphabet

    // if the key is part of the alphabet, set the text value of div on our webpage we're 
    // using to display thecurrent key to that key
    document.getElementById("user-key").textContent = keyPress;

    // also store the key into the array we declared at the top of the file
    pressedKeys.push(keyPress);

    // finally set the text value of the key press history div to the array
    document.getElementById("user-history").textContent = userHistory;
  }
   else {

  // if the key is not part of our alphabet, change the current key div to ask the user to press
  // a key that's a letter within our alphabet

  document.getElementById("user-key").textContent = "not letter";
   }
  
  })

