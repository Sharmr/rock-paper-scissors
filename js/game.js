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
function andTheWinnerIs (player, computer) { // returns 0 if draw, 1 if player win, and 2 
                                             // if player win.
    if (player ==  computer) {
        return 0;
    }
    else if (player == 1 && computer == 3) {
        return 1;
    }
    else if (player == 3 && computer == 1) {
        return 2;
    }
    else if (player > computer) {
        return 1;
    }
    else {
        return 2;
    }
}

function whatDoesItMean(n) {
    switch(n) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
        default:
            return "SHIT SOMETHING'S GONE HORRIBLY WRONG. HORRIBLY WRONG.";
    }
}

function winnerWho(n) {
    switch(n) {
        case 0:
            return "NO WON";
        case 1:
            pscore++;
            return "YOU WON";
        case 2:
            cscore++;
            return "COMPUTER WON";
        default:
            return "SHIT SOMETHING'S GONE HORRIBLY WRONG. HORRIBLY WRONG.";
    }
}

let pscore = 0;
let cscore = 0;
function game() {
    alert("5 ROUND DEATHMATCH TO THE DEATH. WHO WILL EMERGE VICTORIOUS?");
    let round = 1;
    pscore = 0;
    cscore = 0;
    while (round <= 5) {
        alert("ROUND " + round);
        const c = computerPlay();
        const p = playerInput();
        alert("YOU CHOSE " + whatDoesItMean(p)+" AND SKYNET CHOSE " + whatDoesItMean(c) + ".");
        alert(winnerWho(andTheWinnerIs(p,c)));
        console.log(winnerWho(andTheWinnerIs(p,c))+ " ROUND " + round);
        round++;
    }
    if(pscore == cscore) {
        console.log("THE GAME HAS RESULTED IN A DRAW. IT SEEMS AS THOUGH HUMANITY AND AI WILL HAVE TO LEARN HOW TO LIVE IN PEACE.");
        alert("THE GAME HAS RESULTED IN A DRAW. IT SEEMS AS THOUGH HUMANITY AND AI WILL HAVE TO LEARN HOW TO LIVE IN PEACE.");
    }
    if(cscore > pscore) {
        alert("SKYNET WINS. LAUNCH THE NUKES");
        console.log("SKYNET WINS. LAUNCH THE NUKES");
    }
    else {
        alert("NOOOOOOOOOOOOOOOOOOOO THIS CANNOT BEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        console.log("NOOOOOOOOOOOOOOOOOOOO THIS CANNOT BEEEEEEEEEEEEEEEEEEEEEEEEEEE");
    }
}