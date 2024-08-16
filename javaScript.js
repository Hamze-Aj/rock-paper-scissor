 container = document.querySelector('.countainer')
 let humanScore = 0;
 let computerScore = 0;

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
function playAgain() {
    
    const btn = document.createElement('button')
    btn.textContent = 'play again'
    btn.setAttribute('style', 'background:yellow;')
    btn.addEventListener('click', () => {
        window.location.reload();
    })
    container.appendChild(btn)
}

const message = document.createElement("h2")
message.classList.add('message')
container.appendChild(message)

function result() {
    if (computerScore === 5) {
        message.setAttribute('style', 'color:red')
        message.textContent = "oopsy you lost try again"
        
        computerScore = 0;
        humanScore = 0;
        
        updateComputerScore(computerScore)
        updateHumanScore(humanScore)
        
        playAgain()

        
    }

    else if (humanScore === 5) {
        message.setAttribute('style', 'color:green')
        message.textContent = "yeey you won"
        
        computerScore = 0;
        humanScore = 0;
        
        updateComputerScore(computerScore)
        updateHumanScore(humanScore)
        
        playAgain()
    }
     return 'play game'
    
}


const playerRound = (computerChoice,humanChoice) =>{

    if (computerChoice == 'paper' && humanChoice == 'paper') {


        message.textContent = "the game is a tie"
        result()
        
    }
    else if (computerChoice == 'rock' && humanChoice == 'rock') {
 
        message.textContent = "the game is a tie"  
        result()

    }
    else if (computerChoice == 'scissor' && humanChoice == 'scissor') {

        
        message.textContent = "the game is a tie"
        result()

        
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore++
        updateComputerScore(computerScore)
        message.textContent = "the computer won paper beats rock"
        result()


    }
    else if (computerChoice == 'rock' && humanChoice == 'paper') {
        humanScore++
        updateHumanScore(humanScore)
        message.textContent = "you won paper beats rock"
        result()


    }

    else  if (computerChoice == 'rock' && humanChoice == 'scissor') {
        computerScore++
        updateComputerScore(computerScore)
        message.textContent = "the computer won rock beats scissor"
        result()


}

else if(computerChoice == 'scissor' && humanChoice == 'rock') {
    humanScore++
    updateHumanScore(humanScore)
    message.textContent = "you won  rock beats scissor"
    result()

   
}

else if(computerChoice == 'paper' && humanChoice == 'scissor') {
    humanScore++
    updateHumanScore(humanScore)
    message.textContent = "you won  scissor beats paper"
    result()


}

else if(computerChoice == 'scissor' && humanChoice == 'paper') {
    computerScore++
    updateComputerScore(computerScore)
    message.textContent = "the computer won  scissor beats paper"
    result()


}

}

//                                         DOMMM



function updateComputerScore(score) {

const computerScore =score
    
const compscore = document.querySelector('.comp')
compscore.textContent = `computer score: ${computerScore}`
}




function updateHumanScore(score) {
    
    const humanScore = score
    const humnscore = document.querySelector('.humn')
    humnscore.textContent = `Human Score: ${humanScore}`
}




const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = 'rock'

    playerRound(computerChoice,humanChoice)

})

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = 'paper'

    playerRound(computerChoice,humanChoice)

})

const scissor = document.querySelector('#scissor')
scissor.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const humanChoice = 'scissor'

    playerRound(computerChoice,humanChoice)

})