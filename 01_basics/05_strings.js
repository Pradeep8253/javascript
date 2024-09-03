const name = "Awadh";
const age = 20;

// console.log(name + age + " Pratapgarh"); // today is less used

// console.log(` Hello my name is ${name}  and my age is ${age} .`); // it is modern and more used

const villName = new String("pratapgarh");

// console.log(villName[0]);
// console.log(villName.__proto__);
// console.log(villName.length);

console.log(villName.charAt(3));

const newString = villName.substring(0, 5);
// console.log(newString);

const anotherSling = villName.slice(-10, 5);
// console.log(anotherSling);

const newStringOne = "  PradeepShivam    ";

console.log(newStringOne);
console.log(newStringOne.trim());

console.log(villName.split("p"));
