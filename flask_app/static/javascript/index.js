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
document.getElementById('button').addEventListener('click', loadText);
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/static/javascript/ajax_info.txt", true);
    xhttp.onload = function(){
        if (xhttp.status == 200){
            document.getElementById("text").innerHTML = this.responseText;
            // right now, the text is not shown because it is not status 200 rather 404 where it can not find the  text
        }
    }
    xhttp.onerror = function(){
        console.log( " request error ")
    }
    xhttp.send();
}


document.getElementById('button2').addEventListener('click', loadText);
function loadResults() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "localhost", true);
    // inside the url_for() we should be putting the address of our site .... so index from (def index())?  or /route

    // Url_for() -by referencing the function name in flask, you will get acccess to the route ("/"). so URL_for('submit_landmarks') would return/show you '/landmarks'
    
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // added Request header. important because otherwise the actual data that you send will not be sent
    xhttp.onload = function(){
        if (xhttp.status == 200){
            document.getElementById("result").innerHTML = this.responseText;
            var dataReply = JSON.parse(this.responseText)
            // if I am sending back a dictionary you would have to parse it.  
            console.log(dataReply)// test it out, he had alert(dataReply)
        }
    }
    xhttp.onerror = function(){
        console.log( " request error ")
    }
    dataSend = JSON.stringify({
        'start_point' : start_point,
        'end_point' : end_point
    });
    xhttp.send(dataSend);
    // you have to pass in some variables.
}
