"use strict";

// function getComputerChoice() {
//     return Math.floor(Math.random() * 3 + 1);
// }

let getComputerChoice = () => Math.floor(Math.random() * 3 + 1);
let computerSelection = (num) => {
    switch(num) {
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'
    }
};

let playerSelection = (playerChoice) => {
    playerChoice.toLowerCase()
    if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors')
    {
        return playerChoice
    }
};

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == 'rock'){

        return playerSelection + ' beats ' + computerSelection + '!'
    }
    else if (playerSelection == 'paper') {
        
    }
}


let playerChoice = prompt("Please enter either Rock, paper, or Scissors ", '');

console.log(playRound(playerSelection(playerChoice), computerSelection(getComputerChoice())))