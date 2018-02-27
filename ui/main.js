console.log('Loaded!');
var text=document.getElementById('main-text');

text.innerHTML = 'New Value';
var img= document.getElementById('madi');

var pos = 0;

function moveright(){
    pos += 1;
    img.style.marginLeft = pos + 'px';
}

img.onclick= function(){
    var interval = setInterval(moveright,20);
};