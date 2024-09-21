

function  sayMyName  () {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P"); 

}


// sayMyName();

// function ( num1 , num2 ) //  num1 and num2 is argument
 
// function addTwoNumbers (num1 , num2) {
//     console.log(num1 +  num2);
    
// } 

function addTwoNumbers (num1 , num2) {
//   let result = num1 + num2;
//   return result;

//   console.log(result);  unreachable code 

return num1 + num2;
  
    
} 

const result = addTwoNumbers( 4 , 4) // it is arguments 

// console.log("Result : " , result); ;

function loginUserMessage  (userName) {
    return `${userName}  just logged in`
}

// console.log(loginUserMessage("Shivam")); // if value is not passed then gives error undefined 


function calculateCartPrice  (val1 , val2 , ...num1 ) {
    return num1 

}
// console.log(calculateCartPrice(200 , 400 , 500 , 600 , 700));

const user = {
    userName : "shivam",
    prices :  2000 
}

function  handleObject(anyObject){
    //   console.log(`Username ${anyObject.userName} and price ${anyObject.prices}`);
      
}

handleObject(user);

const newArray = [ 200 , 400 ,600 ,800 ]    

function  handleArray(anyArray){
      return anyArray[1]
      
}

console.log( handleArray(newArray));
