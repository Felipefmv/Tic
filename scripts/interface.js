document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })

    let reset = document.querySelector(".reset")
    reset.addEventListener('click', resetting)

    // let modal = document.querySelector(".play-again")
    // modal.addEventListener("click",handlePlayAgain)


})

function handleClick(event){

    if(gameOver == false){
        let square = event.target
        let position = square.id

        handleMove(position)
        updateSquares()

    }
}

// function handlePlayAgain(){
//     let modal = document.querySelector(".modal")

//     document.getElementById(modal.id).classList.add("fade")
//     resetting ()
// }


function updateSquares() {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        let position = square.id
        let symbols = board[position]
    
        if (symbols != ''){
            document.getElementById(square.id).classList.add(symbols)
        
        }
    })
}

function resetting (){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        document.getElementById(square.id).classList.remove("o")
        document.getElementById(square.id).classList.remove("x")
    })

    board = ['','','','','','','','','']
    gameOver = false
    theWinner =  ''
    player = 0
    
}



