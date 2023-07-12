//Author: George Sigety, 7/12/2023

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(3*Math.random())];
}

//returns game result of win, loose, tie, or again, which means the user entered an incorrect value
function playRound(computerSelection, playerSelection) {
    let gameResult;
    switch(computerSelection) {
        case 'rock':
            gameResult = 
            playerSelection === 'rock' ? "tie" :
            playerSelection === 'scissors' ? "loose" : 
            playerSelection === 'paper' ? "win" : "again";
            break;
        case 'paper':
            gameResult = 
            playerSelection === 'rock' ? "loose" :
            playerSelection === 'scissors' ? "win" : 
            playerSelection === 'paper' ? "tie" : "again";
            break;
        case 'scissors':
            gameResult = 
            playerSelection === 'rock' ? "win" :
            playerSelection === 'scissors' ? "tie" : 
            playerSelection === 'paper' ? "loose" : "again";
            break;
        default:
            gameResult = "again";
    }
    return gameResult;
}

//shows different message in console depending on gameResult
function showGameResult(gameResult, playerSelection, computerSelection) {
    console.log(
        gameResult === 'win' || gameResult === 'loose' ? 
        `You ${gameResult}! ${playerSelection} ${gameResult === "win" ? "beats" : "looses to"} ${computerSelection}.` : 
        gameResult === 'tie' ? "It's a tie!" : "Please enter either rock, paper, or scissors."
    );
}

//main function. runs playRound five times unless user decides not to play again. 
function game() {
    let gamesWon = 0;
    for (let i=0; i < 5; i++) {
        const playerSelection = prompt("Please enter rock, paper, or scissors.").toLowerCase();
        const computerSelection = getComputerChoice();
        const gameResult = playRound(computerSelection, playerSelection);
        console.log(`player: ${playerSelection}`);
        console.log(`computer: ${computerSelection}`);
        showGameResult(gameResult, playerSelection, computerSelection)
        const anotherGame = confirm("Play Again?");
        if (anotherGame === true) {
            continue;
        } else {
            break;
        }
    }
}

game();