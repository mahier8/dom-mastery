function poop() {
  let tableData = document.querySelectorAll("td"); // I grab all of the tds

  for (i = 0; i < tableData.length; i++) {
    // I loop through the length of the table data array
    tableData[i].addEventListener("click", function (e) {
      // on each item in the table data array I add a click
      let newInput = document.createElement("input"); // I create an input
      newInput.type = "text"; // I give the new input a type text
      newInput.value = e.target.textContent; // I set the value of the input to whatever textContent is added where I click

      e.target.replaceChild(newInput, e.target.firstChild); //
      // If i take out first child at the end and add in this.parentNode on the element I click it works
      // I replace the first child of whatever I click on with an input

      newInput.focus(); // to create focus and select
      newInput.select();

      newInput.addEventListener("blur", function (e) {
        // I add a blur event listener to the inputs I created
        // This is where the inverse of the previous function happens
        // I want to create a text node, and replace what I clicked with it
        let newTextnode = document.createTextNode(e.target.value); // I create a text node
        e.target.parentNode.replaceChild(newTextnode, e.target); //
      });
    });
  }
}

poop();
// question3.js:9 Uncaught TypeError: Failed to execute 'replaceChild' on 'Node': parameter 2 is not of type 'Node'.
//     at HTMLTableCellElement.<anonymous> (question3.js:9)
