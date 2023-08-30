let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

const O_text = "O"
const X_text = "X"
let currentPlayer = X_text
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach( box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        if(playerHasWon()){
            playerText = `${currentPlayer} has won!`
        }
        currentPlayer = currentPlayer == X_text ? O_text : X_text
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos){
        let [a,b,c] = condition
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return [a,b,c];
        }
    }
}

restartBtn.addEventListener('click',restart)
function restart(){
    spaces.fill(null)
    boxes.forEach(box => {
        box.innerText = ''
    })

    playerText = 'Tic Tac Toe'

    currentPlayer = X_text
}

startGame()