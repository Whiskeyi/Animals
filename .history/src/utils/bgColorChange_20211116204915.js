var arrColor = ["#FC9F4D", "#E98B2A", "#90B44B", "#bdd630", "#4479bd", "#f5b11e"];

function bgcolor()
{
    var c=Math.floor(Math.random()*5);
    document.bgColor = colors[c];
}
bgcolor();