

import inquirer from "inquirer";

let todoString: string[] = [];
let loop = true;

interface TodoInput{
    todoItem: string,
    addMore: boolean
}


while(loop){
    const todoInput: TodoInput = await inquirer.prompt([
        {
            type: "input",
            name: "todoItem",
            message: "Enter item Name which you want to add in your To-Do list"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more item in your To-Do list?",
            default: false
        }
    ]);

    const todoItem = todoInput.todoItem;
    const addMore = todoInput.addMore;

    if(todoItem){
        todoString.push(todoItem);
    }


    loop = addMore;

};


if(todoString.length > 0){
    console.log(`Here is your To-Do list:`);
    for(let i = 0; i < todoString.length; i++){
        console.log(`${i + 1}. ${todoString[i]}`);
    }
}else{
    console.log(`Your To-Do list is Empty!`);
}
