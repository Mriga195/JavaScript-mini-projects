const choices = ["rock", "paper", "scissors"];
const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const resultMessage = document.getElementById("resultMessage");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const reset = document.getElementById("reset");
let computerScoreValue = 0;
let playerScoreValue = 0;

function playGame(playerChoice) {
    const choiceIdx = Math.floor(Math.random() * choices.length);
    playerResult.textContent = `PLAYER:  ${playerChoice}`;
    computerResult.textContent = `COMPUTER: ${choices[choiceIdx]}`;
    if(playerChoice === choices[choiceIdx])
        resultMessage.textContent = "RESULT: Draw!";
    else {
        if (playerChoice == choices[(choiceIdx-1) % 3])
        {
            resultMessage.textContent = `RESULT: You win!`;
            playerScoreValue++;
        }else
        {
            resultMessage.textContent = `RESULT: You lose!`;
            computerScoreValue++;
        }

        playerScore.textContent = `Player Score: ${playerScoreValue}`;
        computerScore.textContent = `Computer Score: ${computerScoreValue}`;
    }
}

const select = document.querySelectorAll(".btn");

select.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);
    })

    button.addEventListener("mouseover", () => {
        button.classList.replace("btn", "newBtn");
    })

    button.addEventListener("mouseout", () => {
        button.classList.replace("newBtn", "btn");
    })
})

reset.addEventListener("click", () => {
    playerScoreValue = 0;
    computerScoreValue = 0;

    playerScore.textContent = `Player Score: `;
    computerScore.textContent = `Computer Score: `;
    playerResult.textContent = `PLAYER:  `;
    computerResult.textContent = `COMPUTER: `;
    resultMessage.textContent = "RESULT: ";
})