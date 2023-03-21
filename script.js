//Logic for computer choice.


function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3); {
        if (computerChoice === 0) {
            return "rock"
        } else if 
        (computerChoice === 1) {
            return "paper"
        } else if 
        (computerChoice === 2) {
            return "scissors"
        }
    }
}

getComputerChoice();

//Logic for Player choice.

const rock = document.getElementById("rock");

rock.addEventListener("click", function(e) {
    return "rock"
});

const paper = document.getElementById("paper");

paper.addEventListener("click", function(e) {
    return "paper"
});

const scissors = document.getElementById("scissors");

scissors.addEventListener("click", function(e) {
    return "scissors"
});

//Logic for result output


