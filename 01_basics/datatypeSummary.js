// Primitive

//  7 types : String , Number , Boolean , null , undefined , symbol , BigInt

const score = 100;
const socreValue = 100.3;

const isPassed = true;
const temp = null;
let userName;

const id = Symbol("123");
const anotherNumber = Symbol("123");
// console.log(id == anotherNumber);

const bigNumber = 56744778876878n;

// Refrence (Non primitive )

// Array , Objects , Functions ,

const heros = ["ram", "shyam", "rajat", "neeraj"];

let myObj = {
  name: "pradeep",
  age: 24,
  city: "bengaluru",
};

const greet = function () {
  console.log("Hello");
};

// null ka type object ata hai
// bigNumber => bigint

// +++++++++++++++++++++++++++++  Memory  +++++++++++++++++++++++++++++++++

// Stack  (Primative)  , Heap (Non-Primitive) ;

// in Stack memory mujhe copy milta

// in Heap memory original value milta hai( refrence of value)
// if value change the heap memory value should be changed

let fruitName = "banana";

let anotherName = fruitName;
anotherName = "Apple";

console.log(fruitName);

console.log(anotherName);

let user1 = {
  email: "hjdauhjgajvhs@gmail.com",
  name: "pradeep",
  age: 24,
};

let user2 = user1;

user2.email = "pradeep@gmail.com";

console.log(user1);
console.log(user2);
