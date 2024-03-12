const recursiveFibo = (n) => {
  if (n < 2) return n;
  return recursiveFibo(n - 1) + recursiveFibo(n - 2);
};

console.log(recursiveFibo(6));


0,1,1,2,3,5