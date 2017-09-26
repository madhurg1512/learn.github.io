var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Edsger-Wybe-Dijkstra.jpg') {
        myImage.setAttribute('src', 'images/Esdger-Dijkstra-Non-competitive-spirit.jpg');
    } else {
        myImage.setAttribute('src', 'images/Edsger-Wybe-Dijkstra.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name: ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Edsger Dijkstra is a legend, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Edsger Dijkstra is a legend, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
