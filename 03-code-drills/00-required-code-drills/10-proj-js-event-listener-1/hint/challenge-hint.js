// declare the variable we're storing the confirm dialogue in

var message;

// create a key press listener
document.onkeypress(function(event) {
  var keyPress = event.key;
  keyPress = keyPress.toLowercase();

})

  // store the key the user pressed into a variable so we can 
  // refer to it easier in this function and
  // change it to lower case to make our logic not case sensitive


  // console log the key that the user pressed
  console.log(keyPress);


  // check whether the user pressed the "h" key
if (keyPress === 'h') {

  message = confirm();
}
    // create a confirm dialogue when they do and store the response from that
    // dialogue into the variable we declared outside the event listener



  // check whether the user pressed the "k" key
    // check whether the user had answered true to the previous confirm dialogue
    // display the corresponding alert dialogue
    if (keyPress === 'k' && message) {

      alert(message);
    }
