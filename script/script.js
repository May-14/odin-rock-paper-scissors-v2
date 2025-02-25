// through the whole code, paper is 1, scissors is 2, and rock is 3


function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt("Type 1 to choose paper, 2 to choose scissors and 3 to choose rock: "));
    while (humanChoice !== 1 && humanChoice !== 2 && humanChoice !== 3) {
        humanChoice = parseInt(prompt("Please type 1 to choose paper, 2 to choose scissors and 3 to choose rock: "));
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice > computerChoice) {
        if ((humanChoice - computerChoice) === 2) {
            computerScore += 1;
            return "You lost, " + numberToChoice(computerChoice) + " beats " + numberToChoice(humanChoice) + ".";
        } else {
            humanScore += 1;
           return "You won, " + numberToChoice(humanChoice) + " beats " + numberToChoice(computerChoice) + ".";
        }
    } else if (computerChoice > humanChoice) {
        if ((computerChoice - humanChoice) === 2) {
            humanScore += 1;
            return "You won, " + numberToChoice(humanChoice) + " beats " + numberToChoice(computerChoice) + ".";
        } else {
            computerScore += 1;
            return "You lost, " + numberToChoice(computerChoice) + " beats " + numberToChoice(humanChoice) + ".";
        }
    } else {
        return "Tie, both chose " + numberToChoice(computerChoice) + ".";
    }
}

function numberToChoice(number) {
    if (number === 1) {
        return "paper";
    }
    if (number === 2) {
        return "scissors";
    }
    return "rock";
}

function playGame() {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    let finalMessage = computerScore > humanScore ? `Computer wins with a score of ${computerScore} to ${humanScore}` :
     computerScore === humanScore ? `Game tied ${humanScore} to ${computerScore}.` :
     `User wins with a score of ${humanScore} to ${computerScore}`;
    humanScore = 0;
    computerScore = 0;
    return finalMessage;
}

console.log(playGame());