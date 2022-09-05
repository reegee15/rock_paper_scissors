const score = document.querySelector("#score");
let playerSelection, computerSelection;
let btn1 , btn2, btn3, reset;
let pWins = 0, cWins = 0;
buttons = document.querySelector("#buttons");
btn1 = document.querySelector(".btn1");
btn2 = document.querySelector(".btn2");
btn3 = document.querySelector(".btn3");
reset = document.querySelector(".reset-btn");


let pDisplay=document.createElement("div");
pDisplay.className = "display";
score.appendChild(pDisplay);
pDisplay.textContent = 0;
let cDisplay=document.createElement("div");
score.appendChild(cDisplay);
cDisplay.textContent = 0;

reset.addEventListener("click", function(){
    console.clear();
    pWins = 0;
    cWins = 0;
    pDisplay.textContent= 0;
    cDisplay.textContent = 0;
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
} );

btn1.addEventListener("click", function (){
    playerSelection ="Rock";
    game();
});
btn2.addEventListener("click", function (){
    playerSelection ="Paper";
    game();
});
btn3.addEventListener("click", function (){
    playerSelection ="Scissors";
    game();
});


function computerChoice(){
    let random = Math.floor(Math.random() * 3);
    if (random === 0){
        return "Rock";
    }
    else if (random === 1){
        return "Paper";
    }
    else if (random === 2){
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerChoice();
    if(playerSelection === computerSelection){
        console.log(`Tie. ${playerSelection} = ${computerSelection}`);
        return "TIE";
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        console.log(`You Win. ${playerSelection} beats ${computerSelection}`);
        return "WIN";
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        console.log(`You Win. ${playerSelection} beats ${computerSelection}`);
        return "WIN";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        console.log(`You Win. ${playerSelection} beats ${computerSelection}`);
        return "WIN";
    }
    else{
        console.log(`You Lose. ${computerSelection} beats ${playerSelection}`);
        return "LOSE";
    }
}

function game(){
    let round = playRound(playerSelection, computerSelection)
    if(round === "WIN"){
        pWins++;
        pDisplay.textContent = pWins;
        console.log(pWins);

        if(pWins === 5){
            console.log("Player Wins!");
            btn1.disabled = true;
			btn2.disabled = true;
			btn3.disabled = true;
        }
    }
    else if(round === "LOSE"){
        cWins++;
        cDisplay.textContent = cWins;
        console.log(cWins);

        if(cWins === 5){
            console.log("Computer Wins!");
            btn1.disabled = true;
			btn2.disabled = true;
			btn3.disabled = true;
        }
    }
    
}


