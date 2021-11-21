document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

// get elements
let game = document.getElementById('game').getElementsByTagName('div');
let start = document.getElementById('start');
let result = document.getElementById('result');


start.addEventListener('click', function (){
    for(let i = 0 ; i < game.length ; i++){
        game[i].addEventListener('mouseup', function (event){
            console.log(event.button);
            switch (event.button){
                case 0 :
                    game[i].innerHTML = "X";
                    console.log(i);
                    checkGame("X");
                    break;
                case 2 :
                    game[i].innerHTML = "O"
                    break;
            }
        })

    }
})

function checkGame (player) {
    if((game[0].innerHTML === game[1].innerHTML && game[0].innerHTML === game[2].innerHTML ||
        game[3].innerHTML === game[4].innerHTML && game[3].innerHTML === game[5].innerHTML ||
        game[6].innerHTML === game[7].innerHTML && game[6].innerHTML === game[8].innerHTML) &&
        (game[0].innerHTML === player || game[3].innerHTML === player || game[6].innerHTML === player)){
        result.style.display = "flex";
    }
}

