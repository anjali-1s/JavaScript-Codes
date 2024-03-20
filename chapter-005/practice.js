let marks = [85,97,44,37];
let sum = 0;
for(let i = 0; i < marks.length; i++){
     console.log(i,"",marks[i]);
     sum = sum + marks[i];
}
console.log(sum);

let avg = sum/marks.length;
console.log("Average marks of the class is:",avg);