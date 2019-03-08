// // Anagrams


// // This function takes in two strings and checks whether they're anagrams of each other.
// // Return true if they are anagrams and false if they aren't anagrams.
// function anagramCheck (str1, str2) {

//   // ---------- Your Code Here ----------
 
//   str1 = str1.replace(/\s/g, "")
//   str1 = str1.toLowerCase();
//   str2 = str2.replace(/\s/g, "")
//   str2 = str2.toLowerCase();

//   str1 = str1.split("").sort().join("");
//   str2 = str2.split("").sort().join("");
//   // return (str1 == str2);

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   for (var i=0; i < str1.length; i++) {
//     str2 = str2.replace(str1[i], "")
//   }





//   // ----------- End Code Area -----------

// }

// // This should console log true
// console.log(anagramCheck("I am Lord Voldemort", "Tom Marvolo Riddle"));

// // This should console log true
// console.log(anagramCheck("Astronomer", "Moon Starer"));

// // This should console log false
// console.log(anagramCheck("Hello World", "Goodnight Sun"));

// // This should console log false
// console.log(anagramCheck("Supercalifragilisticexpialidocious", "If you say it loud enough"));

let uglyArray = [1, [2, 3, [4, 5, [6]]]];
let newArray = [];

function prettyArray(items) {
  items.forEach(function(items) {
    if (Array.isArray(items)) {
      newArray.push(...items);
    }
  });
  console.log(newArray);
}

prettyArray(uglyArray);
