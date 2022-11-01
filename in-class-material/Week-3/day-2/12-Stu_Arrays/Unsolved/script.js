// WRITE YOUR CODE HERE

var students = ["Kris", "Ryan", "John", "Matt"];

console.log(students.length);

console.log("Welcome to the class " + students[0]);
console.log("Welcome to the class " + students[1]);
console.log("Welcome to the class " + students[2]);
console.log("Welcome to the class " + students[3]);

students[0] = "Bob";

if(students[0] === "Bob") {
    console.log(students[0] + " is in the class");
}
