// ## Phase 2: Storing To-Dos

// Now it's time to allow the user to add new to-do items.

// To do this, start by creating an empty array above the start of our loop that will contain the to-do items' titles. When the user adds a new to-do item, we'll add it to this array.

// Inside your while loop, add some `console.log` statements that show the user a list of actions that they can take. This can be as simple as having two actions: one to add a new to-do item and one to complete an existing to-do item. Check out the `README.md` for an example of what this might look like.

// After these `console.log` statements (but still inside of your while loop), prompt the user for an action and store their choice in a variable.

// Beneath this (and still within the while loop), determine whether the user decided to add a new to-do (use an if statement). If they did, prompt them for the title of the to-do. Store the title in a variable, then add it to the array of to-do items.

// Now, at the beginning of your while loop you can `console.log` out each item in the to-do list. Some kind of for-loop would be best for this (this for loop should still be nested inside of the while loop).



const prompt = require("prompt-sync")({sigint: true});

let todoList = [];
let completed = [];
let add = "";
let toComplete = 0;
let status = [];
let selection = 0;

console.log("");
console.log("~~~Welcome to Your To-Do List~~~");
console.log("________________________________________________");
console.log("");

while (selection !== 3){
        if (todoList.length <= 0){
                console.log("Your to-do list is currently empty!");
        }
        console.log("~~ Here are your options: ~~");
        console.log("");
        console.log("[1] Add a to-do item ");
        console.log("[2] Complete an item ");
        console.log("[3] Exit application ");
        console.log("")
;
        selection = Number(prompt("> "));
        console.log("");

        if (selection !== 1 && selection !== 2 && selection !== 3){
                console.log("________________________________________________");
        }

        if (selection === 1){
                console.log("You've chosen to add a task to your to-do list. ");
                console.log("What task would you like to add? ");
                add = prompt("> ");
                todoList.push(add);
                console.log("________________________________________________");
                console.log("You have " + Number(todoList.length) + " tasks in your to-do list. ");

                for(let i = 0; i < todoList.length; i++){
                        completed[todoList.length -1] = false;

                        if (completed[todoList.length - 1] === false){
                                status[i] = "[Incomplete] ";
                        }
                        else if (complete[todoList.length - 1] === true){
                                status[i] = "[Complete] ";
                        }

                console.log(Number(i + 1) + "." + status[i] + todoList[i]);
                // console.log("________________________________________________");

                }
        }

        if (selection === 2){
                console.log("You've chosen to mark a task as completed. ");
                console.log("Which task would you like to mark as completed? ");
                toComplete = Number(prompt("> "));
                console.log("________________________________________________");
                console.log("You have " + Number(todoList.length) + " tasks in your to-do list. ");

                for (let i = 0; i < todoList.length; i++){
                        completed[toComplete - 1] = true;

                        if (completed[i] === false){
                                status[i] = "[Incomplete] ";
                        }
                        else if (completed[i] === true){
                                status[i] = "[Complete] ";
                        }
                
                        console.log(Number(i + 1) + "." + [status[i]] + todoList[i]);
                        // console.log("________________________________________________");
                }
        }

        if (selection === 3){
                return console.log("Goodbye! ");
        }
}

