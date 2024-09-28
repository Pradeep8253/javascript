const Num1 = [1 , 2 , 3 , 4]

// const myTotel =  Num1.reduce(function (acc , curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
    
//     return acc + curVal ;
// }, 3 )


const myTotel  = Num1.reduce((acc , curr) => acc+curr , 0 )
console.log(myTotel); 