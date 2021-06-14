function randIntFromInterval(min, max) { //inclusive
    return Math.floor(Math.random()*(max - min + 1));
}

function computerPlay() {
    return randIntFromInterval(1,3);
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