const arr = [1, 2, 3, 4];

console.log("array=====", arr);

arr.unshift(8); //add the element at 0th index
console.log("After unshift method", arr);

console.log("After shift method", arr.shift()); // remove the element at 0th index

arr.push(7);
console.log("After element push at the end of the array", arr);

arr.pop();

console.log("After Removed the element from end of the array", arr);

console.log("After slice", arr.slice(1, 3)); //get the array element from start and end of the given two index

console.log("After splice", arr.splice(2));

// BIG O Notation

/*
    Insert / Remove from end - O(1) 
    Insert / Remove from beginning - O(n) 
    Access - O(1)
    Search - O(n)
    Push / Pop - O(1)
    Shift / Unshift / concat / slice / splice - O(n)
    forEach / map / filter / reduce - O(n)
*/
