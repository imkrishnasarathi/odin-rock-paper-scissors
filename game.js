// Create two global variables - userScore and computerScore which will store the score of the user and computer respectively, and get updated when needed.

let userScore = 0;
let computerScore = 0;
let choices = ['rock', 'paper', 'scissors'];;
// Create a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let getComputerChoice = () => {
    const choiceIndex = Math.floor(Math.random() * choices.length);
    let finalChoice = choices[choiceIndex];
    return finalChoice;
};

// Create a helper function named decideWinner which takes two parameters - userSel and computerSel, and decides the winner.

function decideWinner(userSel, computerSel){
    if (userSel === computerSel){
        userScore+=1;
        computerScore+=1;
        return 'It\'s a draw!';
    }
    else if (userSel === "rock"){
        if (computerSel === "paper"){
            computerScore+=1;
            return 'You lost! Paper covers Rock!';
        }
        else if (computerSel === "scissors"){
            userScore+=1;
            return "You won! Scissors cuts Paper!";
        }
    }
    else if (userSel === "paper"){
        if (computerSel === "rock"){
            userScore+=1;
            return 'You won! Paper covers rock';
        }
        else if (computerSel === "scissors"){
            computerScore+=1;
            return "You Lost! Scissors cuts paper!";
        }
    }
    else{
        if (computerSel === "paper"){
            userScore+=1;
            return "You won! Scissors cuts Paper!";
        }
        else if (computerSel==='rock'){
            computerScore+=1;
            return "You lost! Rock beats Scissors!";
        }
    }
}


// Create a function named playGame which should take two parameters - playerSelection and computerSelection

let playRound = (playerSelection, computerSelection) => {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    console.log(decideWinner(playerChoice, computerChoice));
};

function game(){
    for (let i=0; i < 5; i++){
        let userChoice = prompt("What is your selection ? : ");
        while (true){
            if (userChoice === null || userChoice === undefined){
                userChoice = prompt("Oops Try again Please! : ");
            }
            else if(choices.includes(userChoice.toLowerCase())){
                playRound(userChoice, getComputerChoice())
                break
            }
            else{
                userChoice = prompt("Oops Try again Please! : ");
            }
        }
    }
    if (userScore>computerScore){
        console.log("Congrats! You won!")
    }
    else if (userScore<computerScore){
        console.log("Uh Oh! You lost!")
    }
    else{
        console.log("It's a draw!")
    }
}
game()