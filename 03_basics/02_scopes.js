
var c = 300 
let a =  80 ;

if (true){
    let  a = 10 ; 
    const b = 20 ;
    var c = 30 ;
    // console.log("Inner A:" , a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one () {
    const userName  = "Pradeep yadav "

    function two (){
        const website = "youtube"
        // console.log(userName);
        
    }

    // console.log(website); // Error  Website is not defined 
    

    two()

}
one();


// console.log(one(5));


function one (num ) {
    return num * 2
}

console.log(sumTwo(5));

const sumTwo =  function (num ){
    return num *2
}




