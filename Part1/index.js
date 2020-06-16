//let name = "Amanda";
//console.log(name);

let board = [];

function play(clickedId) {
    let clickedElement = document.getElementById(clickedId);
    let playerSpan = document.getElementById('player');
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }


let topLeft = board[0];
let topMiddle = board[1];
let topRight = board[2];
let middleLeft = board[3];
let middleMiddle = board[4];
let middleRight = board[5];
let bottomLeft = board[6];
let bottomMiddle = board[7];
let bottomRight = board[8];

    if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
        return window.alert(`$({topLeft}): You are a WINNER!`);
    } else {
        //return window.alert("This was a CAT's game!");
    }
    if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft ) {
        return window.alert(`$({topLeft}): You are a WINNER!`);
    } else {
       // return window.alert("This was a CAT's game!");
    }
    if(topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight) {
        return window.alert(`$({topLeft}): You are a WINNER!`);
    } else {
        //return window.alert("This was a CAT's game!");
    }
    if(topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        return window.alert(`$({topMiddle}): You are a WINNER!`);
    } else {
        //return window.alert("This was a CAT's game!");
    }
    if(topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        return window.alert(`$({topRight}): You are a WINNER!`);
    } else {
        //return window.alert("This was a CAT's game!");
    }
    if(topRight !== undefined && topRight === middleMiddle && topRight === bottomLeft) {
        return window.alert(`$({topRight}): You are a WINNER!`);
    } else {
        //return window.alert("This was a CAT's game!");
    }
    if(bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomleft === bottomRight) {
        return window.alert(`$({bottomLeft}): You are a WINNER!`);
    } else {
        //return window.alert("This was a CAT's game!");
    }
    if(middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight) {
        return window.alert(`$({middleLeft}): You are a WINNER!`);
    } else {
       // return window.alert("This was a CAT's game!");
    }

let boardFull = true;
for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
        boardFull = false;
    }
} 
    if (boardFull === true) {
        alert ("This was a CAT's game!");
    }

};
