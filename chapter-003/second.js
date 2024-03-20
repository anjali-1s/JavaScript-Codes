// Print all the even number from 0 to 100.
for (let num = 0; num <= 100; num++){
     if (num % 2 == 0){
          console.log("num = ",num);
     }
}

// Practice Question
let gameNum = 25;

let userNum = prompt("Guess the game number:");

while(userNum != gameNum){
     console.log("you have entered the wrong number!")
}

console.log("Congratulations,You entered the right number");