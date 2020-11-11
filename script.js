let $container = document.getElementById("game-container")
let turn = true
let totalTurns = 0

let $output = document.getElementById("output")
$output.textContent = "X goes first"

function checkWin(id, character) {
    let cells = []

    // Check row
    cells = [
        document.getElementById("A" + id[1]),
        document.getElementById("B" + id[1]),
        document.getElementById("C" + id[1])
    ]
    if (cells[0].textContent === character && cells[1].textContent === character && cells[2].textContent === character ) {
        $output.textContent = `Game over — ${character} wins!`
    }

    // Check column
    cells = [
        document.getElementById(id[0] + "1"),
        document.getElementById(id[0] + "2"),
        document.getElementById(id[0] + "3")
    ]
    if (cells[0].textContent === character && cells[1].textContent === character && cells[2].textContent === character ) {
        $output.textContent = `Game over — ${character} wins!`
    }

    // Check backward diagonal
    cells = [
        document.getElementById("A1"),
        document.getElementById("B2"),
        document.getElementById("C3")
    ]
    if (cells[0].textContent === character && cells[1].textContent === character && cells[2].textContent === character ) {
        $output.textContent = `Game over — ${character} wins!`
    }

    // Check forward diagonal
    cells = [
        document.getElementById("A3"),
        document.getElementById("B2"),
        document.getElementById("C1")
    ]
    if (cells[0].textContent === character && cells[1].textContent === character && cells[2].textContent === character ) {
        $output.textContent = `Game over — ${character} wins!`
    }
}

function addCharacter(event) {
    if (turn === true) {
        if (event.target.textContent != "X" && event.target.textContent != "O") {
            event.target.textContent = "X"
            turn = false
        }
        checkWin(event.target.getAttribute("id"), "X")
    } else if (turn === false) {
        if (event.target.textContent != "X" && event.target.textContent != "O") {
            event.target.textContent = "O"
            turn = true
        }
        checkWin(event.target.getAttribute("id"), "O")
    }
    if (totalTurns === 0) {
        $output.textContent = ""
    }
    else if (totalTurns === 8) {
        $output.textContent = "Game over — It's a draw!"
    }
    totalTurns++
}

$container.addEventListener('click', addCharacter)

//In the HTML, create a 3x3 grid (it only needs to be functional, not pretty)
//Using a single, delegated event, alternate between adding an X or O when a cell is clicked on
//Once a cell is filled with either an X or O, prevent it from being changed if it is clicked again
//Make an attempt at determining the winner (or a draw)