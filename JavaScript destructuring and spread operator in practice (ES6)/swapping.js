var a = 5;
var b = 4;

// swap the above value of a & b

console.log("Before swaping value of a is : "+ a);
console.log("before swapping value of b is : "+ b);
[a, b] = [b, a];


console.log("after swaping value of a is : "+ a);
console.log("after swapping value of b is : "+ b);


console.log("----------------------------------------");


var name = 'Akash';
var surname = 'Talawar';

console.log("Default value of name and surname is : "+ name + " " + surname );

[name , surname] = [surname , name];


console.log("After swapping value of name and surname is : "+ name + " " + surname );
