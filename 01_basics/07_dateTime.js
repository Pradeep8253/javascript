let myDate = new Date();
// console.log(typeof myDate);  // Object

// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getFullYear());

// const customDate = new Date(2024, 8, 3);
// console.log(customDate.toDateString());

// const customDate = new Date("01-14-2024");
// console.log(customDate.toLocaleString());

// let timeStamp = Date.now();
// console.log(timeStamp); // it gives the seconds value in the milisecond

// console.log(Math.floor(Date.now() / 1000));

let timeStamp = new Date();
// console.log(timeStamp.getMonth() + 1);
// console.log(timeStamp.getDay());

timeStamp.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
});
