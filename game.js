// // Create two global variables - userScore and computerScore which will store the score of the user and computer respectively, and get updated when needed.

// let userScore = 0;
// let computerScore = 0;
// let choices = ['rock', 'paper', 'scissors'];;
// // Create a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// let getComputerChoice = () => {
//     let choiceIndex = Math.floor(Math.random() * choices.length);
//     let finalChoice = choices[choiceIndex];
//     return finalChoice;
// };

// // Create a helper function named decideWinner which takes two parameters - userSel and computerSel, and decides the winner.

// function decideWinner(userSel, computerSel){
//     if (userSel === computerSel){
//         userScore+=1;
//         computerScore+=1;
//         return 'It\'s a draw!';
//     }
//     else if (userSel === "rock"){
//         if (computerSel === "paper"){
//             computerScore+=1;
//             return 'You lost! Paper covers Rock!';
//         }
//         else if (computerSel === "scissors"){
//             userScore+=1;
//             return "You won! Scissors cuts Paper!";
//         }
//     }
//     else if (userSel === "paper"){
//         if (computerSel === "rock"){
//             userScore+=1;
//             return 'You won! Paper covers rock';
//         }
//         else if (computerSel === "scissors"){
//             computerScore+=1;
//             return "You Lost! Scissors cuts paper!";
//         }
//     }
//     else{
//         if (computerSel === "paper"){
//             userScore+=1;
//             return "You won! Scissors cuts Paper!";
//         }
//         else if (computerSel==='rock'){
//             computerScore+=1;
//             return "You lost! Rock beats Scissors!";
//         }
//     }
// }


// // Create a function named playGame which should take two parameters - playerSelection and computerSelection

// let playRound = (playerSelection, computerSelection) => {
//     let playerChoice = playerSelection.toLowerCase();
//     let computerChoice = computerSelection.toLowerCase();
//     console.log(decideWinner(playerChoice, computerChoice));
// };

// function game(){
//     for (let i=0; i < 5; i++){
//         let userChoice = prompt("What is your selection ? : ");
//         while (true){
//             if (userChoice === null || userChoice === undefined){
//                 userChoice = prompt("Oops Try again Please! : ");
//             }
//             else if(choices.includes(userChoice.toLowerCase())){
//                 playRound(userChoice, getComputerChoice())
//                 break
//             }
//             else{
//                 userChoice = prompt("Oops Try again Please! : ");
//             }
//         }
//     }
//     if (userScore>computerScore){
//         console.log("Congrats! You won!")
//     }
//     else if (userScore<computerScore){
//         console.log("Uh Oh! You lost!")
//     }
//     else{
//         console.log("It's a draw!")
//     }  
// }
// game()

//----------------------------------------------------//

// Initialize variables for storing user and computer scores
let userScore = 0;
let computerScore=0;


let userScoreText = document.getElementById('user-score');
let computerScoreText = document.getElementById('computer-score');

let playAgain = document.querySelector('.startOver');

playAgain.addEventListener('click', function(e){
    window.location.reload()
})

//initialize all the buttons with selectors
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorBtn = document.getElementById('scissors');

// Initialize divs to display the winner of each round and the total game
let roundWinner = document.querySelector('.round-winner');
let totalWinner = document.querySelector('.total-winner');

//Initialize the choice the computer should choose from
let choices = ['rock', 'paper', 'scissors'];

// Create a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let getComputerChoice = (e) => {
    let choiceIndex = Math.floor(Math.random() * choices.length);
    let finalChoice = choices[choiceIndex];
    return finalChoice;
};

rockBtn.addEventListener('click', playRound)
paperBtn.addEventListener('click', playRound)
scissorBtn.addEventListener('click', playRound)

function playRound (e, playerSelection, computerSelection=getComputerChoice()){
    let playerChoice = e.target.id.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if (playerChoice === computerChoice){
        roundWinner.textContent = "It's a DRAW!";
    }
    else if(playerChoice==="rock"){
        if (computerChoice==="scissors"){
            roundWinner.textContent = "You Won! Rock Breaks Scissors!";
            userScore++;
            userScoreText.textContent = `User Score: ${userScore}`
        }
        else {
            roundWinner.textContent = "You Lost! Paper Covers Rock!";
            computerScore++;
            computerScoreText.textContent = `Computer Score: ${computerScore}`
        }
    }
    else if (playerChoice==="paper"){
        if (computerChoice==="scissors"){
            roundWinner.textContent = "You Lost! Scissors Cuts Paper!";
            computerScore++;
            computerScoreText.textContent = `Computer Score: ${computerScore}`
        }
        else {
            roundWinner.textContent = "You Won! Paper Covers Rock!";
            userScore++;
            userScoreText.textContent = `User Score: ${userScore}`
        }
    }
    else {
        if (computerChoice==="paper"){
            roundWinner.textContent = "You Won! Scissors Cuts Paper!";
            userScore++;
            userScoreText.textContent = `User Score: ${userScore}`
        }
    
        else {
            roundWinner.textContent = "You Lost! Rock beats Scissors!";
            computerScore++;
            computerScoreText.textContent = `Computer Score: ${computerScore}`
        }
    }
    checkWinner();
}

function checkWinner(){
    if (userScore===5 || computerScore===5){
        if (userScore === computerScore){
            totalWinner.textContent = "This Game Ends with a Tie";
            rockBtn.disabled = true;
            rockBtn.style.cursor = "not-allowed";
            rockBtn.style.opacity = "40%";

            scissorBtn.disabled = true;
            scissorBtn.style.cursor = "not-allowed";
            scissorBtn.style.opacity = "40%";

            paperBtn.disabled = true;
            paperBtn.style.cursor = "not-allowed";
            paperBtn.style.opacity = "40%";

            playAgain.style.display = 'block';
        }
        else{
            totalWinner.textContent = `${userScore>computerScore?"Congrats! You Won This Game":"Oops! You Lost This Game!"}`;
            rockBtn.disabled = true;
            rockBtn.style.cursor = "not-allowed";
            rockBtn.style.opacity = "40%";

            scissorBtn.disabled = true;
            scissorBtn.style.cursor = "not-allowed";
            scissorBtn.style.opacity = "40%";

            paperBtn.disabled = true;
            paperBtn.style.cursor = "not-allowed";
            paperBtn.style.opacity = "40%";

            playAgain.style.display = 'block';
        }
    }
    
}
