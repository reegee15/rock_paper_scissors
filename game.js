let playerSelection, computerSelection;

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

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
		return "You Win";
	}
	else if (playerSelection === "scissors" && computerSelection === "paper"){
		return "You Win";
	}
	else if (playerSelection === "paper" && computerSelection === "rock"){
		return "You Win";
	}
	else if (playerSelection === computerSelection ){
		return "Tie";
	} else{
		return `You lose. ${computerSelection} beats ${playerSelection}`;
	} 
		
}

function game(){
	console.log(playRound(playerSelection, computerSelection));
}

computerSelection = computerPlay();
//console.log(playRound("rock", computerSelection));
