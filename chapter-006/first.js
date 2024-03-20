// function definition
function myFunction(msg){
     // parameter -> input
     console.log(msg);
}

myFunction("i love JS");// Argument

// examples
function sum(a,b){
     //console.log("sum is:",a+b);
     // local variable -> a , b
     s = a+b;
     return s;
}

let result = sum(10,20);
console.log(result);


// Arrow Functions
const Arrowsum = (a,b) => {
     console.log(a+b);
}

Arrowsum(2,3);

const arrowMul = (a,b) => {
     return a*b;
}

let res = arrowMul(26,2);
console.log(res);