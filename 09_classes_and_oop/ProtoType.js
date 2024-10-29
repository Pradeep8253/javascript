// let myName  = "shivam    "
// let lastName = "Kumar    "

// console.log(myName.trulength);



let myHeros = ["akshay" , "Kumar"]
let heroPower = {
    akshay : "superSpeed",
    Kumar : "superIntelligence",
    getKumarPower : function () {
        console.log(`Kumar power is ${this.Kumar}`);
        
    }
}

Object.prototype.shivam = function () {
    console.log(`Shiavm is present in all objects `);
    
}

Array.prototype.shivamKumar = function () { 
    console.log("Shivam kumar is  my son");

}

// heroPower.shivam()   
// myHeros.shivam();
// myHeros.shivamKumar();
// heroPower.shivamKumar()


// INHERITANCE 

const User = {
    name : "Shivam",
    email: "shivam@gmail.com"
}

const Teacher = {
    makeVideo :  true 
}


const TeachingSupport = {
    isAvailable : false 
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true ,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

// mopdern syntax 

Object.setPrototypeOf(TeachingSupport , Teacher);

let anotherUsername  = " shivam Bhai   "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`)   ;
     
}

anotherUsername.trueLength();

"Abhishek               ".trueLength();