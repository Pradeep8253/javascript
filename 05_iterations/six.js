// const coding =  [ "js" , "Ruby" , "JavaScript" , "java" , "Python" , "cpp"] ;   //

// coding.forEach((item) => {
//     // console.log(item);
//     return item;
// })



const Num1 = [1 , 2, 3  , 4, 5, 6, 7, 8, 9, 10]
// const newNums = Num1.filter((num) =>{ 
//     return num>4 })


const newNums = [];

Num1.forEach((num) => {
    if(num > 4){
        newNums.push(num);
    }
})



console.log(newNums);
