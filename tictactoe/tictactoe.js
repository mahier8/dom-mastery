//function createGrid
function createGrid() {
    let container = document.querySelector('#tictactoe');
    for (let i = 0; i < 3; i++) {
            let row = document.createElement('div');
            row.className = "row";
            container.appendChild(row);
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement('div');
            cell.className = "cell";
            row.appendChild(cell);
        }
    }
}

createGrid();

let divCells = document.querySelectorAll('.cell');
let isX = true;
for (let i = 0; i < divCells.length; i++) {
    let eachDiv = divCells[i];
    console.dir(eachDiv);
    eachDiv.addEventListener("click", function(e) {
        // alert('you clicked me');
        
        if (isX) {
            e.target.textContent = 'X';
            isX = false;
        } else{
            e.target.textContent = 'O';
            isX = true;
        }
    });
}



let button = document.querySelector('button'); // we select the button
console.log(button); // we need to pass in the event as an argument
button.addEventListener('click', function(e) { // we use e instead of event
// we use the keyword addEventListener to function
e.target.textContent = 'You clicked'; // e.target means the element you want   
// we use event and target this time to refer to the function
// event provides way more events
})

let button2 = document.querySelector('#button2'); // we grab the second button
console.log(button2);
button2.addEventListener("click", function(e) { // add an event listener
    e.target.textContent = 'You clicked';
    let paragraph = document.querySelector('p');
    paragraphClone = paragraph.cloneNode(true);
    paragraph.parentNode.replaceChild(paragraphClone, paragraph);
    // Failed to execute 'replaceChild' on 'Node': 
    // The node to be replaced is not a child of this node.
});


// function displayNumbers() {
//     let divCells = document.querySelectorAll('.cell');
// // console.log(divCells);
//     for (let i = 0; i < divCells.length; i++) {
//         let eachDiv = divCells[i];
//         console.dir(eachDiv);
//         // let textContentIncrement = ++textContent;
//         // eachDiv.textContent = textContentIncrement;
//         eachDiv.textContent = i+1;
//     }
// }

// displayNumbers();
