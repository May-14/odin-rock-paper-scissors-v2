function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 3) {
        return "paper";
    } else if (randomNumber === 2) {
        return "rock";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = parseInt(prompt("Type 0 to choose paper, 1 to choose rock and 2 to choose scissors: "));
    while (humanChoice !== 0 && humanChoice !== 1 && humanChoice !== 2) {
        humanChoice = parseInt(prompt("Please type 0 to choose paper, 1 to choose rock and 2 to choose scissors: "));
    }
    if (humanChoice === 0) {
        return "paper";
    } else if (humanChoice === 1) {
        return "rock";
    } else {
        return "scissors";
    }
}

