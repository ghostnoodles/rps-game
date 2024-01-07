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

let playerChoice = ''

let playerSelection = () => {
    playerChoice = prompt("Please enter either Rock, paper, or Scissors ", '')
    playerChoice.toLowerCase()
    if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors' || playerChoice == 'scissor')
    {
        return playerChoice
    }
};

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return ['Rock losses to paper!', 1, 0, 1]
    }
    else if (playerSelection == 'rock' && (computerSelection == 'scissors' || computerSelection == 'scissor')){
            return ['Rock beats scissors!', 0, 1, 1]
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
            return 'Paper beats rock!'
    }
    else if (playerSelection == 'paper' && (computerSelection == 'scissors' || computerSelection == 'scissor')){
            return 'Paper losses to scissors!'
    }
    else if ((playerChoice == 'scissors' || playerChoice == 'scissor') && (computerSelection == 'rock')){
            return 'Scissors losses to rock!'
    }
    else if ((playerChoice == 'scissors' || playerChoice == 'scissor') && (computerSelection == 'paper')){
            return 'Scissors beats paper!'
    }
    else {
        let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        return  [player + ' ties with ' + computerSelection + '!', 0, 0, 1]
    }
};

let playerWins = 0
let computerWins = 0
let totalRounds = 0

let game = (playerWins, computerWins, totalRounds) =>{
    while ((playerWins < 3) || (computerWins < 3)){
        console.log(playRound(playerSelection(), computerSelection(getComputerChoice())))
        console.log(++playerWins)
        console.log(++computerWins)
    }
};

game(playerWins, computerWins, totalRounds);


// console.log(playRound(playerSelection(playerChoice), computerSelection(getComputerChoice())))