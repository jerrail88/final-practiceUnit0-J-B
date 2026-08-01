// TaskFlow - a simple to-do list app
// Each section below is a small code example demonstrating one skill
// from a Unit 0 module, all working together as pieces of the same app.
// This is NOT a complete app - just isolated examples of the skills.

// ---------------------------------------------------------
// Module: Values, Data Types, and Operations
// Pseudocode:
//   1. Store a task count as a number
//   2. Use a comparison operation to get a boolean (are there any tasks?)
//   3. Use a string (template literal) to describe the result
// ---------------------------------------------------------
let taskCount = 4; // number - how many tasks are in the list
let hasTasks = taskCount > 0; // boolean - result of a comparison operation
console.log(`Total tasks: ${taskCount}`); // string - combines the number into a message
console.log(hasTasks); // true - confirms the comparison operation worked

// ---------------------------------------------------------
// Module: Stringing Characters Together
// Pseudocode:
//   1. Take in raw task text typed by a user
//   2. Remove extra whitespace from both ends
//   3. Capitalize the first letter so it displays cleanly
//   4. Return the cleaned-up text
// ---------------------------------------------------------
function formatTaskText(rawText) {
  let trimmed = rawText.trim(); // string skill - remove extra leading/trailing whitespace
  let capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1); // string skill - capitalize first letter
  return capitalized;
}

console.log(formatTaskText("  buy groceries")); // "Buy groceries"

// ---------------------------------------------------------
// Module: Control Structures and Logic
// Pseudocode:
//   1. Take in whether a task is complete (true/false)
//   2. If it's complete, return the label "Done"
//   3. Otherwise, return the label "Pending"
// ---------------------------------------------------------
function getStatusLabel(isComplete) {
  if (isComplete) { // control structure - branches based on a condition
    return "Done";
  } else {
    return "Pending";
  }
}

console.log(getStatusLabel(true));  // "Done"
console.log(getStatusLabel(false)); // "Pending"

// ---------------------------------------------------------
// Module: Building Arrays
// Pseudocode:
//   1. Create one array to hold every task
//   2. Each task is its own object with a text value and a complete value
// ---------------------------------------------------------
let tasks = [
  { text: formatTaskText("buy groceries"), complete: false }, // array skill - each element is an object
  { text: formatTaskText("walk the dog"), complete: true },
  { text: formatTaskText("finish JavaScript homework"), complete: false }
];

console.log(tasks);

// ---------------------------------------------------------
// Module: Using Arrays
// Pseudocode:
//   1. Add a new task to the end of the array
//   2. Filter the array down to only the tasks that aren't complete
// ---------------------------------------------------------
tasks.push({ text: formatTaskText("read a book"), complete: false }); // array method - adds a new task to the end

let pendingTasks = tasks.filter(task => !task.complete); // array method - keeps only tasks not yet complete
console.log(pendingTasks);

// ---------------------------------------------------------
// Module: Working With Loops
// Pseudocode:
//   1. Go through every task in the array, one at a time
//   2. For each task, log its text next to its status label
// ---------------------------------------------------------
for (let i = 0; i < tasks.length; i++) { // loop - repeats once per task in the array
  console.log(`${tasks[i].text} - ${getStatusLabel(tasks[i].complete)}`);
}
