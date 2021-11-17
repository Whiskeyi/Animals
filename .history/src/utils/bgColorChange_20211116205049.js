var arrColor = ["#FC9F4D", "#E98B2A", "#90B44B", "#4D5139", "#1C1C1C", "#4F4F48",
                    "#FF5E99", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
                    "", "", "", "", "", "", "", "", "", ""];

function bgcolor()
{
    var c=Math.floor(Math.random()*5);
    document.bgColor = colors[c];
}
bgcolor();