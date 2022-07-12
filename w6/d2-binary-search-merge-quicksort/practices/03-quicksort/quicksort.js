function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  const pivot = arr[0];

  const left = [];
  const right = [];
  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i]
    // every number smaller than the pivot is to the left
    if (el < pivot) left.push(el)
    // every number larger (or equal) than the pivot is to the right
    else right.push(el)
  }

  // Recursively sort the left
  const leftSort = quicksort(left);
  // Recursively sort the right
  const rightSort = quicksort(right);
  // Return the left, pivot and right in sorted order
  return [...leftSort, pivot, ...rightSort]
}


// [10, 1, 5, 2, 8, 7]

// p = 10 
// L               R
// [1,5,2,8,7]     []
// p = 1
// L      R
// []     [5,2,8,7]
//        p = 5
//        L      R
//        [2]   [8,7]
//              p = 8
//              L     R
//              [7]]   []
//              [7]
//              [7,8]
//         [1,2,5,7,8,10]

// [2,1,3]

// p = 2
// [1]  [3]

// [1, 2, 3]

// [2,1,4,3,5]
// p = 2
// [1] [4,3,5]
//      p = 4
//     [3]  [5]
//   [3,4,5]
// [1,2,3,4,5]




module.exports = [quicksort];
