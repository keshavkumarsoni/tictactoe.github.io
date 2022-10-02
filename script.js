console.log("Welcome To Tic Tac Toe Made By Keshav Kumar Soni")
// let music=new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
// let gameover=new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

//Functoin To Change The Turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Fucntion To Cheak For A Winner
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isGameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }

    });
}

//Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();

            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }


        }
    })
})

// Reset Button  "Reset On A Click " We have to add a event listener
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})