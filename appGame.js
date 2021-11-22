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

for(let i = 0 ; i < cases.length ; i++){                 // for each cases
    cases[i].addEventListener('mouseup', function (event){   // on click
        if(cases[i].innerHTML.length === 0){         // if case is empty
            switch (event.button){
                case 0 :
                    if(turn === 0){
                        cases[i].innerHTML = "X";        // write player mark
                        cases[i].style.color = "red";
                        checkGame("X", "red");             // verify if player win
                        gameBoard.style.cursor = 'url("playerO.png"), auto'
                        turn++;                         // next player
                    }
                    break;
                case 2 :
                    if(turn === 1){
                        cases[i].innerHTML = "O";
                        cases[i].style.color = "dodgerblue";
                        checkGame("O", "dodgerblue");
                        gameBoard.style.cursor = 'url("playerX.png"), auto'
                        turn--;
                    }
                    break;
            }
        }
    })
}


function checkGame (player, color) {
    for (let i = 0 ; i < 9 ; i+=3){
        if(cases[i].innerHTML === cases[1+i].innerHTML && cases[i].innerHTML === cases[2+i].innerHTML && cases[i].innerHTML === player){
            XoO.innerHTML = player;
            XoO.parentElement.style.backgroundColor = color;
            result.style.display = "flex";
            point[turn].innerHTML = (parseInt(point[turn].innerHTML) + 1).toString();
        }
    }
}

function resetGame () {
    gameBoard.style.cursor = 'url("playerX.png"), auto'
    for (let i = 0 ; i < cases.length ; i++){
        cases[i].innerHTML = "";
    }
    point[0].innerHTML = point[1].innerHTML = "0";
    turn = 0;
}

restart.addEventListener('click', function (){  // click start
    restart.style.backgroundColor = "green";
    resetGame();
})

