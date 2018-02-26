console.log('Loaded!');
var text=document.getElementById('main-text');

element.innerHTML = 'New Value';
var element= document.getElementById('madi');
var marginLeft = 0;
function moveright(){
    marginLeft = marginLeft+10;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick= function(){
    var interval = setInterval(moveRight,100);
};