

function selectionSort(arr) {

  // Copy the original array
  const copy = [...arr];
  const sorted = [];

  while (copy.length) {
    console.log(sorted.join(","));
    let minIdx = 0;
    for (let i = 1; i < copy.length; i++) {
      if (copy[minIdx] > copy[i]) minIdx = i;
    }
    const val = copy.splice(minIdx, 1);
    sorted.push(...val);
  }
return sorted

  // Create an array to store the sorted values

  // While the array is not empty...

    // Do not move this console.log

    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array

}



function selectionSortInPlace(arr) {

  // // Set a pointer at zero diving the array into sorted and unsorted halves
  // let divider = 0;
  // // Repeat while the unsorted half is not empty:
  // while (divider < arr.length) {
  //   // Do not move this console.log
  //   console.log(arr.join(","));

  //   // Find the index of the minimum value in the unsorted half
  //   let minIndex = divider;
    
  //   for (let i = divider + 1; i < arr.length; i++) {
  //     if (arr[i] < arr[minIndex]) minIndex = i;
  //   }

  //   // Save the min value
  //   let minVal = arr[minIndex];
  //   // Shift every unsorted value to the left of the min value to the right by 1
  //   for (let i = minIndex; i >= divider; i--) {
  //     arr[i] = arr[i - 1];
  //   }

  //   // Put the min value at the divider
  //   arr[divider] = minVal;

  //   // Increment the divider and repeat
  //   divider++;
  // }
  // return arr;

  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:
  for (let i = 0; i < arr.length; i++) {
    console.log(arr.join(","));
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }
    let minVal = arr[minIdx];

    for (let b = minIdx; b > i; b--) {
      arr[b] = arr[b-1];
    }
    arr[i] = minVal
  }
    // Do not move this console.log
  return arr;
    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

}

selectionSortInPlace([3,1,4,2])
selectionSortInPlace([2,4,6,8,1,3,5,7,9])
module.exports = [selectionSort, selectionSortInPlace];
