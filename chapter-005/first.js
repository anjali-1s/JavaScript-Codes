let marks = [98,56,89,48];
console.log(marks);

console.log(marks.length);   // property

let heroes = ["ironman","hulk","shaktiman","batsman"];
console.log(heroes);
console.log(heroes[2]);
heroes[1] = "Captain America";
console.log(heroes);

// use loops in arrays
for (let i = 0; i < heroes.length; i++){
     console.log(heroes[i]);
}

for (let hero of heroes){
     console.log(hero);
}

// string methods
let foodItems = ["potato","apple","litchi","tomato"];
console.log(foodItems);
console.log(foodItems.push("capsicum"));
console.log(foodItems);

console.log(foodItems.pop());

console.log(marks.toString());

let dc_heroes = ["thor","spiderman"];
heroes = heroes.concat(dc_heroes);
console.log(heroes);

heroes.unshift("thor");
console.log(heroes);

heroes.shift("thor");
console.log(heroes);

console.log(heroes.slice(1,3));

let arr = [1,2,3,4,5,6];
arr.splice(2,2,101,102);
console.log(arr);

arr.splice(2,1);
console.log(arr);
console.log(arr.splice(4))