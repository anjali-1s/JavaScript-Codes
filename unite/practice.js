let h2 = document.querySelector("h2");
console.log(h2);
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna College"; // concatenation
console.dir(h2.innerText);

let divs = document.querySelectorAll(".box");
console.log(divs);
divs[0].innerText = "new unique value in first box";
divs[1].innerText = "new unique value in second box";
divs[2].innerText = "new unique value in third box";


// Another method
// let idx = 1;
// for(div of divs) {
//     div.innerText = 'new unique value ${idx}';
//     idx++;
// }