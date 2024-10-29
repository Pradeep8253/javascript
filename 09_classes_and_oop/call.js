function  SetUsername (username){
    
    this.username = username;
    console.log("called");
    
}

function createUser (username , email , password){
    SetUsername.call(this , username)
    this.email = email 
    this.password = password
}

const shivam = new createUser("Shivam" , "shivamKumar@gmail.com", "shivam@123")

console.log(shivam );
