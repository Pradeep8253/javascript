const arr1 = [4, 5, 8, 12, 15];

const arr2 = new Array(2, 6, 8, 10, 18);

// Array Method
// arr1.push(90)
// arr1.push(122)
// arr1.pop()

// arr1.unshift(5555) // unshift  shifts all the values
// arr1.shift()

// console.log(arr1.includes(9)); // check the value exits are not
// console.log(arr1.indexOf(9)); // find the index of the value



// const newArray = arr1.join() // join convert array into strings 
console.log(arr1);
// console.log( typeof newArray);


// Slice and Splice method


const arr3 = arr1.slice(1 , 3) // it is not include the last index such as 3 and original array shouould not change 
console.log("A" , arr1);

console.log(arr3)

const arr4 = arr1.splice(1 , 3) // it is not include the last index such as 3 and original array exxclude the value that are in condition of the splice method
console.log("B" , arr1);

console.log(arr4);

