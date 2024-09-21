
// Singleton // build with the constructure 
// Object.create


// object literals
const machine  =  {
    name : "machine1",
    "full name" : "pradeep  yadav",
    age : 24 ,
    Dob : 24/11/2000,
    addres : "hjsdghsdfghjd"
}

machine.name = "machine2"
// Object.freeze(machine)

machine.name = "machine3"
// console.log(machine);



// console.log(machine.name);

// console.log(machine["full name"]);

machine.greeting =  function () {
    console.log("greeting from pradeep yadav");
    
}

console.log(machine.greeting());
