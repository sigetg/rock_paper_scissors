function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(3*Math.random())];
}


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

function game() {
    let gamesWon = 0;
    for (let i=0; i < 5; i++) {
        const playerSelection = prompt("Please enter rock, paper, or scissors.").toLowerCase();
        console.log(`player: ${playerSelection}`);
        const computerSelection = getComputerChoice();
        console.log(`computer: ${computerSelection}`);
        const gameResult = playRound(computerSelection, playerSelection);
        console.log(
        gameResult === 'win' || gameResult === 'loose' ? 
        `You ${gameResult}! ${playerSelection} ${gameResult === "win" ? "beats" : "looses to"} ${computerSelection}.` : 
        gameResult === 'tie' ? "It's a tie!" : "Please enter either rock, paper, or scissors."
        );
        const playAgain = confirm("Play Again?")
        if (playAgain === true) {
            continue;
        } else {
            break;
        }
    }
}

game()