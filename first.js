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
        return("It's a tie! You both picked ${playerSelection}");
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return("You Win! Rock beats Scissors");
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return("You Win! Paper beats Rock");
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return("You Win! Scissors beats Paper");
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return("You Lose! Rock beats Scissors");
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return("You Lose! Scissors beats Paper");
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return("You Lose! Paper beats Rock");
    }
}

const playerSelection = prompt('Rock, Paper, Scissors').toUpperCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));