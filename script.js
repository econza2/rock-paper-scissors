function getComputerChoice() {
    let randomVariable = Math.floor(Math.random() * 3);
    
    if (randomVariable === 1) {
        return "Rock";
    }
    else if (randomVariable === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    userInput = prompt("Please Enter Your Pick");
    lowercaseInput = userInput.toLowerCase();
    
    if (lowercaseInput === "rock") {
        console.log(lowercaseInput);
        return lowercaseInput;
    }
    else if (lowercaseInput === "paper") {
        console.log(lowercaseInput);
        return lowercaseInput;
    }
    else if (lowercaseInput === "scissors") {
        console.log(lowercaseInput);
        return lowercaseInput;
    }
    else {
        console.log("You have entered an invalid entry");
    }
}

let humanChoice;
let computerChoice;

let humanScore = 0;
let computerScore = 0;


function playRound(computerDecision, humanDecision) {
    

    if (computerChoice === "Rock" && humanChoice === "rock") {
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Draw! You both chose Rock");
        return "You Draw! You both chose Rock";
    }
    else if (computerChoice === "Rock" && humanChoice === "paper") {
        humanScore++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Win! Paper beats Rock");
        return "You Win! Paper beats Rock";
    }
    else if (computerChoice === "Rock" && humanChoice === "scissors") {
        conputerScore ++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Lose! Rock beats Scissors");
        return "You Lose! Rock beats Scissors";
    }
    else if (computerChoice === "Paper" && humanChoice === "rock") {
        computerScore ++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Lose! Paper beats Rock");
        return "You Lose! Paper beats Rock";
    }
    else if (computerChoice === "Paper" && humanChoice === "paper") {
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Draw! You both chose Paper");
        return "You Draw! You both chose Paper";
    }
    else if (computerChoice === "Paper" && humanChoice === "scissors") {
        humanScore++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Win! Scissors beats Paper");
        return "You Win! Scissors beats Paper";
    }
    else if (computerChoice === "Scissors" && humanChoice === "rock") {
        humanScore++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Win! Rock beats Scissors");
        return "You Win! Rock beats Scissors";
    }
    else if (computerChoice === "Scissors" && humanChoice === "paper") {
        conputerScore ++;
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        console.log("You Lose! Scissors beats Paper");
        return "You Lose! Scissors beats Paper";
    }
    else if (computerChoice === "Scissors" && humanChoice === "scissors") {
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


function playGame() {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);

    if (humanScore>computerScore){
        return "YOU WIN";
    }
    else {
        return "COMPUTER WINS";
    }
}


console.log(playGame());

