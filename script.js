"use strict";

// function getComputerChoice() {
//     return Math.floor(Math.random() * 3 + 1);
// }

let getComputerChoice = () => Math.floor(Math.random() * 3 + 1);
let firstLetterUpperCase = (word) => word.charAt(0).toUpperCase() + word.slice(1);
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
    playerChoice = prompt("Please enter either Rock, Paper, or Scissors ", '').toLowerCase()
    if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors' || playerChoice == 'scissor')
    {
        return playerChoice
    }
};

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return ['Rock losses to paper!', 0, 1, 1]
    }
    else if (playerSelection == 'rock' && (computerSelection == 'scissors' || computerSelection == 'scissor')){
            return ['Rock beats scissors!', 1, 0, 1]
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
            return ['Paper beats rock!', 1, 0, 1]
    }
    else if (playerSelection == 'paper' && (computerSelection == 'scissors' || computerSelection == 'scissor')){
            return ['Paper losses to scissors!', 0, 1, 1]
    }
    else if ((playerChoice == 'scissors' || playerChoice == 'scissor') && (computerSelection == 'rock')){
            return ['Scissors losses to rock!', 0, 1, 1]
    }
    else if ((playerChoice == 'scissors' || playerChoice == 'scissor') && (computerSelection == 'paper')){
            return ['Scissors beats paper!', 1, 0, 1]
    }
    else {
        return  [firstLetterUpperCase(playerChoice) + ' ties with ' + computerSelection + '!', 0, 0, 1]
    }
};

let playerWins = 0
let computerWins = 0
let totalRounds = 0
let result = ''

let game = (playerWins, computerWins, totalRounds) =>{
    while ((playerWins < 3) && (computerWins < 3)){
        result = playRound(playerSelection(), computerSelection(getComputerChoice()))
        playerWins += result[1]
        computerWins += result[2]
        totalRounds += result[3]
        console.log('The current score for Player: ' + playerWins)
        console.log('The current score is Computer: ' + computerWins)
        console.log('Total rounds: ' + totalRounds)
        console.log(result[0])
        console.log('')           
        // console.log(++playerWins)
        // console.log(++computerWins)
    }
    if (playerWins == 3) {
        console.log('The player wins!')
    }
    else {
        console.log('The computer wins!')
    }
};

const rock = document.querySelector('#rock');
const scissor = document.querySelector('#scissor');
const paper = document.querySelector('#paper');

rock.addEventListener('click', () => {

  });

scissor.addEventListener('click', () => {

  });

paper.addEventListener('click', () => {

  });

// game(playerWins, computerWins, totalRounds);


// console.log(playRound(playerSelection(playerChoice), computerSelection(getComputerChoice())))