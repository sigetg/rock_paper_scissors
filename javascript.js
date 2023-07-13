//Author: George Sigety, 7/12/2023

function getComputerChoice() {
    const choices = ["rock", "paper","scissors"];
    return choices[Math.floor(3*Math.random())];
}

//returns game result of win, loose, tie, or again, which means the user entered an incorrect value
function getGameResult(computerSelection, playerSelection) {
    let gameResult;
    switch(computerSelection) {
        case 'rock':
            gameResult = 
            playerSelection === 'rock' ? "tie" :
            playerSelection === 'scissors' ? "loose" : "win";
            break;
        case 'paper':
            gameResult = 
            playerSelection === 'rock' ? "loose" :
            playerSelection === 'scissors' ? "win" : "tie";
            break;
        case 'scissors':
            gameResult = 
            playerSelection === 'rock' ? "win" :
            playerSelection === 'scissors' ? "tie" : "loose";
            break;
        default:
            gameResult = "again";
    }
    return gameResult;
}

function showGameResult(gameResult, playerSelection, computerSelection) {
    const playerChoice = document.querySelector(".playerChoice");
    const computerChoice = document.querySelector(".computerChoice");
    const gameOutcomeMessage = document.querySelector(".gameOutcomeMessage");
    playerChoice.textContent = `player: ${playerSelection}`;
    computerChoice.textContent = `computer: ${computerSelection}`;
    gameOutcomeMessage.textContent = gameResult === 'win' || gameResult === 'loose' ? 
        `You ${gameResult}! ${playerSelection} ${gameResult === "win" ? "beats" : "looses to"} ${computerSelection}.` : 
        gameResult === 'tie' ? "It's a tie!" : "Please enter either rock, paper, or scissors.";
}

function playRound(buttonClass) {
    const playerSelection = buttonClass;
    const computerSelection = getComputerChoice();
    const gameResult = getGameResult(computerSelection, playerSelection);
    showGameResult(gameResult, buttonClass, computerSelection)
    return gameResult;
}

function playGame(playerChoice, playerWinsTotal, computerWinsTotal) {
    const computerWins = document.querySelector('.computer.wins');
    const playerWins = document.querySelector('.player.wins');
    const gameResult = playRound(playerChoice);
    if (gameResult === 'win') {
        playerWinsTotal += 1;
        playerWins.textContent = playerWinsTotal.toString();
        if (playerWinsTotal === 5) {
            const confirmOutcome = confirm("You beat the computer! Play again?");
            if (confirmOutcome === true) {
                playerWinsTotal = 0;
                computerWinsTotal = 0;
                playerWins.textContent = playerWinsTotal.toString();
                computerWins.textContent = computerWinsTotal.toString();
            }
        }
    } else if (gameResult === 'loose') {
        computerWinsTotal += 1;
        computerWins.textContent = computerWinsTotal.toString();
        if (computerWinsTotal === 5) {
            const confirmOutcome = confirm("You got destroyed! Play again?");
            if (confirmOutcome === true) {
                playerWinsTotal = 0;
                computerWinsTotal = 0;
                playerWins.textContent = playerWinsTotal.toString();
                computerWins.textContent = computerWinsTotal.toString();
            }                    
        }
    }
    return [computerWinsTotal, playerWinsTotal];
}

//main function. Listens for button presses.
function main() {
    let computerWinsTotal = 0;
    let playerWinsTotal = 0;
    const computerWins = document.querySelector('.computer.wins');
    const playerWins = document.querySelector('.player.wins');
    playerWins.textContent = playerWinsTotal.toString();
    computerWins.textContent = computerWinsTotal.toString();
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let winTotals = playGame(button.className, playerWinsTotal, computerWinsTotal)
            computerWinsTotal = winTotals[0];
            playerWinsTotal = winTotals[1];
        });
    })
}

main();