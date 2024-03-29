"use strict";

// function getComputerChoice() {
//     return Math.floor(Math.random() * 3 + 1);
// }

let getComputerChoice = () => Math.floor(Math.random() * 3 + 1);
// let firstLetterUpperCase = (word) => word.charAt(0).toUpperCase() + word.slice(1);
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

// let playerChoice = ''

// let playerSelection = () => {
//     playerChoice = prompt("Please enter either Rock, Paper, or Scissors ", '').toLowerCase()
//     if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors' || playerChoice == 'scissor')
//     {
//         return playerChoice
//     }
// };

let playerWins = 0
let computerWins = 0
let totalRounds = 0
let result = ''

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == 'Rock' && computerSelection == 'paper'){
        ++computerWins
        ++totalRounds
        return 'Rock losses to paper!'
    }
    else if (playerSelection == 'Rock' && computerSelection == 'scissors' ){
        ++playerWins
        ++totalRounds
        return 'Rock beats scissors!'
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        ++playerWins
        ++totalRounds
        return 'Paper beats rock!'
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        ++computerWins
        ++totalRounds
        return 'Paper losses to scissors!'
    }
    else if (playerChoice == 'scissors'  && computerSelection == 'rock'){
        ++computerWins
        ++totalRounds
        return 'Scissors losses to rock!'
    }
    else if (playerChoice == 'scissors' && computerSelection == 'paper'){
        ++playerWins
        ++totalRounds
        return 'Scissors beats paper!'
    }
    else {
        ++totalRounds
        return playerSelection + ' ties with ' + computerSelection + '!'
    }
};


let game = (playerWins, computerWins, totalRounds, playerChoice) =>{
        result = playRound(playerChoice, computerSelection(getComputerChoice()))
        resultDiv.textContent = 'The current score for Player: ' + playerWins + '\r\n'
        resultDiv.textContent += 'The current score is Computer: ' + computerWins + '\r\n'
        resultDiv.textContent += 'Total rounds: ' + totalRounds + '\r\n'
        resultDiv.textContent += result + '\r\n'       
        // console.log(++playerWins)
        // console.log(++computerWins)
        gameEnd(playerWins, computerWins)
};

function gameEnd (pWins, cWins) {
    if (pWins == 3) {
        playerWins = 0
        computerWins = 0
        totalRounds = 0
        alert('The player wins!')
    }
    else if(cWins == 3 ) {
        playerWins = 0
        computerWins = 0
        totalRounds = 0
        alert('The computer wins!')
    }
};



const resultDiv = document.querySelector('#result')
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('#paper');

rock.addEventListener('click', () => {
    game(playerWins, computerWins, totalRounds, 'Rock')
    // resultDiv.textContent = 
  });

scissors.addEventListener('click', () => {

  });

paper.addEventListener('click', () => {

  });



// const div = document.createElement('div');
// resultDiv.appendChild(childNode)
// game(playerWins, computerWins, totalRounds);


// console.log(playRound(playerSelection(playerChoice), computerSelection(getComputerChoice())))