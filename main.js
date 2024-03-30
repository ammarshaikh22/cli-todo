#! /usr/bin/env node
import inquirer from "inquirer";
const make_todo = async () => {
    let list = [];
    while (true) {
        const todo = await inquirer.prompt([
            { message: "what do you wants to add", type: "input", name: "todouser" },
            { message: "Do you wants to add more", type: "list", name: "user", choices: ["yes", "no"] }
        ]);
        list.push(todo.todouser);
        if (todo.user === "no") {
            break;
        }
    }
    list.forEach((e) => console.log(`your task is: ${e}`));
};
make_todo();
