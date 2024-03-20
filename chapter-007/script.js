    // let div = document.querySelector("div");
    // console.log(div);

    // console.log(div.style);

    // let id = div.getAttribute("id");
    // console.log(id);

    // let names = div.getAttribute("name");
    // console.log(names);

    // let para = document.querySelector("p");
    // console.log(para);

    // let classes = para.getAttribute("class");
    // console.log(classes);

    // div.style.backgroundColor = "purple";
    // div.style.fontSize = "30px";
    // div.style.fontFamily = "italic";
    // div.style.color = "white";

    // // div.innerText = "Hello!";
    // let newbtn = document.createElement("button");
    // newbtn.innerText = "click me!";
    // console.log(newbtn);

    // div.append(newbtn);
    // div.prepend(newbtn);
    // div.before(newbtn);


    // let newheading = document.createElement("h1");
    // newheading.innerHTML = "<i>Hii , I am new!</i>";
    // document.querySelector("body").prepend(newheading);

    // para.remove();
    // newheading.remove();

    // practice - question - 001
let newbtn = document.createElement("button");
newbtn.innerText = "click";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newbtn);

// practice - question - 002
let paras = document.querySelector("p");
console.log(paras.getAttribute("class"));
// console.log(paras.setAttribute("class","newclass"));

let para = document.querySelector("p");
para.classList.add("newclass");