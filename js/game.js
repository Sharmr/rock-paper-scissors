function randIntFromInterval(max) { //inclusive
    return Math.floor(Math.random()*(max)) + 1;
}

function computerPlay() {
    return randIntFromInterval(3);
}

function playerInput() {
    let count = 0;
    while(true) {
        count++;
        let move = prompt("Make your Move");
        move = move.toLowerCase();
        
        switch(move) {
            case "rock":
                return 1;
            case "paper":
                return 2;
            case "scissors":
                return 3;
            default:
                (count <= 4) ? alert("Invalid Input. Try Again"):alert("Imagine not being able to spell?"); 
        }
    }
}
//Keep in mind, throughout this program: 1 is rock, 2 is paper, 3 is scissors. No exceptions
function andTheWinnerIs (player, computer) {
    if (player ==  computer) {
        return "DRAW";
    }
    else if (player == 1 && computer == 3) {
        return "YOU WIN";
    }
    else if (player == 3 && computer == 1) {
        return "YOU LOSE";
    }
    else if (player > computer) {
        return "YOU WIN";
    }
    else {
        return "YOU LOSE";
    }
}