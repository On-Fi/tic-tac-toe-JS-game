document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let winner = null;

    cells.forEach(cell => {
        cell.addEventListener('click', () => makeMove(cell));
    });

    function makeMove(cell) {
        if (!cell.textContent && !winner) {
            cell.textContent = currentPlayer;
            if (checkWinner()) {
                winner = currentPlayer;
                alert(`Player ${winner} wins!`);
            } else if (checkTie()) {
                alert('It\'s a tie!');
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
        });
    }

    function checkTie() {
        return Array.from(cells).every(cell => cell.textContent !== '');
    }
});
