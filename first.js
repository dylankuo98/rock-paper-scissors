let playerScore = 0;
let computerScore = 0;
let playerSelection = prompt('Rock, Paper, Scissors').toUpperCase();
let computerSelection = getComputerChoice();


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



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Tie"
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++
      return "Win"
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      computerScore++
      return "Lose"
    }
  }

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, Scissors').toUpperCase();
        let computerSelection = getComputerChoice();
        let currentRound = playRound(playerSelection, computerSelection);
        if (currentRound == "You Win!") {
            playerScore++;
        } else if (currentRound == "You Lose!") {
            computerScore++;
        }
    }
}

    
console.log(playRound(playerSelection, computerSelection));
