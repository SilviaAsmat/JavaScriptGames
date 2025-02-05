var height = 6;// num of attempts
var width = 5;// length of word

var row = 0;// current attempt
var col = 0;// current letter

var gameOver = false;
var word = "Squid"; 

window.onload = function(){
    initialize();
}

function initialize() {
    //Create board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile"></span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString(); 
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile); 
        }
    }
