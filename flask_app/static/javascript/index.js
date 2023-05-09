// first step to AJAX - Create an XML object -The XMLHttpRequest object can be used to exchange data with a server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
    // variable = new XMLHttpRequest();

// created the ajax info text, for now under templates.

// A callback function is a function passed as a parameter to another function
// In this case, the callback function should contain the code to execute when the response is ready
// xhttp.onload = function () {
    // what to do when the response is ready


// To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:

    //open(method, url, async)	Specifies the type of request
        //method: the type of request: GET or POST
        //url: the server (file) location
        //async: true (asynchronous) or false (synchronous)

        //send();   Sends the request to the server (used for GET)
        //send(string)  send the request to the server ( Used for POST)

    // xhttp.open("GET", "ajax_info.txt", true);
    // xhttp.send();

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("demo").innerHTML = this.responseText;
        }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

// function loadDoc(){
//     console.log("it works");
// }