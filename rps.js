    let playerScore = 0;
    let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    const playerSelectionLower = playerSelection.toLowerCase();
    const computerSelectionLower = computerSelection.toLowerCase();

    if (playerSelectionLower === computerSelectionLower) {
        alert(`Hmm.. Two ${playerSelection}s means a draw, so no lives were lost. Let's try again.`);
    }
    if (
        (playerSelectionLower === 'rock' && computerSelectionLower === 'scissors') ||
        (playerSelectionLower === 'paper' && computerSelectionLower === 'rock') ||
        (playerSelectionLower === 'scissors' && computerSelectionLower === 'paper')
    ) {
        alert(`Impressive choice! The enemy lost one life.`);
    }
    if (
        (computerSelectionLower === 'rock' && playerSelectionLower === 'scissors') ||
        (computerSelectionLower === 'paper' && playerSelectionLower === 'rock') ||
        (computerSelectionLower === 'scissors' && playerSelectionLower === 'paper')
    ) {
        alert(`Unfortunate defeat.. You lost one life!`);
    }
}

function game() {

    const results = [];

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerSelection();

        const roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === 'You won!') {
            playerScore++;
            } else if (roundResult === 'You lost!') {
            computerScore++;
        }

        results.push(`Round ${round}: ${roundResult}`);
    }

    if (playerScore > computerScore) {
        return 'You won the game! \u{1F639}';
    } else if (playerScore < computerScore) {
        return 'You lost the game. \u{1F9DF}';
    } else {
        return "It's a tie game! \u{1F440}";
    }

}


function getComputerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

