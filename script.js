"use strict";

// function getComputerChoice() {
//     return Math.floor(Math.random() * 3 + 1);
// }




let getComputerChoice = () => Math.floor(Math.random() * 3 + 1);
let computerSelection = (num) => {
    switch(num) {
        case 1:
            return 'Rock'
            break;
        case 2:
            return 'Paper'
            break;
        case 3:
            return 'Scissors'
    }
}


console.log(computerSelection(getComputerChoice()))