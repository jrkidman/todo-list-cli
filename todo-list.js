// ## Requirements

// * You must make at least three commits in git while working on this project (make a commit everytime you get a new thing working)
// * The user is able to add new to-do items
// * A list of to-do items is displayed to the user
//   * The number of to-do items is displayed to the user
//   * If the user has no to-do items, this should be indicated to the user
// * The user is able to set existing to-do items as complete
// * Tell the user if they entered an invalid action

//To begin with:
//    First thing: should display how many items in the to-do list, OR that the to-do list is empty
//      THEN should prompt the user to choose to add to-do items, or to mark as completed

//          IF adding to-do items, then next user input is added to the to-do array
//          IF marking as completed, then next user input will modify the specified item in the array
//          IF anything else return an "invalid action" message

//      THEN re-display the to-do list

const prompt = require("prompt-sync")();

//display either how many items are in the to-do list IF there are items, or that the list is empty IF it's empty.  this should be a console.log of the length of the userTodo array, or a console.log of it being empty

let todoArray = [];
    if (todoArray.length < 0){
        console.log("You have " + userArray.length + " items on your to-do list. ");
    }
    else if (todoArray.length === 0){
        console.log("Your to-do list is empty. ");
    }

// prompt the user to choose to add, or mark complete --> WHILE loop
let userTodo = prompt ("Welcome to your To Do List. Type 1 to create a to-do item.  Type 2 to mark an item as completed.  ");


// IF adding, then prompt for innput and add that input to the to-do array 
    if (userTodo === 1){
        let addItem = prompt("What item would you like to add? ");
        todoArray.push(addItem);
    }
//console.log(todoArray);

// IF marking as complete, prompt to choose which item to modify --> FOR loop