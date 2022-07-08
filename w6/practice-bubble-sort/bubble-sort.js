
function bubbleSort(arr) {
  // create a swapped flag to mark whether a swap has occured
  let swapped = true;

  while (swapped) {
    // set swapped to false if a swap does not occur during the iteration
      // the array must be sorted
    swapped = false;
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i+1]) {
        // Swap those values
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        // since a swap occured, set swapped back to true
          // this will force another iteration
        swapped = true;
        // Do not move this console.log
        console.log(arr.join(","));
      }
    
    }
    // If you get to the end of the array and no swaps have occurred, return
    if (!swapped) return arr;
      // Otherwise, repeat from the beginning
  }

}

module.exports = bubbleSort;