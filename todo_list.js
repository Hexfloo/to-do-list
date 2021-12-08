let todoArray = []

let command = prompt("Enter a new command");

while (command !== "quit" && command !== "q") {
    if (command === "new") {
        let todo = prompt("Enter a new list item");
        todoArray.push(todo);
        console.log(`${todo} added to list`);
        command = prompt("Enter a new command");
    } else if (command === "list") {
        console.log("***Your List***");
        for (let i = 0; i < todoArray.length; i++) {
            console.log(`${i}: ${todoArray[i]}`)
        }
        console.log("***************");
        command = prompt("Enter a new command");
    } else if (command === "delete") {
        let todoDelete = parseInt(prompt("What item number do you want to delete?"));
        while (Number.isNaN(todoDelete)) {
            todoDelete = parseInt(prompt("Enter a valid item number"));
        }
        console.log(`${todoArray[todoDelete]} deleted from list`);
        todoArray.splice(todoDelete, 1);
        command = prompt("Enter a new command");
    } else {
        command = prompt("Enter a new command");
    }
}

while (command === "quit" || command === "q") {
    console.log("You quit the program");
    break;
}