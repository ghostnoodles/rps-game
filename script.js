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

    if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors' || playerChoice == 'scissor')
    {
        return playerChoice
    }
};

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == 'rock'){
        if (computerSelection == 'paper'){
            return 'Rock losses to paper!'
        }
        else if (computerSelection == 'scissors' || computerSelection == 'scissor'){
            return 'Rock beats scissors!'
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock'){
            return 'Paper beats rock!'
        }
        else if (computerSelection == 'scissors' || computerSelection == 'scissor'){
            return 'Paper losses to scissors!'
        }
    }
    else if (playerChoice == 'scissors' || playerChoice == 'scissor') {
        if (computerSelection == 'rock'){
            return 'Scissors losses to rock!'
        }
        else if (computerSelection == 'paper'){
            return 'Scissors beats paper!'
        }
    }
    else
        return (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ' ties with ' (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1))
}


let playerChoice = prompt("Please enter either Rock, paper, or Scissors ", '');

console.log(playRound(playerSelection(playerChoice), computerSelection(getComputerChoice())))