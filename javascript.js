//Author: George Sigety, 7/12/2023

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
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

//shows different message in console depending on gameResult
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
}

//main function. Listens for button presses.
function main() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.className);
        });
    })
}

main();