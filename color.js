var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
//var modeButtons = document.querySelectorAll(".mode");

// for(var i = 0; i < modeButtons.length ; i++){
//     modeButtons[i].addEventListener("click", function(){
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         this.classList.add("selected");
//         this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
//         reset();
//     });
// }
//
// function reset() {
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change colorDisplay to match picked Color
// 	colorDisplay.textContent = pickedColor;
// 	resetButton.textContent = "New Colors";
// 	messageDisplay.textContent = "";
// 	//change colors of squares
// 	for(var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.display = "block";
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.background = "steelblue";
// }

easyBtn.addEventListener("click", function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numSquares = 3;
messageDisplay.textContent = "";
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(var i = 0 ; i< squares.length ; i++){
    if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = "none";
    }
}
h1.style.background = "steelblue";
});


hardBtn.addEventListener("click", function(){
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numSquares = 6;
messageDisplay.textContent = "";
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(var i = 0 ; i< squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
}
h1.style.background = "steelblue";
});


resetButton.addEventListener("click", function(){
messageDisplay.textContent = "";//generate all new colors
colors = generateRandomColors(numSquares);
//pick a new random color from array
pickedColor = pickColor();
//change colorDisplay to match the pickedColor.
colorDisplay.textContent = pickedColor;
this.textContent = "New Colors!";
//change the colors of squares.
for(var i = 0 ; i < squares.length ; i++){
    //add initialcolors to squares.
    squares[i].style.backgroundColor = colors[i];
}
h1.style.background = "steelblue";
});




colorDisplay.textContent = pickedColor;





    for(var i = 0 ; i < squares.length ; i++) {
        //add initialcolors to squares.
        squares[i].style.backgroundColor = colors[i];

        //add click listeners to the squares.
        squares[i].addEventListener("click", function(){

        //grab color of picked square.
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor.
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again!";
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "try Again!";
        }
    });
}



function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length ; i++ ){
        //change all colors to match the correct color.
        squares[i].style.backgroundColor = color;
        }
    }

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0 ; i < num ; i++){
        //get some random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;
}


function randomColor(){
    //make a "red " from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //make a "green " from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //make a "blue " from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
