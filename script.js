function getComputerChoice() {
    let randomVariable = Math.floor(Math.random() * 3);
    
    if (randomVariable === 1) {
        return "The Computer has selected ROCK";
    }
    else if (randomVariable === 2) {
        return "The Computer has selected PAPER";
    }
    else {
        return "The Computer has selected SCISSORS";
    }
}

let humanChoice;
let computerChoice;

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;


function playRound(computerChoice, humanChoice) {
    

    if (computerChoice === "The Computer has selected ROCK" && humanChoice === "You have selected ROCK") {
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("current Round is " + currentRound);
        console.log("You Draw! You both chose Rock");
        return "You Draw! You both chose Rock";
    }
    else if (computerChoice === "The Computer has selected ROCK" && humanChoice === "You have selected PAPER") {
        humanScore++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("current Round is " + currentRound);
        console.log("You Win! Paper beats Rock");
        return "You Win! Paper beats Rock";
    }
    else if (computerChoice === "The Computer has selected ROCK" && humanChoice === "You have selected SCISSORS") {
        computerScore ++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("current Round is " + currentRound);
        console.log("You Lose! Rock beats Scissors");
        return "You Lose! Rock beats Scissors";
    }
    else if (computerChoice === "The Computer has selected PAPER" && humanChoice === "You have selected ROCK") {
        computerScore ++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Lose! Paper beats Rock");
        return "You Lose! Paper beats Rock";
    }
    else if (computerChoice === "The Computer has selected PAPER" && humanChoice === "You have selected PAPER") {
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Draw! You both chose Paper");
        return "You Draw! You both chose Paper";
    }
    else if (computerChoice === "The Computer has selected PAPER" && humanChoice === "You have selected SCISSORS") {
        humanScore++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Win! Scissors beats Paper");
        return "You Win! Scissors beats Paper";
    }
    else if (computerChoice ===  "The Computer has selected SCISSORS"&& humanChoice === "You have selected ROCK") {
        humanScore++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Win! Rock beats Scissors");
        return "You Win! Rock beats Scissors";
    }
    else if (computerChoice === "The Computer has selected SCISSORS" && humanChoice === "You have selected PAPER") {
        computerScore ++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Lose! Scissors beats Paper");
        return "You Lose! Scissors beats Paper";
    }
    else if (computerChoice === "The Computer has selected SCISSORS" && humanChoice === "You have selected SCISSORS") {
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Draw! You both chose Scissors");
        return "You Draw! You both chose Scissors";
    }
    else {
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You have entered an invalid entry");
        return "You have entered an invalid entry";
    }  
}



function checkRounds (rounds) {

    if (rounds == 5) {
        const buttonContainer = document.querySelector(".button-container");
        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart";

        const outcome = document.querySelector(".outcome");
        const outcomeText = document.createElement("h2");
        outcomeText.style.color = "red";
        outcome.appendChild(outcomeText);

        body.removeChild(buttonContainer);
        body.appendChild(restartButton);

        if (humanScore > computerScore) {
            outcomeText.textContent = "YOU WIN";
        }
        else if (humanScore < computerScore) {
            outcomeText.textContent = "THE COMPUTER WINS";
        }
        else {
            outcomeText.textContent = "YOU DRAW WITH THE COMPUTER";
        }

        restartButton.addEventListener("click", () => {
            currentRound = 0;
            humanScore = 0;
            computerScore = 0;
            currentRoundDisplay.textContent = "Current Round is: " + currentRound;
            humanScoreDisplay.textContent = "Human Score is: " + humanScore;
            computerScoreDisplay.textContent = "Computer Score is: " + computerScore;
            body.appendChild(buttonContainer);
            body.removeChild(restartButton);
            outcome.removeChild(outcomeText);
        });
    }

}


const humanSelectionDiv = document.querySelector(".human-selection");
const computerSelectionDiv = document.querySelector(".computer-selection");
const currentRoundDisplay = document.querySelector(".current-round");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const body = document.querySelector("body");


const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");


const playerSelectionWriteup = document.createElement("h2");
const computerSelectionWriteup = document.createElement("h2");
const displayCurrentScore = document.createElement("h2");


rockButton.addEventListener("click", () => {
    playerSelectionWriteup.textContent = "You have selected ROCK";
    humanSelectionDiv.appendChild(playerSelectionWriteup);
    computerSelectionWriteup.textContent = getComputerChoice();
    humanSelectionDiv.appendChild(computerSelectionWriteup);
    playRound(computerSelectionWriteup.textContent, playerSelectionWriteup.textContent);
    currentRound++;
    currentRoundDisplay.textContent = "Current Round is: " + currentRound;
    humanScoreDisplay.textContent = "Human Score is: " + humanScore;
    computerScoreDisplay.textContent = "Computer Score is: " + computerScore;
    checkRounds(currentRound);
    
});


paperButton.addEventListener("click", () => {
    playerSelectionWriteup.textContent = "You have selected PAPER";
    humanSelectionDiv.appendChild(playerSelectionWriteup);
    computerSelectionWriteup.textContent = getComputerChoice();
    humanSelectionDiv.appendChild(computerSelectionWriteup);
    playRound(computerSelectionWriteup.textContent, playerSelectionWriteup.textContent);
    currentRound++;
    currentRoundDisplay.textContent = "Current Round is: " + currentRound;
    humanScoreDisplay.textContent = "Human Score is: " + humanScore;
    computerScoreDisplay.textContent = "Computer Score is: " + computerScore;
    checkRounds(currentRound);
});


scissorsButton.addEventListener("click", () => {
    playerSelectionWriteup.textContent = "You have selected SCISSORS";
    humanSelectionDiv.appendChild(playerSelectionWriteup);
    computerSelectionWriteup.textContent = getComputerChoice();
    humanSelectionDiv.appendChild(computerSelectionWriteup);
    playRound(computerSelectionWriteup.textContent, playerSelectionWriteup.textContent);
    currentRound++;
    currentRoundDisplay.textContent = "Current Round is: " + currentRound;
    humanScoreDisplay.textContent = "Human Score is: " + humanScore;
    computerScoreDisplay.textContent = "Computer Score is: " + computerScore;
    checkRounds(currentRound);
});




