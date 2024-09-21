const user = {
  userName: "Pradeep",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} ,  welcome to  website `);

    // console.log(this);
  },
};

// user.welcomeMessage()
// user.userName = " Shivam"

// user.welcomeMessage()

// console.log(this);

// function hello () {
//     const userName = "Pradeep";
//     console.log(this.username);
    
// }

// hello();


// ARRAY FUNCTIONS

const hello  = () => {
    const userName = "Pradeep";
    // console.log(this.username);
    console.log(this);
    
}

hello();