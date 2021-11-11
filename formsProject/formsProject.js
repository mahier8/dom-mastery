// submitting forms
let formInputs = document.querySelector('form');

formInputs.addEventListener("submit", function(e) {
e.preventDefault();

});

formInputs.addEventListener("reset", function(e) {

});

// getting form values
// gender


// last name
let lastNameInput = document.querySelector('#lastName');

lastNameInput.addEventListener("keyup", function(e) {
    let lastNameInputKeys = e.target.value;
    console.log(lastNameInputKeys);

    // at least two characters of the alphabet
    if (/^[a-zA-Z]{2,}$/.test(lastNameInputKeys)) {
        console.log("Your last name is correct.");
        lastNameInput.className = "correct";
    } else {
        console.log("Your last name is incorrect!");
        lastNameInput.className = "incorrect";
    }
});

// first name
let firstNameInput = document.querySelector('#firstName');

firstNameInput.addEventListener("keyup", function(e) {
    let firstNameInputKeys = e.target.value;
    console.log(firstNameInputKeys);

    // at least two characters of the alphabet
    if (/^[a-zA-Z]{2,}$/.test(firstNameInputKeys)) {
        console.log("Your first name is correct.");
        firstNameInput.className = "correct";
    } else {
        console.log("Your first name is incorrect!");
        firstNameInput.className = "incorrect";
    }
});

// Age
let ageInput = document.querySelector("#age");

ageInput.addEventListener("keyup", function(e) {
    let ageInputKeys = e.target.value;
    console.log(ageInputKeys);

    // Question 1. How do i set this range // This one isnt working correctly (I need a number from 5-140)
    /*
        Regex for 1-127
        Regex for range 1 to 127 is 
        \b([1-9]|[1-9][0-9]|1[01][0-9]|12[0-7])\b
        The numeric range 1 to 127 is divided in to
        1. 1 to 9
        2. 10 to 99
        3. 100 to 119
        4. 120 to 127
        b limit of the word
    */
    if (/\b([5-9]|[1-9][0-9]|1[1-4][0])\b/.test(ageInputKeys)) {
        console.log("Your age is correct.");
        ageInput.className = "correct";
    } else {
        console.log("Your age is incorrect!");
        ageInput.className = "incorrect";
    }
});

// Login
let loginInput = document.querySelector("#login")

loginInput.addEventListener("keyup", function(e) {
    let loginInputKeys = e.target.value;
    console.log(loginInputKeys);

    // at least four characters of the alphabet and numbers (need to include special characters) 
    // Question 2. not working after I added in the ".". I needed to remove [a-zA-Z1-9] and just add a "." only.
    if (/.{4,20}$/.test(loginInputKeys)) {
        console.log("Your login is correct.");
        loginInput.className = "correct";
    } else {
        console.log("Your login is incorrect!");
        loginInput.className = "incorrect";
    }
});

// Password
// Password confirm
let passwordInput = document.querySelector("#password")
let passwordConfirmInput = document.querySelector("#passwordConfirm");

passwordInput.addEventListener("keyup", function(e) {
    let passwordInputKeys = e.target.value;
    console.log(passwordInputKeys);
    
    // at least six characters of the alphabet and numbers (need to include special characters) 
    if (/.{6,20}$/.test(passwordInputKeys)) {
        console.log("Your password is correct.");
        passwordInput.className = "correct";
    } else {
        console.log("Your password is incorrect!");
        passwordInput.className = "incorrect";
    }
});

passwordConfirmInput.addEventListener("keyup", function(e) {
    let passwordConfirmInputKeys = e.target.value;
    console.log(passwordConfirmInputKeys);

    if (passwordConfirmInputKeys == passwordInput.value) {
        console.log("Your password is correct.");
        passwordConfirmInput.className = "correct";
    } else {
        console.log("Your password is incorrect!");
        passwordConfirmInput.className = "incorrect";
    }
    // has to be identical to the password
});

// Country
// check the notes to select in forms. How do we grab the select? I think it should be a for loop.
let countryInput = document.querySelector("#country");

countryInput.addEventListener("change", function(e) {
    // doesnt need regex
    let countryInputKeys = e.target.value;
    console.log(countryInputKeys);
});

// Newsletter
let newsletterInput = document.querySelector("#newsletter");

newsletterInput.addEventListener("click", function(e) {
    // doesnt need regex
    let newsletterInputKeys = e.target.value;
    console.log(newsletterInputKeys);

});




