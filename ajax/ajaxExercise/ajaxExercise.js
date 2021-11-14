function loadFile(file) { // passing in an argument
  
    // create the variable
    var xhr = new XMLHttpRequest();

    // use the GET/PUT method and the url to go to (up to 5 arguments) 
    xhr.open('GET', file);
    // add the event listener 'readystatechange'
    xhr.addEventListener('readystatechange', () => { 

        // handling the successful situation
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 || xhr.status === 0) { 
            console.log(xhr.responseText);
            // what we do in the successful situation
            document.querySelector('#content').innerHTML = xhr.responseText; 
            // what do i add here?

            //handling the errors
        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status != 200) { 

            alert('There is an error !\n\nCode :' + xhr.status + '\nText : ' + xhr.statusText);

        }
   });
// null goes along with the GET method
xhr.send(null);
}

(function() { 
// create an anonymous function 
    var button1 = document.querySelector('#button1'); // grab the button
    button1.addEventListener('click', function() { // add clicking event listener
        console.log("clicked");
            loadFile("http://localhost/sites/ajax/ajaxExercise/subMenu1.html"); 
            // need to load subMenu1
        });
})();

(function() { 
    var button2 = document.querySelector('#button2'); // grab the button
    button2.addEventListener('click', function() { // add clicking event listener
        console.log("clicked");
            loadFile("http://localhost/sites/ajax/ajaxExercise/subMenu2.html"); 
            // need to load subMenu2
        });
})();

(function() { 
    var button3 = document.querySelector('#button3'); // grab the button
    button3.addEventListener('click', function() { // add clicking event listener
        console.log("clicked");
            loadFile("error"); 
            // just need to add an error here, because it is already added 
        });
})();