// `this` jQuery Business

// The README.md has instructions for this exercise


// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
  // Your code goes here

  var helloBtn = $("<button>");
  helloBtn.text("hello");
  helloBtn.attr("data", "hello");

  var worldBtn = $("<button>");
  worldBtn.text("world");
  worldBtn.attr("data", "world");

  var clearBtn = $("<button>");
  clearBtn.text("clear");
  clearBtn.attr("data", "clear");


  $("#buttons-area").append(helloBtn, worldBtn, clearBtn);
  
  var userBtn = $("<button>");
  userBtn.text("display");
  userBtn.attr("id", "user-btn")
  userBtn.attr("data", "");

  $("#user-button-area").append(userBtn);

  // End of your code area
}

// This is jQuery shorthand to a document.ready
// This tells our javascript to wait until the page has finished 
// loading before running the code.
$(function () {

  // call on the populateButtons functions we defined above.
  populateButtons();

  // This is the key press listener that saves the key the user pressed.
  // Refer to step 4 on the README
  document.onkeyup = function(event) {
    // Your code goes here

    var lettersTyped = $("#user-button").attr("data");
    lettersTyped += $(this).val();

    $("#user-button").attr("data", lettersTyped);


    // End of your code area
  }

  // One click listener for all our buttons. You're going to have to figure out
  // which button was clicked and handle the logic for that button inside here
  // Refer to step 3 on the README
  $(document).on("click", "button", function (event) {
    // Your code goes here

    if ($(this).attr("data", "hello") || $(this).attr("data", "world")) {
      $("#output").append($(this).attr("data"));
    }
    $("#output").append(lettersTyped);

    // End of your code area
  })

})
