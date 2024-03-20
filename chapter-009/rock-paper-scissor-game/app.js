let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
// const msg = document.querySelectorAll("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
};

const drawGame = () => {
    msg.innerText = "Game was draw.Play Again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin,choiceId,compchoice) => {
    if(userwin) {
        userScore = userScore + 1;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${choiceId} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore = compScore + 1;
        compScorePara.innerText = compScore;
        msg.innerText = `You loose! ${compchoice} beats Your ${choiceId}`
        msg.style.backgroundColor = "red";
    }
}

const playGame = (choiceId) => {
        console.log("user choice = ",choiceId);

        // Generate computer choice -> modular
        const compchoice = gencompchoice();
        console.log("computer choice = ",compchoice);

        if(choiceId === compchoice){
            // Draw game
            drawGame();
        } else {
            let userwin = true;
            if(choiceId === "rock"){
                // scissors , paper
                userwin = compchoice === "paper" ? false : true;
            }
            else if(choiceId === "paper"){
                //rock,scissors
                userwin = compchoice === "scissors"? false : true;
            } else {
                // rock,paper
                userwin = compchoice === "rock"?false:true;
            }

            showWinner(userwin,choiceId,compchoice);
        }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const choiceId = choice.getAttribute("id");
        // console.log("choice was clicked",choiceId);
        playGame(choiceId);
    });
});