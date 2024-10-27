const user = {
    username : "hitesh",
    loginCount : 8 ,
    signedIn : true ,

    getUserDetails : function () {
        // console.log("Got user details from Database");
        // console.log(`userName  : ${this.username}`);

        // console.log(this);
        
    }
}

// console.log(user.getUserDetails());
// console.log(this);

function  User (username , loginCount , isLoggedIn){
    this.username  = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}


const userOne = new User("pradeep" , 12 , true);
const userTwo =  new User ("Shivam" , 43 , false)
console.log(userOne.constructor);
// console.log(userTwo);



// New  keyword use krne se ek empty Object create hota hai jis einstance bolte hai 

