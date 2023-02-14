function getComputerChoice(){
    let values = ["Rock", "Paper", "Scissors"];
    return values[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === "rock" && computerSelection === "scissors")
    {
        return "player";
    }
    
    else if(playerSelection === "rock" && computerSelection === "paper")
    {
        return "computer";
    }

    else if(playerSelection === "scissors" && computerSelection === "rock")
    {
        return "computer";
    }
    
    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        return "player";
    }

    else if(playerSelection === "paper" && computerSelection === "rock")
    {
        return "player";
    }
    
    else if(playerSelection === "paper" && computerSelection === "scissors")
    {
        return "computer";
    }

    else
    {
        return "it's a tie";
    }
}

function game(){
    let playerSelection;
    let computerSelection;
    let roundResult;
    let playerScore = 0,computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("enter your choice").toLowerCase();
        computerSelection = getComputerChoice().toLowerCase();
        roundResult = playRound(playerSelection,computerSelection);

        if(roundResult === "player"){
            playerScore++;
        }
        else if(roundResult === "computer"){
            computerScore++;
        }
        console.log(roundResult)
    }

    if(playerScore > computerScore)
    {
        return "player is the winner.";
    }
    else if(playerScore < computerScore)
    {
        return "computer is the winner.";
    }
    else
    {
        return "it's a tie.";
    }
}


console.log(game());
