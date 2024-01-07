const squares = document.querySelectorAll(".square");
const modal = document.querySelector(".modal-wrapper");
const modalHeader = document.querySelector(".modal-header");
const modalBody = document.querySelector(".modal-body");
const resetButtons = document.querySelector(".reset");
const startButton = document.querySelector(".start")
const board = document.querySelector(".board")
let xTurn;

const possibleWins = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];

function start(){
    xTurn = true;
    resetButtons.forEach((btn) => {
        btn.disabled = false;
        btn.addEventListener("click", resetGame);
    });
    board.classList.remove("disabled");

    squares.forEach(square => {
        square.addEventListener("mouseover",showHover)
        square.addEventListener("mouseout",hideHover)
        square.addEventListener("click",handleSquareSelection)
    })
}

function showHover(e){
    if(xTurn){
        e.target.classList.add("x-hover");
    }
    else{
        e.target.classList.add("o-hover");
    }
}

function hideHover(e){
if(xTurn){
        e.target.classList.remove("x-hover");
    }
    else{
        e.target.classList.remove("o-hover");
    }
}

function handleSquareSelection(e){
    const currSquare = e.target
    let currTurn
    if(xTurn){
        currTurn = "x"
    }
    else{
        currTurn = "o"
    }
    addMark(currTurn, currSquare)
    if(checkIfWin()){
        return end(currTurn, false)
    }
    if(checkForDraw()){
        return end(null, true)
    }
    swapTurn()
}

function addMark(currTurn, currSquare){
    currSquare.classList.remove("x-hover", "o-hover");
    currSquare.classList.add("disabled");
    currSquare.classList.add(currTurn)
}

function checkIfWin(currTurn){
    return possibleWins.some(combination => {
        return combination.every(i => {
            return squares[i].classList.contains(currTurn);
        });
    });
}

function checkForDraw(){
    const currState = document.querySelectorAll(".square");
    return [...currState].every(square => {
        return square.classList.contains("x") || square.
        classList.contains("o");
    });
}

function swapTurn(){
    xTurn = !xTurn;
}

function end(winner, isDraw){
    resetBoard();
    modal.classList.toggle("d-none")
    if(winner){
        modalHeader.textContent = "WINNER!"
        modalBody.textContent = `${winner}'s Win!`
    }
    if(isDraw){
        modalHeader.textContent = "DRAW!";
        modalBody.textContent = "Ended in a Draw!"
    }
}

function resetBoard(){
    squares.forEach(square => {
        square.removeEventListener("mouseover",showHover);
        square.removeEventListener("mouseout", hideHover);
        square.removeEventListener("click",handleSquareSelection);
        square.classList.remove("x", "o");
    })
}

function resetGame(){
    resetBoard()
    modal.classList.toggle("d-none")
    board.classList.add("disabled")
    resetButtons.forEach(btn => {
        btn.disabled = true
    })
    squares.forEach(square => {
        square.classList.remove("disabled")
    })
}

start()