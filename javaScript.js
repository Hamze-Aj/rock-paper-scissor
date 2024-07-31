alert("hello this is rock-paper-scissor game")

let humanScore = 0;
let computerScore = 0;

const getHumanChoice = () =>{
   const responce = prompt("Enter your choice: Rock,Paper or Scissor");
   return responce
}


const getComputerChoice = () =>{
    const choice = Math.floor(Math.random() * 3)

    if(choice === 0){
        return 'paper'
    }
    else if(choice === 1){
        return 'rock'
    }
    else return 'scissor'


}

const playerRound = (computerChoice,humanChoice) =>{
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice()

    if (computerChoice == 'paper' && humanChoice == 'paper') {

        humanScore++
        computerScore++
        return 'the game is tie'
        
    }
    else if (computerChoice == 'rock' && humanChoice == 'rock') {

        humanScore++
        computerScore++
        return 'the game is tie'
        
    }
    else if (computerChoice == 'scissor' && humanChoice == 'scissor') {

        humanScore++
        computerScore++
        return 'the game is tie'
        
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore++
        return 'the computer won paper beats rock'
        
    }
    else if (computerChoice == 'rock' && humanChoice == 'paper') {
        humanScore++
        return 'you won paper beats rock'
     
        
    }
    else  if (computerChoice == 'rock' && humanChoice == 'paper') {
        humanScore++
        return 'you won paper beats rock'
}




