#! /usr/bin/env node
import inquirer from "inquirer";

const make_todo = async () => {

    let list:any[] = [];
    let turn:boolean = true
    let items:number = 0

    while (turn) {

        //make a question for user to select an option
        const questions = await inquirer.prompt([
            { message: "Chose an option to perform a task", type: "list", choices: ["Create", "Delete", "Update", "Read"], name: "userOptions" }
        ])


        //check if user select create option 
        if (questions.userOptions === "Create") {

            const todo = await inquirer.prompt([
                { message: "What do you wants to add", type: "input", name: "createList" },
                { message: "Do you wants to add more", type: "confirm", name: "user", default: true }
            ])
            if (todo.createList.length === 0) {
                console.log("Please input some data to add in list")
                turn = false
            } else {
                list.push(todo.createList)
                items++
            }
            if (todo.user !== turn) {
                list.forEach((e, index) => console.log(`${index + 1}: Your task is: ${e}`))
                break;
            }
        }


        //check if user select delete option
        if (questions.userOptions === "Delete") {
            if (list.length === 0) {
                console.log("There is no list to delete")
                turn = false
            } else {
                list.pop()
                items--
                list.forEach((e, index) => console.log(`${index + 1}: Your task is: ${e}`));
                if (list.length === 0) {
                    console.log("All items was deleted")
                }
                turn = false
            }
        }


        //check if user select read option
        if (questions.userOptions === "Read") {
            if (list.length === 0) {
                console.log("There is no list to read")
                turn = false
            } else {
                list.forEach((e) => console.log(`Your task is: ${e}`))
                turn = false
            }
        }


        // check if user selects update option
        if (questions.userOptions === "Update") {
            if (list.length === 0) {
                console.log("There is no list to update");
                turn = false;
            } else {
                const askQues = await inquirer.prompt([
                    {message:"Which number of list do you wants to update", type:"number", name:"getNum"},
                ])
                if(askQues.getNum > list.length || askQues.getNum < 1){
                    console.log("Enter a valid number")
                }else{
                    const lastQues = await inquirer.prompt([
                        {message:"Update the list item", type:"input", name:"updateValue"}
                    ])
                    if(lastQues.updateValue === 0){
                        console.log("Please provide a valid update value");
                    }else{
                        list[askQues.getNum - 1] = lastQues.updateValue;
                        console.log(`Task ${askQues.getNum} has been updated with ${lastQues.updateValue}`);
                        list.forEach((e) => console.log(`Your task is: ${e}`));
                        turn = false;
                    }
                }
            }
        }

    }
}
make_todo()