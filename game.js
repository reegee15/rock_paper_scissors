const score = document.querySelector("#score");
let playerSelection, computerSelection;
let btn1 , btn2, btn3, reset, score_text;
let pWins = 0, cWins = 0;
buttons = document.querySelector("#buttons");
btn1 = document.querySelector(".btn1");
btn2 = document.querySelector(".btn2");
btn3 = document.querySelector(".btn3");
reset = document.querySelector(".reset-btn");
score_text = document.querySelector("#score-text");


let pDisplay=document.createElement("div");
pDisplay.className = "display";
score.appendChild(pDisplay);
pDisplay.textContent = "Player Score: " + 0;
let cDisplay=document.createElement("div");
score.appendChild(cDisplay);
cDisplay.textContent = "Computer Score: " + 0;

reset.addEventListener("click", function(){
    console.clear();
    pWins = 0;
    cWins = 0;
    pDisplay.textContent= "Player Score: " + 0;
    cDisplay.textContent = "Computer Score: " + 0;
    score_text.textContent = "";
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
        score_text.textContent = `Tie. ${playerSelection} = ${computerSelection}`;
        return "TIE";
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        score_text.textContent = `You Win. ${playerSelection} beats ${computerSelection}`;
        return "WIN";
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        score_text.textContent = `You Win. ${playerSelection} beats ${computerSelection}`;
        return "WIN";
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        score_text.textContent = `You Win. ${playerSelection} beats ${computerSelection}`;
        return "WIN";
    }
    else{
        score_text.textContent = `You Lose. ${computerSelection} beats ${playerSelection}`;
        return "LOSE";
    }
}

function game(){
    let round = playRound(playerSelection, computerSelection)
    if(round === "WIN"){
        pWins++;
        pDisplay.textContent = "Player Score: " + pWins;
        console.log(pWins);

        if(pWins === 5){
            score_text.textContent = "Player Wins!";
            btn1.disabled = true;
			btn2.disabled = true;
			btn3.disabled = true;
        }
    }
    else if(round === "LOSE"){
        cWins++;
        cDisplay.textContent = "Computer Score: " + cWins;
        console.log(cWins);

        if(cWins === 5){
            score_text.textContent = "Computer Wins!";
            btn1.disabled = true;
			btn2.disabled = true;
			btn3.disabled = true;
        }
    }
    
}