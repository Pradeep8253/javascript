const marvel =  ["Thar" , "Troman"  , "Spiderman" ]
const dc = ["Superman" ,  " Flash" , "Batman"] 

// marvel.push(dc)   // seccond array is treated as a single element  of array 
// console.log(marvel);

// const margeArray = marvel.concat(dc)  // merge array

// const margeArray = [...marvel,...dc]  // spread operator is used to merge array

// console.log(margeArray);


const arra1  = [ 12 , 44 , 23 , 64 , [55 ,66 ] , [20 , 34 , 25]]

// const flattenArray = arra1.flat(Infinity) // Infinity means flatten all the nested array
// console.log(flattenArray);

// console.log(Array.isArray("Rajat")); // false 
// console.log(Array.from("Rajat")); // it convert into the array 
// console.log(Array.from({name : "Rajat"}));  // it gives the  blank Array [] 


let score1 = 100 ,
    score2 = 90 ,
    score3 = 80 ,
    score4 = 70 ;


    console.log(Array.of(score1,score2,score3,score4));
    

