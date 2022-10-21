// WRITE YOUR CODE HERE
var student = ["Kris", "Tim", "Patel", "John"]

console.log(student.length);

console.log("Welcome to the class " + student[0]);
console.log("Welcome to the class " + student[1]);
console.log("Welcome to the class " + student[2]);
console.log("Welcome to the class " + student[3]);


student[0] = "Bob";

if (student[0] === "Bob") {
    console.log(student[0] + " is in the class!");
}