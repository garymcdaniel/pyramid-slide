var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");
var shapeElem = document.getElementById("shape");

formElem.oninput = function(event) {

}

function getHeight(val) {
    document.getElementById("slider").innerHTML = val;
}

function determineBlockAndHeightThenDrawPyramid() {

    var height = document.getElementById('heightval').value; // something
    var brickSymbol = document.getElementById('mySelect').value; // something

    // figure out what these should be.

    drawPyramid(brickSymbol, height);
}

function drawPyramid(brickSymbol, height) {
    
    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";
    
    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;
        var rowStr = ""
        // build up a string for this row
        
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brickSymbol;
        }
        
       

        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }

}
determineBlockAndHeightThenDrawPyramid();

