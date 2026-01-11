// Grade system CODE

let marks = 86;
if (marks > 100 || marks < 0) {
  console.log("Given data is incorrect.....");
} else if (marks >= 33 && marks < 40) {
  console.log("Your grade is D.");
} else if (marks >= 40 && marks < 50) {
  console.log("Your grade is C.");
} else if (marks >= 50 && marks < 60) {
  console.log("Your grade is B.");
} else if (marks >= 60 && marks < 70) {
  console.log("Your grade is A-.");
} else if (marks >= 70 && marks < 80) {
  console.log("Your grade is A");
} else if (marks >= 80 && marks <= 100) {
  console.log("Your grade is A+, Congratulations.");
} else {
  console.log("Your are failed");
}

// Matrimony system code

let gender = "Male";
let area = "Dhaka";
let age = 25;
let income = 999999;

if (gender !== "Male") {
  console.log("Sorry we are looking for male only,.....");
} 
else if (area !== "Dhaka") {
  console.log("We are looking for Dhaka only");
} 
else if (income < 100000) {
  console.log("You are  poor . better luck next time....");
} 
else if (age <= 22) {
  console.log("Grow up buddy.....");
} 
else {
  console.log("Congratulation you are selected");
}
