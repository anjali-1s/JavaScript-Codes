// map
let num = [67,52,39];

let numarr = num.map((val) => {
     return val;
});

console.log(numarr);

let calcsquare = (num) => {
     console.log(num*num);
};

// filter
let arr = [1,2,3,4,5,6,7,8];
let evenarr = arr.filter((val) => {
     return val%2==0;
});

console.log(evenarr);

// reduce
const output = arr.reduce((prev,curr) => {
     return prev+curr;
});

console.log(output);

// find largest number in an arrays
const result = arr.reduce((prev,curr) => {
     return prev > curr ? prev : curr;
});

console.log(result);

//1st Practice Question
let marks = [98,29,39,95,48,92];
let filterarr = marks.filter((value) => {
     return value > 90;
});
console.log(filterarr);

// 2nd practice question
let n = prompt("Enter a number:");
let Arr = [];

for(let i = 1; i <=n ; i++){
     Arr[i-1] = i; // 1(0),2(1),3(2),4(3)
}

console.log(Arr);

let Arrsum = Arr.reduce((back,now) => {
     return back+now;
});

console.log(Arrsum);

let Arrmul = Arr.reduce((back,now) => {
     return back*now;
});

console.log(Arrmul);