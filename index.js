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

        currentPlayer = currentPlayer == X_text ? O_text : X_text
    }
}

restartBtn.addEventListener('click',restart)
function restart(){
    spaces.fill(null)
    boxes.forEach(box => {
        box.innerText = ''
    })

    currentPlayer = X_text
}

startGame()