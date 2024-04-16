const obj = {
  name: "Akash",
  age: 28,

  sayMyName: () => {
    console.log(this.name);
  },
};

console.log(obj);
obj.sayMyName();

console.log(Object.keys(obj));
console.log(Object.values(obj));

console.log(Object.entries(obj));

for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(obj[Object.keys(obj)[i]]);
}

// Object - Big-O time complexity
/*
    insert - O(1);
    Remove - O(1);
    Access - O(1);
    Search - O(n);
    Object.keys() - O(n);
    Object.values() - O(n);
    Object.entries() - O(n);
*/
