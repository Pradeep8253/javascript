// I    mmediiately Invoked Function Expression (IIFE)

(function  DB() {
    console.log( `DB CONNECTED`);
    
}) ();


// in iife if we not declared semicolon then iife  ko nhi pata chalega kb konsa function invoked hoga 
// TypeError: (intermediate value)(...) is not a function
(() => {
    console.log( `DB CONNECTED 2`);
}) ()


// global variables ke polution se bachane ke liye iife ka upyog kiya jata hai 