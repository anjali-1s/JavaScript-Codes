let marks = prompt("Enter the marks:")
let grade;

if (marks >= 80 && marks <= 100){
     grade = "A";
}
else if (marks >= 70 && marks <= 89){
     grade = "B";
}
else if (marks >= 60 && marks <= 69){
     grade = "C";
}
else if (marks >= 50 && marks <= 59){
     grade = "D";
}
else if (marks >= 40 && marks <= 49){
     grade = "F";
}

console.log("Your grade in exams is:",grade)