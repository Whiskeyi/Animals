var arrColor = ["#45c1bf", "#f0593e", "#aeacd4", "#bdd630", "#4479bd", "#f5b11e"];

var i = 0;
setInterval(function() {
    document.backgroundColor = arrColor[i];
    if(i == arrColor.length-1) i = 0;
    i++;
}, 1000);