////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove
var computerMove*/


function getPlayerMove(move) {
    var move;
    move = 'getInput()'
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return;
}

function getComputerMove(move) {
    var move;
    move = 'getInput()';

    if (move = null) {
        else if (move = 'getInput'){
    return "randomPlay";
    
    }
      // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    //1st ever//

    return ;  if (move === null) {
        getInput();
    } else {

        playerMove = move;
        getComputerMove();
    } 

}

function getWinner(playerMove,computerMove) {
    var winner;

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    if (playerMove = computerMove){
        winner = "tie";
        return = winner;
    }
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    else if (playerMove = "rock"){
        if (computerMove = "paper") {
            winner = "computer"
        } else if = "player";
    }
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
else if (playerMove = "paper"){
    if (computerMove = "rock"){
        winner = "player";
    }else if = "computer";
}
else if (playerMove = "scissors"){
    if (computerMove = "rock") {
        winner = "computer"

    }else if winner = "player";

}
    console.log("The winner is ")
    return winner;
    /* YOUR CODE HERE */

    //return winner;//
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    for (var i=0; i<5; i++) { 
      if (playerWins === 5 || computerWins === 5) {
        console.log("Final Score: Player Wins : ");
        break;
    } 
    return [playerWins, computerWins];
}




////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////





