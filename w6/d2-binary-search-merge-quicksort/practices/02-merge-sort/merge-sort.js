// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
                                                        //            M
  // Check if the input is length 1 or less             // [10, 1, 5, 2, 8, 7]
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Divide the array in half
  const mid = Math.floor(arr.length / 2);
  console.log(mid)
  const leftHalf = arr.slice(0, mid);                   
  const rightHalf = arr.slice(mid);                     
  // Recursively sort the left half                     
  const leftSort = mergeSort(leftHalf);                 
                                                        
  // Recursively sort the right half
  const rightSort = mergeSort(rightHalf);

  // Merge the halves together and return
  return merge(leftSort, rightSort);
}

                                                        //  LH         RH
                                                        // [10,1,5]  [2,8,7]
                                                        //    
                                                        //  [10,1,5]
                                                        //  LH     RH
                                                        // [10]   [1,5]

                                                        // [10]

                                                        //       [1,5]
                                                        //        LH    RH
                                                        //       [1]   [5]
                                                        //       [1,5]

                                                        // [1,5,10]

                                                                  // [2,8,7]
                                                                  // LH    RH
                                                                  // [2]   [8,7]

                                                                  // [2]
                                                                  //      LH   RH
                                                                  //      [8]  [7]
                                                                  //      [7,8]

                                                                  // [2,7,8]
                                                        // [1,2,5,7,8,10]

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const res = [];
  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;
  // While there are still values in each array...
  while (indexA < arrA.length || indexB < arrB.length) {

    if (indexA === arrA.length) {
      res.push(arrB[indexB])
      indexB++
    } else if (indexB === arrB.length) {
      res.push(arrA[indexA])
      indexA++
    } else if (arrA[indexA] <= arrB[indexB]) {
      res.push(arrA[indexA])
      indexA++
    } else {
      res.push(arrB[indexB])
      indexB++
    }

    // if (arrA[indexA] <= arrB[indexB]) {
    //   res.push(arrA[indexA])
    //   indexA++
    // } else {
    //   res.push(arrB[indexB])
    //   indexB++
    // }

  }

  // Return the return array
  return res;
  // return [...res, ...arrA.slice(indexA), ...arrB.slice(indexB)];
}
mergeSort([2, 4, 5, 7, 8, 10])
module.exports = [merge, mergeSort];
