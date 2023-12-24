document.addEventListener('DOMContentLoaded', function () {
    const ticTacToe = document.querySelector('.tic-tac-toe');
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';

    // Add click event listeners to each cell
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    // Function to handle cell clicks
    function handleCellClick(event) {
        const clickedCell = event.target;
        
        // Check if the cell is empty
        if (!clickedCell.textContent) {
            // Update the cell with the current player's symbol
            clickedCell.textContent = currentPlayer;

            // Check for a winner
            if (checkForWinner()) {
                alert(`Player ${currentPlayer} wins!`);
                resetGame();
            } else if (checkForTie()) {
                alert('It\'s a tie!');
                resetGame();
            } else {
                // Switch to the other player's turn
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    // Function to check for a winner
    function checkForWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
        });
    }

    // Function to check for a tie
    function checkForTie() {
        return Array.from(cells).every(cell => cell.textContent);
    }

    // Function to reset the game
    function resetGame() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
    }
});
