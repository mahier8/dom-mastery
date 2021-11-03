// function createGrid
function createGrid() {
    // select the div which will hold your board
    let container = document.querySelector('#tictactoe');
    let counter = 0; // set counter to 0
    for (let i = 0; i < 3; i++) {
            let row = document.createElement('div');
            row.className = "row";
            container.appendChild(row);
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('div');
            cell.className = "cell";
            cell.setAttribute("cell-id", counter); 
            // set the attribute in each div to cell-id 
            counter++; // counter will increment for each div giving each an id
            row.appendChild(cell);
        }
    }
} // could also use arguments here, then call it below with the value
// the container name, the amount 3 and the 

// function to calculate winners
function calculateWinner(squares) { // what is this?
    console.log(squares);
    // all the possiblities to win the game in an array
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // loop through the array called lines
    for (let i = 0; i < lines.length; i++) {
        // set each item in the array to a const variable which will be created each item
        const [a, b, c] = lines[i];
        // var a = lines[i][0];
        // var b = lines[i][1];
        // var c = lines[i][2];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        // 1. if the square has something inside and 2. what is inside matches with what is 
        // inside the first square , 3. then what is inside the fist square matches with
        // what is inside the third square
        return lines[i];
        }
    }
    return null;
}

///////////////////////////EXECUTION///////////////////////////
createGrid();

// This is where I add the click eventlistener
let divCells = document.querySelectorAll('.cell');
let isX = true;
let square = new Array(9).fill(null);

// the clicking functions x and o
for (let i = 0; i < divCells.length; i++) {
    let eachDiv = divCells[i];
    // console.dir(eachDiv);
    eachDiv.addEventListener("click", function(e) {
        // alert('you clicked me');
        if (isX) {
            e.target.textContent = 'X';
            isX = false; 
            // after the newly created X or O (textContent) is displayed, we switch to false or true, 
            // which takes us to the other part of the if else condition
        } else {
            e.target.textContent = 'O';
            isX = true;
        }

        // what is e.target?? e.target is the element that has been clicked (based on our event)
        
        // display winner

        // fill the square array, the first part is the array of divs each with an id,
        // the second part will be whatever the user clicked, x or o
        square[e.target.getAttribute('cell-id')] = e.target.textContent;

        // Player turns
        // grab the newly created div to display the player turns 
        let playerisNext = document.querySelector("#player");
        // create text content for the div
        playerisNext.textContent = " Next Player is : ";
        // alternate between 'x' and 'o' using the boolean declared above
        playerisNext.textContent += (isX) ? "X" : "O"; // how do I read this?

        //calculate the winner
        let winner = calculateWinner(square); ///// links to above
        // based on the calculateWinner function and what has been displayed on the board

        // I have to display the winner
        if (winner) {
            let cells = document.querySelectorAll('div.cell');
            for (let j = 0; j < cells.length; j++) {
                let eachCell = cells[j];
                let cellId = parseInt(eachCell.getAttribute("cell-id"));
                if (winner.includes(cellId)) {
                    console.log(eachCell);
                    eachCell.className = "cell winner";
                }
            }
            playerisNext.textContent = "winner : " ;
            playerisNext.textContent += (isX) ? "O" : "X"; // ternary condition

            // stop playing after (removeEventListener)
            let selectedDiv = document.querySelector('#tictactoe')
            let containerClone = selectedDiv.cloneNode(true);
            selectedDiv.parentNode.replaceChild(containerClone, selectedDiv);
        } 
        // for a draw
        if(!winner && !square.includes(null)){ // trying to find null
            // includes is a way to find what values are in an array
            playerisNext.textContent = "Draw" ;
        }

        // to prevent the user from clicking on the same div
        let divClone = e.target.cloneNode(true);
        e.target.parentNode.replaceChild(divClone, e.target);
    });
}