const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

arr = [10, -1, 2, 0, 5, 1, -8];

console.log("Before sort=====");
console.log(arr);

console.log("After sort=====");
console.log(insertionSort(arr));
