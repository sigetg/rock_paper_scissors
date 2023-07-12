function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(3*Math.random())];
}

console.log(getComputerChoice())