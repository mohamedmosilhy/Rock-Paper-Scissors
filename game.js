function getComputerChoice(){
    let values = ["Rock", "Paper", "Scissors"];
    return values[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === "rock" && computerSelection === "scissors")
    {
        return "You Win! Rock beats Scissors"
    }
    
    else if(playerSelection === "rock" && computerSelection === "paper")
    {
        return "You Lose! Paper beats Rock"
    }
    
    else if(playerSelection === "scissors" && computerSelection === "rock")
    {
        return "You Lose! Rock beats Scissors"
    }
    
    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        return "You Win! Scissors beats Paper"
    }

    else if(playerSelection === "paper" && computerSelection === "rock")
    {
        return "You Win! Rock beats Scissors"
    }
    
    else if(playerSelection === "paper" && computerSelection === "scissors")
    {
        return "You Lose! Scissors beats Paper"
    }

    else
    {
        return "it's a tie"
    }
}



const playerSelection = "rock".toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();
console.log(playRound(playerSelection, computerSelection));