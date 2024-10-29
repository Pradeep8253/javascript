class User {
    constructor (username){
        this.username  = username 
    }

    LogMe () {
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username , email , password ){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse () {
        console.log(`A  new Course was added by ${this.username}`);    
    }
}

const  shivam  =  new Teacher  ("shivam" , "shivam@gmail.com" , "shivam@123")   

shivam.addCourse();

console.log(shivam instanceof Teacher);
