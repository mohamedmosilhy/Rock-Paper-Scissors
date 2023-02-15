function getComputerChoice(){
    let values = ["Rock", "Paper", "Scissors"];
    return values[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === "rock" && computerSelection === "scissors")
    {   
        playerScore++;
        return "You Win! Rock beats Scissors";
    }
    
    else if(playerSelection === "rock" && computerSelection === "paper")
    {   
        computerScore++;
        return "You Lose! Paper beats Rock";
    }

    else if(playerSelection === "scissors" && computerSelection === "rock")
    {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    }
    
    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        playerScore++;
        return "You Win! Scissors beats Paper";
    }

    else if(playerSelection === "paper" && computerSelection === "rock")
    {   
        playerScore++;
        return "You Win! Paper beats Rock";
    }
    
    else if(playerSelection === "paper" && computerSelection === "scissors")
    {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }

    else
    {
        return "it's a tie";
    }
}
let playerScore = 0,computerScore = 0;


let computerSelection ="";
let playerSelection = "";
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const result = document.querySelector(".result");

const playerChoice = document.querySelector('.playerChoice');
const comChoice = document.querySelector('.comChoice')

const playerScoreNode = document.querySelector(".playerScore")
const comScoreNode = document.querySelector(".comScore")

rockButton.addEventListener('click',() => {
    playerSelection = "Rock"
    playerChoice.textContent = playerSelection;
    computerSelection = getComputerChoice();
    comChoice.textContent = computerSelection;
    result.textContent = playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase());
    playerScoreNode.textContent = playerScore;
    comScoreNode.textContent = computerScore;
    
});

paperButton.addEventListener('click',() => {
    playerSelection = "Paper"
    playerChoice.textContent = playerSelection;
    computerSelection = getComputerChoice();
    comChoice.textContent = computerSelection;
    result.textContent = playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase());
    playerScoreNode.textContent = playerScore;
    comScoreNode.textContent = computerScore;
    
});

scissorsButton.addEventListener('click',() => {
    playerSelection = "Scissors"
    playerChoice.textContent = playerSelection;
    computerSelection = getComputerChoice();
    comChoice.textContent = computerSelection;
    result.textContent = playRound(playerSelection.toLowerCase(),computerSelection.toLowerCase());
    playerScoreNode.textContent = playerScore;
    comScoreNode.textContent = computerScore;
    
});








