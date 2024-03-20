function countvowels(str){
     let count = 0;
     for(const char of str){
          if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
               count++;
          }     
     }
     console.log(count);
}

const countVowels = (str) => {
     let count = 0;
     for (let char of str){
          if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
               count++;
          }     
     }
     console.log(count);
}

countvowels("Anjali Singh")

// forEach  loop in arrays
let arr = ["delhi","pune","goa"];

arr.forEach((val,idx,arr) => {
     console.log(val.toUpperCase(),idx,arr);
});

let arr2 = [1,2,3,4,5];

arr2.forEach((val,idx) => {
     val *= val;
     console.log(arr2[idx],val);
});
console.log(arr2)