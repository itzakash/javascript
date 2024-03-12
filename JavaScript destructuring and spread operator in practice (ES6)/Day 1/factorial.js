const factorial = (n) => {
  if (n == 0) return 1;

  let fact = 1;
  while (n != 0) {
    fact = fact * n;
    n--;
  }

  return fact;
};


console.log(factorial(5))