const binarySearch = (arr, searchElement) => {
  let startIndex = 0;
  let lastIndex = arr.length - 1;

  while (startIndex <= lastIndex) {
    let middleIndex = Math.floor((startIndex + lastIndex) / 2);

    if (arr[middleIndex] === searchElement) return middleIndex;
    if (searchElement < arr[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }
  return -1;
};

const arr = [2, 4, 5, 7, 9, 12, 45];

console.log(binarySearch(arr, 17));

// BigInt(O) = O(logn)
