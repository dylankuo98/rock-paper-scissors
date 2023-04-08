let playerScore = 0;
let computerScore = 0;
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
      return "It's a Tie"
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++
      return "Player Wins"
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      computerScore++
      return "Computer Loses"
    }
  }

function game() {
    for (let i = 0; i < 5; i++) {
    playerSelection = prompt('Rock, Paper, Scissors').toUpperCase();
    console.log("You chose " + playerSelection)

    computerSelection = getComputerChoice();
    console.log("The computer chose " + computerSelection)

    console.log(playRound(playerSelection, computerSelection));
    }
        if (playerScore>computerScore) {
            return "Game Over - Player Wins"
        } if (playerScore<computerScore) {
            return "Game Over - Computer Wins"
        } if (playerScore==computerScore) {
            return "Game Over - It's a Tie"
        }
}

console.log (game()); 
