// User Input and Writing to DOM 1



// Declare a variable `userName`

var username;
// Prompt the user for their name and store their response into `userName`
// hint: use javascript's built in `prompt` method

var username = prompt("whats your name?");


// Create an alert welcoming the user to the "Sandwich Shop" using the name they just gave us
alert("welcome " + username)


// Using the `confirm` method, ask the user if they would like a sandwich
wantsSandwich = confirm("wanna sammich?")
// Store their response into a new `wantsSandwich` variable



// Check if the user wanted a sandwich


    // If the user did want a sandwich, use the `document.write` method to write "Your sandwich will be ready soon!" to the DOM

    if (wantsSandwisch) {
        document.write("itll be out soon")
    }
    else {
        document.write("goodbye" + username)
    }
// Else, say goodbye to the user using the name they gave us earlier



