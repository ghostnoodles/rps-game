"use strict";

// function getComputerChoice() {
//     return Math.floor(Math.random() * 3 + 1);
// }

let getComputerChoice = () => Math.floor(Math.random() * 3 + 1);
let computerSelection = (num) => {
    switch(num) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
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
        return  ' ties with ' 
};


let playerChoice = prompt("Please enter either Rock, paper, or Scissors ", '');

console.log(playRound(playerSelection(playerChoice), computerSelection(getComputerChoice())))