#! /usr/bin/env node
import inquirer from "inquirer";
const make_todo = async () => {
    let list = [];
    let turn = true;
    while (turn) {
        const todo = await inquirer.prompt([
            { message: "what do you wants to add", type: "input", name: "todouser" },
            { message: "Do you wants to add more", type: "confirm", name: "user", default: true }
        ]);
        if (todo.todouser.length === 0) {
            console.log("please input some data to add in list");
            turn = false;
        }
        else {
            list.push(todo.todouser);
        }
        if (todo.user !== turn) {
            break;
        }
    }
    list.forEach((e) => console.log(`your task is: ${e}`));
};
make_todo();
