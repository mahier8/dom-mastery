// These are all accessor methods

// ES5

// getElementById("theId");
// geElementsByTagName("div or ul or nav") will always return an Array s its more than one
// getElementsByname("value of the name attribute") to get inputs inside a form as long as 

// ES6

// querySelector("CSS selector"); returns the first HTML element that matches the 
// CSS selector.
// querySelectorAll("CSS selector"); returns all HTML elemnts matching the CSS selector, 
// this means we end up with an array. 

// let mainContainer = document.getElementById("main-container");
let mainContainer = document.querySelector("body div#mainContainer");

console.dir(mainContainer);
console.log(mainContainer.id);

let lis = document.getElementsByTagName("li");
console.log(lis);
for (let i = 0; i < lis.length; i++) {
    // lis[i].className = "test";
    // let attr = lis[i].getAttribute();
    lis[i].setAttribute('data-list', 'marie' + i) ;
    // console.log(attr);
}

let h1 = mainContainer.querySelector("h1");
h1.classList.remove("title");
console.dir(h1);
/////////////////////////


