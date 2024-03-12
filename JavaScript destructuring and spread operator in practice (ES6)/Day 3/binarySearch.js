const binarySearch = (arr, searchElement) => {
  let index = Math.round(arr.length / 2) - 1;
  //   console.log(index);

  if (arr[index] === searchElement) return index;

  if (arr[index] < searchElement) {
    for (let i = index; i != arr.length; i++) {
      if (arr[i] === searchElement) {
        return i;
      }
    }
  } else {
    for (let i = 0; i != index; i++) {
      if (arr[i] === searchElement) {
        return i;
      }
    }
  }

  return -1;
};

const arr = [2, 4, 5, 7, 9, 12, 45];

console.log(binarySearch(arr, 7));
