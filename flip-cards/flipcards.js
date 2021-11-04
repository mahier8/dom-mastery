// random number
// random number will have to take in whatever is entered into the input
const randomNumber = function (min, max) {
    let nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
};

// create forms
function createForms (){
    let mainDiv = document.querySelector('#main-container');
    let firstForm = document.createElement('form');
    // firstForm.action = ""
    mainDiv.appendChild(firstForm);

    // label and text node
    let firstLabel = document.createElement('label');
    let tnFirstLable = document.createTextNode("Enter an amount of cards :");
    firstForm.appendChild(firstLabel);
    firstLabel.appendChild(tnFirstLable);

    // input
    let firstInput = document.createElement('input');
    firstInput.type = "number";
    firstInput.id = "firstInput";
    firstInput.value = 4;
    firstForm.appendChild(firstInput);

    // first button and text node
    let firstButton = document.createElement('button');
    firstForm.appendChild(firstButton);
    let tnFirstButton = document.createTextNode("Generate cards");
    firstButton.appendChild(tnFirstButton);
}

// both button events
function buttonEvents() {
    // grab form and add event listener of submit
    let firstForm = document.querySelector('form');
    firstForm.addEventListener('submit', function(e) {
        // prevent page from refreshing
        e.preventDefault();
        // store the value we are getting from the form in the variable inputValue
        let inputValue = document.querySelector("#firstInput").value;
        console.log(inputValue);

        // call the createGrid function and pass in the value from the input (inputValue)
        createGrid(inputValue);
    });

    // set event second button, then grab all the cards and store 
    let showButton = document.querySelector("#show");
    showButton.addEventListener("click", function(){
        let cards = document.querySelectorAll(".card"); // (will be an array)
        for(let i=0; i<cards.length; i++){
            let card = cards[i];
            card.className = "new-card"; //for each card, give it a new classname (css)
        }
    })
}

// to create the grid (the divs we will use thougout). Also, default is set to 4.
function createGrid(nbcards=4) { // Question 1. has this been set or passed in? optional argument
    // create divs
    let mainDiv = document.querySelector('#main-container'); // tried to remove but it broke
    let cardHolderDiv = document.querySelector('#card-holder');
    cardHolderDiv.innerHTML = "";  // set the card holder div to empty
    mainDiv.appendChild(cardHolderDiv); // tried to remove but it broke
    let oLetter = randomNumber(0, nbcards - 1); // we call the random number function and store it in the variable
    // because we start from 0 we have to subtract 1 from the end. later we cant input 0 as a value   

    // a for loop iterating through all of the cards
    for (let i = 0; i < nbcards; i++) { 
        let card = document.createElement("div");
        card.className = "card";
        cardHolderDiv.appendChild(card); // we set the text with textContent X or O
        card.textContent = "X";
        if(i === oLetter){
            card.textContent = "O";
        }
        // we add a clicking event listerner 
        card.addEventListener("click", function(e) {
            card.className = "new-card";
            if (card.textContent === "O"){ 
                // if we find the card with the O textContent, then we remove the event
                // listener using the parent
                cardHolderDivClone = cardHolderDiv.cloneNode(true);
                cardHolderDiv.parentNode.replaceChild(cardHolderDivClone, cardHolderDiv);
                return;
            }
        });
    }
}
createForms();
createGrid()
buttonEvents();

