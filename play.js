// //keep taking strings from user and adding to the array until other condition is met

// const prompt = require ("prompt-sync")({sigint:true});

// let cutePets = [];

// let userInput = prompt("List a pet that you've had.  When all of your pets are listed, enter 'exit'.  ");

// while (userInput !== "exit"){
//     cutePets.push(userInput);
//     userInput = prompt("List any other pets.")
// }
// console.log(cutePets);

const prompt = require("prompt-sync")();

let todoArray = [];

// prompt the user to choose to add, or mark complete --> WHILE loop
let userTodo = prompt ("Welcome to your To Do List. Type 1 to create a to-do item.  Type 2 to mark an item as completed.  ");


// IF adding, then prompt for innput and add that input to the to-do array 
    while (userTodo === 1){
        todoArray.push(userTodo);
        
    }
    


// IF marking as complete, prompt to choose which item to modify --> FOR loop

