
// const newUSer =  new Object()

const newUser =  {}
newUser.id =  "1234cb" 
newUser.name = "akash"
newUser.isLoggedIn = true


// console.log(newUser);


const regularUser =  
{
    email : " samcook@gmail.com",
    fullName  : {
        userFullName : {
            firstName : "Sam",
            lastName : "Cook"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { name : "shivam," , email 
    :"shivam@gmail.com"
}

const obj2 = { age: 22 , address : "jkchwbdvgahgvashcgc vhscvjsdbidkjkd" 
    
}

// const obj3 = { obj1 , obj2 }
// const obj3 = Object.assign({} , obj1, obj2)

const obj3 = {...obj1 , ...obj2} // commaly used to join objects
// console.log(obj3);  

// console.log(newUser.hasOwnProperty('name'));


const course  = {
    courseName : "javascript",
    price  : "10000" ,
    courseInstructor : "shivam"
}

const { courseInstructor : instructor} = course

// console.log(courseInstructor);


console.log(instructor);


