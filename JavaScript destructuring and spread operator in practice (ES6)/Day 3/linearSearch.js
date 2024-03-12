const linearSearch = (arr, searchElement) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) return i;
  }

  return -1;
};

const arr = [0, 2, 3, 10, 12, -4];

console.log(linearSearch(arr, 10));
console.log(linearSearch(arr, 22));

// BigInt(O) = O(n)
