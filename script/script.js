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
        if (humanChoice - computerChoice === 2) {
            computerScore += 1
            return "you lost"
        } else {
            humanScore += 1
            return "you won"
        }
    } else if (computerChoice > humanChoice) {
        if (computerChoice - humanChoice === 2) {
            humanScore += 1
            return "you won"
        } else {
            computerScore += 1
            return "you lost"
        }
    } else {
        return "tie"
    }
}