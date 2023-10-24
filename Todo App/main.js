import inquirer from "inquirer";
let todoApp = ["Hamza", "Ali", "Haris", "Humaiyon"];
async function makeApp(todoApp) {
    do {
        let ans = await inquirer.prompt({
            name: "selection",
            message: "Select an Operation",
            type: "list",
            choices: ["Add", "Read", "Update", "Delete"],
        });
        if (ans.selection == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add Item",
                name: "Todo",
            });
            todoApp.push(addTodo.Todo);
            console.log(todoApp);
        }
        if (ans.selection == "Read") {
            console.log(todoApp);
        }
        if (ans.selection == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Select item to update",
                name: "todo",
                choices: todoApp.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add Item",
                name: "Todo",
            });
            let newTodoApp = todoApp.filter((val) => val !== updateTodo.todo);
            todoApp = [...newTodoApp, addTodo.Todo];
            console.log(todoApp);
        }
        if (ans.selection == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Select item to update",
                name: "todo",
                choices: todoApp.map((item) => item),
            });
            let newTodoApp = todoApp.filter((val) => val !== deleteTodo.todo);
            todoApp = [...newTodoApp];
            console.log(todoApp);
        }
    } while (true);
}
makeApp(todoApp);
