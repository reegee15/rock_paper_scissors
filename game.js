let playerSelection, computerSelection;
const div = document.createElement("div");

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
	document.body.appendChild(div);
	div.innerHTML =  playRound(playerSelection, computerSelection);
	console.log(div.innerHTML);
}

//console.log(playRound("rock", computerSelection));
