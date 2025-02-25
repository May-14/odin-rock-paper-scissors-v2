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
