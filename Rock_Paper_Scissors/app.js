// Refrencing the elements

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.querySelector(".result");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomComputerChoice = Math.floor(Math.random() * 3);

  if (randomComputerChoice === 0) {
    return "rock";
  } else if (randomComputerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
// To play the game
function playRound(event) {
  if (humanScore === 5 || computerScore === 5) return;
  let humanChoice = event.currentTarget.textContent.trim();
  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    alert("It's a tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    alert(
      `Yayyyy! Computer choice's ${computerChoice} and yours ${humanChoice} so you won`,
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    alert(
      `Try again Bitchh! Computer choice's ${computerChoice} and yours ${humanChoice} so you lost`,
    );
  } else {
    computerScore += 0;
    humanScore += 0;
    alert(`Retry`);
  }

  const para = document.createElement("p");

  if (computerScore === 5) {
    para.classList.add("output");
    para.textContent = `Computer Score: ${computerScore}
    Your Score: ${humanScore}
    Computer Won.`;
    result.appendChild(para);
  } else if (humanScore === 5) {
    para.classList.add("output");
    para.textContent = `Computer Score: ${computerScore}
    Your Score: ${humanScore}
    YAAAYYY,,,YOU WON.`;
    result.appendChild(para);
  }
}

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
