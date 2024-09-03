const socre = 11;
// console.log(socre);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.4534; // 23.5

// const otherNumber = 123.8964;   // 124

const otherNumber = 1124.8964; //1.12e+3

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++++++++++++++++++++++++ Maths  ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.abs(4)); // 4

// console.log(Math.round(4.6));  // if greater than 5 after the . then become the greater value

// console.log(Math.ceil(4.6)); // getting the greater value
// console.log(Math.floor(4.6)); // getting the lower value

// console.log(Math.max(3, 6, 9, 12, 15)); // 15
// console.log(Math.min(3, 6, 9, 12, 15)); // 3

// console.log(Math.random());
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1); // always gives the floor value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
