const cartesianProduct = (arr, arr2) => {
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      finalArr.push([arr[i], arr2[j]]);
    }
  }

  return finalArr;
};

let arr = [1, 2];
let arr2 = [3, 4];

console.log("The cartesian produc is: ", cartesianProduct(arr, arr2));
