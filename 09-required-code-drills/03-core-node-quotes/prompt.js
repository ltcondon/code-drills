// ======== You are given NOTHING to start with 😱 ========
var fs = require("fs");
var person = process.argv[2] + " " + process.argv[3];

fs.readFile("quotes.txt", "utf-8", function(err, data) {
    if (err) throw (err);

    var quotesPerson = data.split(";");
    // console.log(quotesPerson);

    for (var i = 0; i < quotesPerson.length; i++) {
        var quote = quotesPerson[i].split("-");
        // console.log(quote);
        
        if (quote[1] === person) {
            console.log(quote[1] + ": " + quote[0]);
        }
    }
})
