var height = 6;// num of attempts
var width = 5;// length of word

var row = 0;// current attempt
var col = 0;// current letter

var gameOver = false;
var word = "SQUID"; 

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
    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        if(gameOver) return;

        //alert(e.code);
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
        }
        else if (e.code == "Backspace") {
            if (0 < col && col <= width) {
                col -=1;
            }
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            currTile.innerText = "";
        }

        else if (e.code == "Enter") {
            update();
            row += 1; //start new row
            col = 0; // start at 0
        }

        if(!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }

    })
}

function update() {
    let correct = 0;
    let letterCount = {}; // map to keep track of letter counts
    for (let i = 0; i < word.length; i++) {
        letter = word[i];ß
        if(letterCount[letter]) {
            letterCount[letter] += 1;
        }
        else {
            letterCount[letterCount] = 1;
        }
    }
    // iterate to check correct tiles
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        if(word[c] == letter) {
            currTile.classList.add("correct");
            correct += 1;
            letterCount[letter] -= 1;
        }
        else if (correct == width) {
            gameOver = true;
        }
    }
    // iterate to find if in wrong position
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        if (!currTile.classList.contains("correct")) {
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                letterCount[letter] -= 1;
            }
            else {
                currTile.classList.add("absent");
            }
        }
    }
}




