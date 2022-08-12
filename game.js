let playerSelection, computerSelection;
let playerWins = 0, comWins = 0;

const div = document.createElement("div");
const pTally =document.querySelector(".player-score");
const cTally =document.querySelector(".computer-score");
const reset = document.createElement("button");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click",  () => playerSelection="rock");
btn1.addEventListener("click", game);

btn2.addEventListener("click", () => playerSelection="paper");
btn2.addEventListener("click", game);

btn3.addEventListener("click", () => playerSelection="scissors");
btn3.addEventListener("click", game);

function computerPlay(){
	var random = Math.floor(Math.random() * 3);
	if (random === 0){
		return "rock";
	}
	else if (random === 1){
		return "paper";
	}
	else if (random === 2){
		return "scissors";
	}
}

function playRound(playerSelection, computerSelection){
	//playerSelection.toLowerCase();
	computerSelection = computerPlay();
	if (playerSelection === "rock" && computerSelection === "scissors"){ 
		document.body.appendChild(div);
		div.textContent = `You Win. ${playerSelection} beats ${computerSelection}`;
		return "Win";
	}
	else if (playerSelection === "scissors" && computerSelection === "paper"){
		document.body.appendChild(div);
		div.textContent = `You Win. ${playerSelection} beats ${computerSelection}`;
		return "Win";
	}
	else if (playerSelection === "paper" && computerSelection === "rock"){
		document.body.appendChild(div);
		div.textContent = `You Win. ${playerSelection} beats ${computerSelection}`;
		return "Win";
	}
	else if (playerSelection === computerSelection ){
		document.body.appendChild(div);
		div.textContent = `You both chose ${playerSelection}`;
		return "Tie";
	} else{
		document.body.appendChild(div);
		div.textContent = `You lose. ${computerSelection} beats ${playerSelection}`;
		return "Loss";
	} 
		
}

function game(){
	playRound(playerSelection, computerSelection);
	if(playRound(playerSelection, computerSelection) === "Win"){
		playerWins += 1;
		pTally.textContent =  "Player Score: " + playerWins;
		console.log(playerWins + " P");

		if(playerWins === 5){
			div.innerHTML = "You Win!";
			console.log(div.innerHTML);
			document.body.appendChild(reset);
			reset.textContent = "Reset Game";
			reset.addEventListener("click", () => location.reload() );
		}
		
	}
	else if(playRound(playerSelection, computerSelection) === "Loss"){
		comWins += 1;
		//change to be under a div or sum

		cTally.textContent = "Computer Score: " + comWins;
		console.log(comWins + " C")

		if(comWins === 5){
			div.innerHTML = "Computer Wins!";
			console.log("C Win");
			reset.textContent = "Reset Game";
			document.body.appendChild(reset);
			reset.addEventListener("click", () => location.reload() );
		}
		
	}
}
//console.log(playRound("rock", computerSelection));
