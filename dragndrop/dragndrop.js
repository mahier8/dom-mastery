// // mousedown event
// let dragDiv = document.querySelectorAll('.draggableBox');


// for (let i = 0; i < dragDiv.length; i++) {
//     dragDiv[i].addEventListener('mousedown', function(e) {
    
//     let selectedDiv =  e.target;
//     console.log(selectedDiv);


//     selectedDiv.addEventListener('mousemove', function(e) {
//         // grabbing the element that was selected 
//         });
//     });
// }

// // mousemove event
// function getOffset(selectedDiv) {
//     let top = 0,
//     left = 0
//     do {
//             top += selectedDiv.offsetTop;
//             left += selectedDiv.offsetLeft;
//         } while (selectedDiv = selectedDiv.offsetParent);
//         return {
//             top: top,
//             left: left
//         };
// }

// getOffset();


// // mouseup event

/////////////////////////////////

//1. setBoxLocation 
//2. changeBoxLocation 
//3. Set Final Location - (mouseup)
//4. on click all boxes loop, call 3 functions 

let box3 = document.getElementById('box3');

let storage = {

};

// we need the initial position 
box3.addEventListener("mousedown", function(e) {
    storage.top = e.clientY - e.target.offsetTop; // click at the y coordinate
    storage.left = e.clientX - e.target.offsetLeft; // click at the x coordinate
    console.log(storage.top);

    storage.box3 = e.target;
    console.log(storage);
})

document.addEventListener("mousemove", function(e) {
    if (storage.box3) {
        storage.box3.style.top = e.clientY - storage.top + 'px';
        storage.box3.style.left = e.clientX - storage.left + 'px';
    }    
})

box3.addEventListener("mouseup", function(e) {
    if (storage.box3) {
        storage = {}
    }
})


// box3.addEventListener('mousedown', function (e) {
//     // coordinates.top = e.target.offset
//     // document.addEventListener('mousemove', function (e) {
//     //     let mouseY = e.clientY;
//     //     let mouseX = e.clientX;

//     //     console.log(`Mouse X: ${mouseX}`);
//     //     console.log(`Mouse Y: ${mouseY}`);
//     //     e.target.style.top = (box3Top + 'px'); // on the 
//     //     e.target.style.left = (box3Left + 'px');
//     });
// });





//When finished:

// let boxes = document.querySelectorAll(".draggableBox");
//When your ready this is boxes[i]
// for (let i = 0; i < boxes.length; i++) {
//     console.log(boxes[i].offsetTop);
//     console.log(boxes[i].offsetLeft);
// }
