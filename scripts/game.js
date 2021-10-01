
let board = ['','','','','','','','','']
let player = 0;
let symbols = ['o','x']
let gameOver = false
let theWinner = "" 


let oPoints = 0;
let xPoints = 0;

function handleMove(position) {
    
    if (board[position] == ''){
        board[position] = symbols[player]
        
        gameOver = winner()
        
        if (gameOver == false){
            if(player == 0){
                player = 1
            }else(
                player = 0
            )}
    }
}

function winner(){
    let winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]]

    let tied = board.every((e)=>{
        return e != ""
    })

    
    
    for(i = 0; i <winCondition.length; i++) {
        let sequence = winCondition[i]

        let condition0 = sequence[0]
        let condition1 = sequence[1]
        let condition2 = sequence[2]

        let oScore = document.getElementById("o-points")
        let xScore = document.getElementById("x-points")
        
        if(board[condition0] == board[condition1] && 
           board[condition2] == board[condition0] &&
           board[condition0] != ""){
            
               theWinner = board[condition0] 

               if(theWinner == 'x'){
                   xPoints += 1
                   xScore.innerHTML = xPoints
                   setTimeout(()=>{resetting()},1500)
                   return true
                }else
                {
                    oPoints += 1
                    oScore.innerHTML = oPoints
                    setTimeout(()=>{resetting()},1500)
                    return true
                }
        } 
    }   
    
    if (tied == true){
        setTimeout(()=>{resetting()},1500)
                
        return false
    }

    return false

}