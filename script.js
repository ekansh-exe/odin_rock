function getcomputerchoice() {
    const a = Math.random();
    if (a < 0.333) return 'rock';
    else if (a < 0.666) return 'paper';
    else return 'scissors';
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
    const computerChoice = getcomputerchoice();
    let result = "";

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            result = "You Lose! Paper beats Rock.";
        } else if (computerChoice === "scissors") {
            humanScore++;
            result = "You Win! Rock beats Scissors.";
        } else {
            result = "It's a Tie!";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            result = "You Lose! Scissors beats Paper.";
        } else if (computerChoice === "rock") {
            humanScore++;
            result = "You Win! Paper beats Rock.";
        } else {
            result = "It's a Tie!";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            result = "You Lose! Rock beats Scissors.";
        } else if (computerChoice === "paper") {
            humanScore++;
            result = "You Win! Scissors beats Paper.";
        } else {
            result = "It's a Tie!";
        }
    }

    document.getElementById("result").textContent = `${result} (You: ${humanChoice}, Computer: ${computerChoice})`;
    document.getElementById("score").textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        let finalMessage = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        alert(finalMessage);

        // Reset game
        humanScore = 0;
        computerScore = 0;
        document.getElementById("score").textContent = `Score: You 0 - 0 Computer`;
        document.getElementById("result").textContent = "New game started!";
    }
}

// Attach event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
