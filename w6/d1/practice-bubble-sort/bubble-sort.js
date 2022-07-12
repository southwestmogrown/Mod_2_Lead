
function bubbleSort(arr) {

  const array = [...arr];
  // create a swapped flag to mark whether a swap has occured
  let swapped = true;

  while (swapped) {
    // set swapped to false if a swap does not occur during the iteration
      // the array must be sorted
    swapped = false;
    // Iterate through the array
    for (let i = 0; i < array.length; i++) {
      // If the current value is greater than its neighbor to the right
      if (array[i] > array[i+1]) {
        // Swap those values
        [array[i], array[i+1]] = [array[i+1], array[i]];
        // since a swap occured, set swapped back to true
          // this will force another iteration
        swapped = true;
        // Do not move this console.log
        // console.log(array.join(","));
      }
    
    }
    // If you get to the end of the array and no swaps have occurred, return
    if (!swapped) return array;
      // Otherwise, repeat from the beginning
  }

}

// create a swapped flag to mark whether a swap has occured
  // set swapped to false if a swap does not occur during the iteration
    // the array must be sorted
  // Iterate through the array
    // If the current value is greater than its neighbor to the right
      // Swap those values
      // since a swap occured, set swapped back to true
        // this will force another iteration
      // Do not move this console.log
  // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning

function bubbleSort2(arr) {

  const array = [...arr]

  let swapped = false;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
        // console.log(array.join(","));
        swapped = true;
      }
    }
    if (!swapped) return array;
  }
  return array;
}



const arr = [];
const n = 25000

for (let i = 0; i < n; i++) {
  arr.push(Math.floor(Math.random() * n));
}

// console.log(arr)

console.time("Bubble Sort");
bubbleSort(arr);
console.timeEnd("Bubble Sort");

console.time("Bubble Sort 2");
bubbleSort2(arr);
console.timeEnd("Bubble Sort 2");

module.exports = bubbleSort;