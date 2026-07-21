// Todo List

const tasks = []; // init where todo will go

while(true){
    // asking for user input
    let task = prompt(" Enter a task or type done to finish the list:");

    // check if the user input is done or Done or DONE
    if (task.toLowerCase() === 'done'){
        break;
    }

    tasks.push(task) // adding user input to task
}

// TO display task

// console.log("Your Todo List:")
// tasks.forEach((task, index) => {
//     console.log(`${index + 1}. ${task}`);
// })


// with for loop

console.log("Your Todo List:");

for (let i = 0; i < tasks.length; i++){
    console.log(`${i + 1}. ${tasks[i]}`);
}