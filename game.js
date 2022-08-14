let playerSelection, computerSelection;
let playerWins = 0, comWins = 0;

const pTally =document.querySelector(".player-score");
const cTally =document.querySelector(".computer-score");
const reset_div = document.querySelector("#reset-div");
const reset = document.querySelector(".reset-btn");
const div = document.createElement("div");
div.setAttribute("class", "divy");

//reference 
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.addEventListener("click",  () => playerSelection="Rock");
btn1.addEventListener("click", game);

btn2.addEventListener("click", () => playerSelection="Paper");
btn2.addEventListener("click", game);

btn3.addEventListener("click", () => playerSelection="Scissors");
btn3.addEventListener("click", game);

function computerPlay(){
	var random = Math.floor(Math.random() * 3);
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
	//playerSelection.toLowerCase();
	computerSelection = computerPlay();
	if (playerSelection === "Rock" && computerSelection === "Scissors"){ 
		document.body.insertBefore(div, reset_div);
		div.textContent = `You Win. ${playerSelection} beats ${computerSelection}`;
		return "Win";
	}
	else if (playerSelection === "Scissors" && computerSelection === "Paper"){
		document.body.insertBefore(div, reset_div);
		div.textContent = `You Win. ${playerSelection} beats ${computerSelection}`;
		return "Win";
	}
	else if (playerSelection === "Paper" && computerSelection === "Rock"){
		document.body.insertBefore(div, reset_div);
		div.textContent = `You Win. ${playerSelection} beats ${computerSelection}`;
		return "Win";
	}
	else if (playerSelection === computerSelection ){
		document.body.insertBefore(div, reset_div);
		div.textContent = `You both chose ${playerSelection}`;
		return "Tie";
	} else{
		document.body.insertBefore(div, reset_div);
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
			btn1.disabled = true;
			btn2.disabled = true;
			btn3.disabled = true;
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
			btn1.disabled = true;
			btn2.disabled = true;
			btn3.disabled = true;
			reset.addEventListener("click", () => location.reload() );
		}
		
	}
}
//console.log(playRound("rock", computerSelection));
