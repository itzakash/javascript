function fun(){
	return ['Hello','Akash'];
}


let [msg,name] = fun();

console.log("the name is : "+ name);
console.log("the msg is : "+ msg);

console.log("");
console.log("---------------------------------------");
console.log("Getting the first element of the array ");

let array3 = ['akash','sky','talawar','jyo'];

let [first_element,...all_elements] = array3;

console.log("array3 = ['akash','sky','talawar','jyo']");
console.log("first element : "+ first_element);
console.log("other elements : "+ all_elements);


console.log("");
console.log("---------------------------------------");

console.log("from objects");

let details = {
	id : 0,
	person_name : 'akash',
	person_surname : 'talawar'
};

let {person_name,person_surname} = details;

console.log("details = {id : 0,person_name : 'akash',person_surname : 'talawar'}");
console.log(person_name+" "+ person_surname);


