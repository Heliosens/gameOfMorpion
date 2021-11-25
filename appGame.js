// suppr right click default comportement
document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

// get elements
let gameBoard = document.getElementById('cases');
let cases = gameBoard.getElementsByTagName('div');
let restart = document.getElementById('restart');
let result = document.getElementById('result');
let XoO = document.getElementById('XoO');
let point = document.getElementsByClassName('point');

let turn = 0;   // player 1 : X
let count = 0;

for(let i = 0 ; i < cases.length ; i++){                 // for each cases
    cases[i].addEventListener('mouseup', function (event){   // on click
        if(count < 9){
            if(this.innerHTML.length === 0){         // if case is empty
                ++count;
                switch (event.button){
                    case 0 :
                        if(turn === 0){
                            this.innerHTML = "X";        // write player mark
                            this.style.color = "crimson";
                            checkGame("X", "crimson");             // verify if player win
                            gameBoard.style.cursor = 'url("playerO.png"), auto'
                            turn++;                         // next player
                        }
                        break;
                    case 2 :
                        if(turn === 1){
                            this.innerHTML = "O";
                            this.style.color = "dodgerblue";
                            checkGame("O", "dodgerblue");
                            gameBoard.style.cursor = 'url("playerX.png"), auto'
                            turn--;
                        }
                        break;
                }
            }
        }
        else {
            checkGame("X", "crimson");
            checkGame("O", "dodgerblue");
            result.style.display = "flex";
            XoO.style.backgroundColor = "black";
            XoO.innerHTML = "Partie nulle";
        }

    })
}

// restart game
restart.addEventListener('click', function (){  // click restart
    gameBoard.style.cursor = 'url("playerX.png"), auto'
    for (let i = 0 ; i < cases.length ; i++){
        cases[i].innerHTML = "";
    }
    point[0].innerHTML = point[1].innerHTML = "0";
    result.style.display = 'none';
    turn = count = 0;
})

// remove result display to continue the game
result.addEventListener('click', function (){
    result.style.display = 'none';
    for (let i = 0 ; i < cases.length ; i++){
        cases[i].innerHTML = "";
    }
    count = 0;
})

// verify if therre
function checkGame (player, color) {
    if(checkDiagonal(player) || checkHorizontal(player) || checkVertical(player)){
        XoO.innerHTML = "JOUEUR <span>" + player + "</span> GAGNE";
        XoO.style.color = color;
        result.style.display = "flex";
        point[turn].innerHTML = (parseInt(point[turn].innerHTML) + 1).toString();
    }
}

function checkHorizontal (player) {
    for (let i = 0 ; i < 9 ; i+=3){
        if(cases[i].innerHTML === cases[1+i].innerHTML && cases[i].innerHTML === cases[2+i].innerHTML && cases[i].innerHTML === player){
            return true;
        }
    }
}

function checkVertical (player) {
    for (let i = 0 ; i < 3 ; i++){
        if(cases[i].innerHTML === cases[3+i].innerHTML && cases[i].innerHTML === cases[6+i].innerHTML && cases[i].innerHTML === player){
            return true;
        }
    }
}

function checkDiagonal (player){
   if(cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML && cases[4].innerHTML === player){
       return true;
   }
   else if (cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML && cases[4].innerHTML === player) {
       return true;
   }
}


