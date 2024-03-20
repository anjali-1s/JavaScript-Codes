let btn = document.querySelector("#btn1");
btn.addEventListener("click",()=> {
    console.log("button was clicked");
})
// btn.onclick = () => {
//     console.log("button was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// btn.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }

// let div = document.querySelector("div");
// div.onmouseover = (event) => {
//     console.log("You are inside div");
//     console.log(event.type);
// }


let div = document.querySelector("div");
div.addEventListener("mouseover",() => {
    console.log("Event listening of div-handler1");
});

div.addEventListener("mouseover",() => {
    console.log("Event listening of div-handler2");
});

const handler3 = () => {
    console.log("Event listening of div-handler3");
};

div.removeEventListener("mouseover",handler3);

let modebtn = document.querySelector("#btn2");
let currmode = "light";

modebtn.addEventListener ("click",() => {
    console.log("You are trying to change mode");

    if(currmode === "light"){
        currmode="dark";
        // document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else {
        currmode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }   

    console.log(currmode);
});
