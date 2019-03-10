// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(arr) {
// ================= code goes here ===========================

// for (var i=0; i<arr.length -1; i++) {
//     if (arr[i] < arr[i+1]) {
//         var tempVal = arr.splice(i+1, 1);
//         console.log(tempVal)
//         arr.splice(0, 0, tempVal[0]);
//         i=0;
//     }
    
// }
//     return arr;
    var i = 0;
    while (i < arr.length - 1) {
        if (arr[i] < arr[i+1]) {
            var temp = arr.splice(i+1, 1);
            arr.splice(i, 0, temp[0]);
            i = 0;
        }
        i++;
    }
    return arr;

// ============================================================
}

var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);