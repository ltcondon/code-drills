// require inquirer

var inquirer = require("inquirer")

// define our initial quotes

var quotes = [
  {
    author: "Theon Greyjoy",
    quote:"What is dead may never die",
  },
  {
    author: "Michael Scott",
    quote:"'You miss 100% of the shots you don't take' - Wayne Gretzky",
  }];

// call on the function that displays our main menu

beginPrompt()

// define a function that displays the main menu

function beginPrompt() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["Add Quote", "Display Quote", "Exit"],
      name: "action"
    },
  ]).then(function(res) {


  // prompt the user to choose between three options
  
    switch(res.action) {

    // depending on the user selection, 

    case("Display Quote"):
      // call on a function to show the quotes
      showQuotes();
      break;
    case("Add Quote"):
      // call on a function to add a new quote
      addQuotes();
      break;
      // exit the application by not calling on any functions
    }
    console.log("Bye then.")
    return;
  }) 
}


// define a function that will show the user all the quotes to choose from

function showQuotes() {
  
  // create a new array of all the authors of the quotes to use for the user prompt

var authors = [];
for (var i = 0; i < quotes.length; i++) {
  authors.push(quotes[i].author);
}

  // ask the user to choose which author's quote they want to see

inquirer.prompt([
  {
    type: "rawlist",
    message: "Select an author to view their quotes.",
    choices: authors,
    name: "author"
  }

    // find the quote by the chosen author and display it
  ]).then(function(res) {
    var index = authors.indexOf(res.author);
    console.log("\n", quotes[index].quote, "\n");
  })
}

// define a function that lets the user add quotes to the display list

function addQuotes () {

  // ask the user to input the author and then the quote
 inquirer.prompt([
   {
     type: "input",
     message: "Who said this quote?",
     name: "author"
   },
   {
     type: "input",
     message: "What is the quote?",
     name: "quote"
   }
 ]).then(function(res) {
 

    // add the new quote with the corresponding author into our quote storage
  quotes.push(
    {
      author: res.author,
      quote: res.quote
     })
  })
}    