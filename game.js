// returns random computer moves
function computerPlay(){
    const moves = ["Rock", "Paper", "Scissors"];
    // returning a random index of moves array from 0-2
    return moves[Math.floor(Math.random() * 3)];
}

function titleCase(str){
    // returns the capitalize first letter + the rest of the string
    return str[0].toUpperCase() + str.substr(1).toLowerCase() 
}

function playRound(playerSelection, computerSelection){
    if(!playerSelection){
        return "Null or Undefined"
    }

    if ((titleCase(playerSelection) == "Rock") || (titleCase(playerSelection) == "Scissors") || (titleCase(playerSelection) == "Paper")){

        if((titleCase(playerSelection) == "Rock" && computerSelection == "Scissors") || (titleCase(playerSelection) == "Scissors") && (computerSelection == "Paper") || (titleCase(playerSelection) == "Paper") && (computerSelection == "Rock")){
            return `You WIN! ${playerSelection} beats ${computerSelection}.`
        }
        else if((titleCase(playerSelection) == "Rock") && (computerSelection == "Paper") || (titleCase(playerSelection) == "Scissors") && (computerSelection == "Rock") || (titleCase(playerSelection) == "Paper") && (computerSelection == "Scissors")){
            return`You LOSE! ${computerSelection} beats ${playerSelection}.`
        }
        else{
            return `It's a TIE! ${playerSelection} is even with ${computerSelection}.`
        }
    }
    else {
        return "Invalid input."
    }
}

// starts the game
function game(){
    for (let i = 0; i < 5; i++) {
        // your code here!
     }
}
