// // Insertion Sort out-of-place
// // Do not modify the original array
// function insertionSort(arr) {
//   /*
//   Pseudocode:

//   Copy the original array
//   Create an array to store the sorted values
//   While the array is not empty:
//   - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
//   - Pop a value from the array
//   - Create a new spot at the end of the array with null to help with comparisons
//   - Walk through the sorted array in reverse order
//   - Check if the value to the left is smaller than the new value
//   - If so, you've reached the insertion point so exit the loop
//   - If not shift the value to the right by 1 and continue
//   - Insert the unsorted value at the break point
//   Return the sorted array
//   */

//   // Your code here

//   // const copy = [...arr];
//   const sorted = [];

//   while (arr.length) {
//     console.log(sorted.join(','));
//     const el = arr.pop();
//     sorted.push(null);
//     let i = sorted.length - 1;

//     while (i > 0) {
//       if (sorted[i-1] <= el) break;
//       else {
//         sorted[i] = sorted[i-1];
//         i--;
//       }
//     }
//     sorted[i] = el;
//   }
//   return sorted
// }

function insertionSort(arr) {

  const copy = [...arr];
  let sorted = [];

  
  while (copy.length) {
    console.log(sorted.join(','))
    const val = copy.pop();  // 5
    sorted.push(null);

    let i;
      
    for (i = sorted.length - 1; i > 0; i--) {
      if (sorted[i - 1] <= val) break
      else sorted[i] = sorted[i-1];  
    }
      sorted[i] = val;
  }
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // let divider = 1;

  // while (divider < arr.length) {
  //   console.log(arr.join(','));

  //   let val = arr[divider];
  //   let i = divider;

  //   while (i > 0) {
  //     if (arr[i-1] > val) {
  //       arr[i] = arr[i-1];
  //       i--;
  //     } else break;
  //   }

  //   arr[i] = val;
  //   divider++;
  // }
  // return arr;

  // Your code here

  // const copy = arr.slice();

  for (let i = 1; i < arr.length; i++) {
    console.log(arr.join(','));
    
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
      } 
    }
  }
  return arr
  
}
console.log(insertionSortInPlace([3, 4, 2, 1, 6, 9, 5, 8, 10, 7]))
module.exports = [insertionSort, insertionSortInPlace];