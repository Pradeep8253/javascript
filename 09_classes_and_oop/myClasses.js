
// class User {
//      constructor (username , email , password ){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//      }

//      encryptPassword() {
//        return `${this.password}pradeep`
//      }

//      changeUserName () {
//         return `${this.username.toUpperCase()}`
//      }
// }

// const user =  new User ("Shivam" , "shivam@gmail.com" , "shivamKumar@123")

// console.log(user.encryptPassword());
// console.log(user.changeUserName());


// Behind the scence 

function User (username , email , password){
    this.username = username ;
    this.email = email ;
    this.password = password ;
}


User.prototype.encryptPassword = function () {
    return `${this.password}pradeep`
}

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}

const user2 = new User ("Abhishek" , "Abhishek@gmail.com" ,  "abhi@123")

console.log(user2.encryptPassword());
 console.log(user2.changeUserName());
