function getcomputerchoice(){
    const a = Math.random();
    if(a<0.333) {return 'rock';}
    else if(a>=0.333 && a<0.666) {return 'paper';}
    else{return 'scissors';}
}

function gethumanchoice(){
    let choice = prompt("Rock, paper, or scissors");
    return choice.toLowerCase();
}
let humanScore = 0;
let computerScore = 0;
function playGame(){

function playround(humanChoice,computerChoice){
    if(humanChoice =="rock" && computerChoice == 'paper'){computerScore++; return "Lose";}
    else if(humanChoice =="rock" && computerChoice == 'rock'){return "Tie";}
    else if(humanChoice =="rock" && computerChoice == 'scissors'){humanScore++ ;return "Win";}
    else if(humanChoice =="paper" && computerChoice == 'paper'){return "Tie";}
    else if(humanChoice =="paper" && computerChoice == 'rock'){humanScore++;return "Win";}
    else if(humanChoice =="paper" && computerChoice == 'scissors'){ computerScore++ ;return "Lose";}
    else if(humanChoice =="scissors" && computerChoice == 'paper'){humanScore++;return "Win";}
    else if(humanChoice =="scissors" && computerChoice == 'rock'){ computerScore++ ;return "Lose";}
    else if(humanChoice =="scissors" && computerChoice == 'scissors'){return "Tie";}
    
}
const humanChoice = gethumanchoice();
const computerChoice = getcomputerchoice();

const result = playround(humanChoice, computerChoice);
console.log(`Round result: ${result}. You chose ${humanChoice}, Computer chose ${computerChoice}`);

}


for(let i=0;i<5;i++){
    playGame();
    }
if (humanScore>computerScore) {
        console.log("you win. Congrats");
    }
    else if (humanScore<computerScore) {
        console.log("you lose. Better Luck Next Time")
    } else {
        console.log('its a tie. Play again');
    }

let finalMessage = `Final Score:\nYou: ${humanScore} - Computer: ${computerScore}\n`;
if (humanScore > computerScore) {
    finalMessage += "You win. Congrats!";
} else if (humanScore < computerScore) {
    finalMessage += "You lose. Better Luck Next Time.";
} else {
    finalMessage += "It's a tie. Play again!";
}
alert(finalMessage); 