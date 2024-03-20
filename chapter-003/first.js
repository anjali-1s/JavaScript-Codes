// For loop
let sum = 0;
for (let i = 1; i <= 9; i++){
     sum+=i;
}

console.log("sum is:",sum);
console.log("Loop has ended")

// while loop
// let i = 1
// while (i<=5){
//      console.log(i);
//      i++;
// }

// do-while loop
let i = 1;
do{
     console.log("Apna College");
     i++;
}while(i <= 10);

// for-of loop
let size = 0;
let str = "ApnaCollege"
for (let i of str){
     console.log(i);
     size++;
}
console.log("size of the string is:",size)

// for-in loop
let student = {
     name:"Anjali Singh",
     age:20,
     cgpa:7.5,
     isPass:true,
};

for (let key in student){
     console.log("key = ",key," ","Value = ",student[key]);
}

