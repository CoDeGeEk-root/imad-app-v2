console.log('Loaded!');

//change the text of main text

var element = document.getElementById('main-text');

element.innerHTML = "Wow, this is awesome mate!";

//mave image

var img = document.getElementById('mady');

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px' ;
}

img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};