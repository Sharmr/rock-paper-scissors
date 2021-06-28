function randIntFromInterval(max) { //inclusive
    return Math.floor(Math.random()*(max)) + 1;
}

function computerPlay() {
    return randIntFromInterval(3);
}

function playerInput(e) {
    let count = 0;
    while(true) {
        count++;
        move = e.target.innerText;
        console.log(move);
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
const t = document.createElement('div');
document.body.appendChild(t);
function addDiv(text) {
    t.textContent = text;
}

function playRound(e) {
    const c = computerPlay();
    const p = playerInput(e);
    alert("YOU CHOSE " + whatDoesItMean(p)+" AND SKYNET CHOSE " + whatDoesItMean(c) + ".");
    alert(winnerWho(andTheWinnerIs(p,c)));
    addDiv("Your Score: " + pscore + "\n Computer Score: " + cscore);
}




let pscore = 0;
let cscore = 0;




function game(e) {

    playRound(e);

   if(cscore >= 5 || pscore >=5){
    if(cscore > pscore) {
        //alert("SKYNET WINS. LAUNCH THE NUKES");
        addDiv("SKYNET WINS. LAUNCH THE NUKES");
        cscore = 0;
        pscore = 0;
    }
    else {
        //alert("NOOOOOOOOOOOOOOOOOOOO THIS CANNOT BEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        addDiv("NOOOOOOOOOOOOOOOOOOOO THIS CANNOT BEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        pscore = 0;
        cscore = 0;
    }

}
}

const btn= document.querySelectorAll('#btn');
console.log(btn);

btn.forEach(button => {
    button.addEventListener('click', game);
}); 

