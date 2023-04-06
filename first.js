function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return("It's a tie!");
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return("You Win!");
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return("You Lose!");
    }
}


let playerSelection = prompt('Rock, Paper, Scissors').toUpperCase();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
let playerScore = 0;
let computerScore = 0;