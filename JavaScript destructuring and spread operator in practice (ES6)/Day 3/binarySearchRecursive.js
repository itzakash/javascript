const binarySearch = (array, searchElement) => {
  return search(array, searchElement, 0, array.length - 1);
};

const search = (arr, target, startIndex, lastIndex) => {
  if (startIndex > lastIndex) return -1;

  let middleIndex = Math.floor((startIndex + lastIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, startIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, lastIndex);
  }
};

const arr = [2, 4, 5, 7, 9, 12, 45];

console.log(binarySearch(arr, 4));
