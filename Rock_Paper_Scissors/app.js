// Initialize variables to keep scores

let humanScore = 0;
let computerScore = 0;


// To get the Computer's Choice
const getComputerChoice = function(){
    const randomComputerChoice = Math.floor(Math.random() * 3);

    if (randomComputerChoice === 0)
    {
        return "rock";
    }
    else if (randomComputerChoice === 1)
    {
        return "paper";
    }
    else{
        return "scissors";
    }
}

// To get the Human's Choice

const getHumanChoice = function(){
    const humanChoice = prompt("Please enter your choice from the following - Rock, Paper, Scissors: ");
    return humanChoice.trim().toLowerCase();
}

// To play the game

function playGame(rounds){
    let gameCounter = 0;
    for (let i = 0; i < rounds; i++)
    {
       // To play a round

       function playRound(humanChoice,computerChoice)
       {
            if (humanChoice === computerChoice)
            {
                gameCounter ++;
                alert("It's a tie");
            }
            else if (humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice ===  "paper" && computerChoice === "rock" ||
                humanChoice ===  "scissors" && computerChoice === "paper"
            )
            {
                humanScore ++;
                gameCounter ++;
                alert(`Computer choice's ${computerChoice} and yours ${humanChoice} so you won`);
            }
            else if (humanChoice === "rock" && computerChoice === "paper"||
                humanChoice ===  "paper" && computerChoice === "scissors" ||
                humanChoice ===  "scissors" && computerChoice === "rock"
            )
            {
                computerScore ++;
                gameCounter ++;
                alert(`Computer choice's ${computerChoice} and yours ${humanChoice} so you lost`);
            }
            else 
            {
                computerScore += 0;
                humanScore  += 0;
                gameCounter ++;
                alert(`Retry`);
            }
        
       }
    
    playRound(getHumanChoice(),getComputerChoice());
 
    }

    if (computerScore > humanScore)
    {
        alert(`
        There were ${gameCounter} rounds
        Computer Score: ${computerScore}
        Human Score : ${humanScore}
        Computer won by ${computerScore - humanScore}`);
    }
    else if (humanScore > computerScore)
    {
        alert(`
        There were ${gameCounter} rounds 
        Computer Score: ${computerScore}
        Human Score : ${humanScore}
        User won by ${humanScore - computerScore}`);
    }
    else
    {
       alert(`
        There were ${gameCounter} rounds    
        Computer Score: ${computerScore}
        Human Score : ${humanScore}
        It is a tie`); 
    }
}

playGame(5);