const recursiveFact = (num) => {
  if (num <= 1) return num;
  return num * recursiveFact(num - 1);
};

console.log(recursiveFact(5));
