// Lets build another bubble sort with a while loop instead of nested for loops

// Define a boolean outside your while loop to track if an element has been swapped

// the while loop should contain the for loop that iterates through the array and 
// continue until you've been able to iterate through the array without swapping 
// any elements


function bubbleSortTwo(arr) {
    // ================= code goes here ===========================
var elSwapped = false;

while (!elSwapped) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i+1]) {
            elSwapped = false;
            var temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
            elSwapped = true;
        }
    }
}
    









    
    // ============================================================
}


var age = [34, 23, 3, 76, 20, 84, 18, 9];
var newAge = bubbleSortTwo(age);
console.log(newAge)
