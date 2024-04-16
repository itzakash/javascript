/*
  identified the pivot element from the given array
  * Pick the first elemt as pivot element
  * Pick the last element as pivot
  * pick the ramdom element
  * Pick median as pivot
  
  Put everting thats smaller tha pivot elemnt into left array and grater than into right array 
*/

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let right = [];
  let left = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

arr = [10, -1, 2, 0, 5, 1, -8];
console.log("Before sort======");
console.log(arr);

console.log("After sort=====");
console.log(quickSort(arr));

//wort case 0(n^2)
