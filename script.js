let humanScore = 0, computerScore = 0;

        function getComputerChoice() {
            let computerNumber = Math.floor(Math.random() * 100);
            if (computerNumber <= 33) {
                return "rock";
            } else if (computerNumber > 33 && computerNumber <= 66) {
                return "paper";
            } else {
                return "scissors";
            }
        }

        function playRound(humanChoice) {
            let computerChoice = getComputerChoice();
            let result = '';

            if (humanChoice == 'rock') {
                if (computerChoice == 'paper') {
                    computerScore++;
                    result = 'Computer wins this round!';
                } else if (computerChoice == 'scissors') {
                    humanScore++;
                    result = 'You win this round!';
                } else {
                    result = 'This round is a draw!';
                }
            } else if (humanChoice == 'paper') {
                if (computerChoice == 'scissors') {
                    computerScore++;
                    result = 'Computer wins this round!';
                } else if (computerChoice == 'rock') {
                    humanScore++;
                    result = 'You win this round!';
                } else {
                    result = 'This round is a draw!';
                }
            } else if (humanChoice == 'scissors') {
                if (computerChoice == 'rock') {
                    computerScore++;
                    result = 'Computer wins this round!';
                } else if (computerChoice == 'paper') {
                    humanScore++;
                    result = 'You win this round!';
                } else {
                    result = 'This round is a draw!';
                }
            }

            updateDisplay(result);
            updateScore();

            checkWinner();
        }

        function updateDisplay(result) {
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = result;
        }

        function updateScore() {
            const scoreDiv = document.getElementById('score');
            scoreDiv.textContent = `Your Score: ${humanScore} - Computer Score: ${computerScore}`;
        }

        function checkWinner() {
            if (humanScore === 5) {
                alert('You are the overall winner!');
                resetGame();
            } else if (computerScore === 5) {
                alert('Computer is the overall winner!');
                resetGame();
            }
        }

        function resetGame() {
            humanScore = 0;
            computerScore = 0;
            updateScore();
            updateDisplay('Start a new game!');
        }

        // Add event listeners to buttons
        document.getElementById('rock').addEventListener('click', () => playRound('rock'));
        document.getElementById('paper').addEventListener('click', () => playRound('paper'));
        document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));