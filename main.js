#! /usr/bin/env node
import inquirer from "inquirer";
const make_todo = async () => {
    let list = [];
    let turn = true;
    while (true) {
        const todo = await inquirer.prompt([
            { message: "what do you wants to add", type: "input", name: "todouser" },
            { message: "Do you wants to add more", type: "confirm", name: "user", default: true }
        ]);
        list.push(todo.todouser);
        if (todo.user !== turn) {
            break;
        }
    }
    list.forEach((e) => console.log(`your task is: ${e}`));
};
make_todo();
