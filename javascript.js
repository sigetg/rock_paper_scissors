function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(3*Math.random())];
}


function playRound(computerSelection, playerSelection) {
    let gameResult;
    switch(computerSelection) {
        case 'rock':
            gameResult = 
            playerSelection === 'rock' ? "It's a tie!" :
            playerSelection === 'scissors' ? "You loose! Rock beats scissors." : 
            playerSelection === 'paper' ? "You win! Paper beats rock." : "Please enter either rock, paper, or scissors.";
            break;
        case 'paper':
            gameResult = 
            playerSelection === 'rock' ? "You loose! Paper beats rock." :
            playerSelection === 'scissors' ? "You win! Scissors beats paper" : 
            playerSelection === 'paper' ? "It's a tie!" : "Please enter either rock, paper, or scissors.";
            break;
        case 'scissors':
            gameResult = 
            playerSelection === 'rock' ? "It's a tie!" :
            playerSelection === 'scissors' ? "It's a tie!" : 
            playerSelection === 'paper' ? "You win! Paper beats rock" : "Please enter either rock, paper, or scissors.";
            break;
        default:
            gameResult = "Please enter either rock, paper, or scissors.";
    }
    return gameResult;
}

const playerSelection = prompt("Please enter rock, paper, or scissors.");
console.log(`player: ${playerSelection}`)
const computerSelection = getComputerChoice()
console.log(`computer: ${computerSelection}`)
const gameResult = playRound(computerSelection, playerSelection.toLowerCase())
console.log(gameResult)
