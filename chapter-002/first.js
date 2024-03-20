// This code prints hello world
console.log("Hello World")

/* This is a code that prints 
hello world on the screen*/


// Operators
// Arithmetic Operators
let a = 5;
let b = 3;
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);
console.log("a ** b = ",a**b);  // 5^3

// unary Operator
a = a+1;
console.log(a);
a++;
console.log(a);

a--;
console.log(a)
console.log(--a);
console.log(a++)
console.log(a)

// Assignment Operator
console.log(a+=4)
console.log(a-=3)
console.log(a*=3)
console.log(a/=7)
console.log(b**=a)

// Comparison Operator
let c = 5;
let d = 3;

console.log("c == d",c==d)
console.log("c != d",c!=d)
console.log("c === d",c===d)
console.log("c !== d",c!==d)
console.log("c > d",c>d)
console.log("c <= d",c<=d)
console.log("c >= d",c>=d)

// Logical Operator
let num1 = 6;
let num2 = 5;

let cond1 = num1 > num2;
let cond2 = num1 == 6;
console.log("cond1 && cond2",cond1&&cond2);
console.log("cond1 || cond2",cond1||cond2);
console.log("!(num1 < num2)",!(num1<num2))

// Ternary Operator
let Age = 25;
let result = Age >= 18 ? "Adult" : "Not adult"
console.log(result);

// Conditional Statement
// 1) If statement
let age = 20;
if (age >= 18) {
     console.log("You can Vote")
}

if (age < 18) {
     console.log("You cannot Vote")
}

let mode = "dark";
let color;

if (mode == "dark"){
     color = "black"
}

if (mode == "light"){
     color = "White"
}

console.log(color)

// 2) If-else
let weather = "sunny";

if(weather == "sunny"){
     console.log("You can go to play!")
}

else {
     console.log("You can't go to play!")
}

// 3) elif - statement
let mode1 = "dark";
let color1;

if (mode1 == "dark") {
     color1 = "dark";
}

else if (mode1 == "blue") {
     color1 = "blue"
}

else if (mode1 == "Pink") {
     color1 = "Pink"
}

else {
     color = white
}

console.log(color1)

// Switch Statement
const expr = "Papayas"
switch (expr) {
     case 'Oranges':
          console.log("Oranges are 50.89 a pound");
          break;

     case 'Mangoes':
     case 'Papayas':
          console.log("Mangoes and Papayas are 52.79 a pound");
          break;
     
     default:
          console.log("Sorry, we are not ${expr}.");
}