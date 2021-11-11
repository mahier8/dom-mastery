// 1. let xhr = new XMLHttpRequest ();
// 2. xhr.open('GET', 'url');
// 3. xhr.addEventListener('readystatechange' , function(e) {
// 4.   if (xhr.readyState ===4  && xhr.status == 200) {
//         console.log(xhr.responseText);
//     }
// 5.    let response = JSON.parse(xhr.responseText);
// })

function loadFile(file) {
  
    var xhr = new XMLHttpRequest();
    // we want to get back the content of the file, the GET method is enough to do it :
    xhr.open('GET', file);
    xhr.addEventListener('readystatechange', () => { // We manage here an asynchronous request

        
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 || xhr.status === 0) { // if the file is loaded without error
            console.log(xhr.responseText);
            document.getElementById('fileContent').innerHTML = '<span>' + xhr.responseText + '</span>'; // We display

        } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status != 200) { // in case of error

            alert('There is an error !\n\nCode :' + xhr.status + '\nText : ' + xhr.statusText);

        }
   });

    xhr.send(null); // the request is ready we send everything !

}

(function() { // as always, an IIFE in order to not have globals variables

    var inputs = document.getElementsByTagName('input'),
        inputsLen = inputs.length;

    for (var i = 0; i < inputsLen; i++) {

        inputs[i].addEventListener('click', function() {
            loadFile(this.value); // at each click a file gonna be loaded in the page
        });

    }

})();




