const climbingStairCase = (n) => {
  let noofways = [1, 2];

  for (let i = 2; i < n; i++) {
    noofways[i] = noofways[i - 1] + noofways[i - 2];
  }
  return noofways[n - 1];
};

console.log(climbingStairCase(1));
console.log(climbingStairCase(2));
console.log(climbingStairCase(3));
console.log(climbingStairCase(4));
console.log(climbingStairCase(5));

// Big O = o(n) -> linear
