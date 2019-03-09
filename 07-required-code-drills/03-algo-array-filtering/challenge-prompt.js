// Reversed Primes


// We are creating a function that takes in an unsorted array of integers
// and returns a new array containing only the prime numbers sorted in
// descending order

// -------------------------------------------------------
//                Helper Functions (Optional)
  function primeNum (x) {
    if (typeof x !== 'number') {
      return false;
    }
    if (x < 2) {
      return false;
    }
    for (i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }

console.log(primeNum(9));
console.log(primeNum(6));


// -------------------- Your Code Here --------------------





// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function primeSort(arr) {
  // -------------------- Your Code Here --------------------

  for (var i = 0; i < arr.length; i++) {
    if (!primeNum(arr[i])) {
      arr.splice(i, 1);
    } 
  }

  arr.sort(function(a, b) {
    return b - a;
  })

  return arr;

  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [73, 47, 17, 5]");
console.log(primeSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [83, 6, 13, 15, 27, 19, 103, 59, 42, 4];
console.log("The following should be [103, 83, 59, 19, 13]");
console.log(primeSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [6, 81, 36, 45, 82, 21, 8, 22, 10, 15];
console.log("The following should be []");
console.log(primeSort(testArr3));