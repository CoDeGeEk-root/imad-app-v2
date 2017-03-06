console.log('Loaded!');

//change the text of main text

var element = document.getElementById('main-text');

element.innerHTML = "Wow, this is awesome mate!";

//mave image

var img = document.getElementById('mady');

img.onclick = function () {
    img.style.marginLeft = '100px';
};