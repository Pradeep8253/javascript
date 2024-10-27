const promiseOne = new Promise( function (resolve , reject) {
    // Do  an async task 
    // DB calls ,  cryptography , network 

    setTimeout( function () {
        console.log("Data Fetched  Successfully ");
        resolve()
    } ,  2000)
});

promiseOne.then( function (){
    console.log("Promise Resolve");
    
})



new Promise (function (reslove , reject) {
    setTimeout(function () {
        console.log("Data 2 Fetched Successfully ");
        reslove();
    } , 2000)
}).then(function() {
    console.log("promise Resolve 2 ");
    
})


const promise2 = new Promise (function (resolve , reject) {
    setTimeout(function (){
   resolve({userName : "pradeep979596" , email : "pradeep@example" })
    } , 2000)
})

promise2.then(function( user) {
 console.log(user);
 
})



const promise3  = new Promise (function(resolve , reject) {
    setTimeout (function () {
     let error = false ;
     if(!error) {
        resolve ({username : "Pradeep" , email : "pradeep@example"})
     }else {
        reject('Error :  Something went wrong ')
     }
    } , 2000 )
})

promise3.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
console.log(username);

}).catch( function (error) {
    console.log(error);
    
}).finally(function () {
    console.log("Promise is either Resolved or Rejected ");
    
})


const promise4 = new Promise (function (resolve , reject) {
    setTimeout(function (){
        let error = true ;
        if(!error) {
            resolve({username : "Shivam" , password : "123"})
        }else{
            reject ("ERROR : Kuch Error aa gaya Bhai ")
        }
    } , 2000)
});


async function  consumePromiseFive (
)  {  try {
    const res = await  promise4
   console.log(res);
} catch (error) {
    console.log(error)
    
}

}

consumePromiseFive();

async  function getAllUser () {
     try {
        const res =  await fetch('https://jsonplaceholder.typicode.com/users')
     const data = await res.json()
     console.log(data);
     
     } catch (error) {
        console.log(error);
        
     }
}

getAllUser()


fetch('https://jsonplaceholder.typicode.com/users').then(( response) => {
  return response.json();
}).then((data) =>  {
    console.log(data);
    
}).catch((error) => console.log(error))