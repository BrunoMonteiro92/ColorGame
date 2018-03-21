var numSquares = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.querySelector("#reset");

init();

function init() {
	setupDifficulty();
	setupSquares();
	reset();
}

function setupDifficulty () {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("btn-selected");
			modeButtons[1].classList.remove("btn-selected");
			this.classList.add("btn-selected");
			if (this.textContent === "Easy")
				numSquares = 3;
			else
				numSquares = 6;

			reset();
		});
	}
}

function setupSquares () {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function () {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor){
				changeColors(clickedColor);
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(argument) {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function reset () {
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.display = "block";
 			squares[i].style.background = colors[i];
 		} else {
 			squares[i].style.display = "none";
 		}
	}
}

resetButton.addEventListener("click", function () {
	reset();
});

// var easyButton = document.querySelector("#easy");
// easyButton.addEventListener("click", function () {
// 	messageDisplay.textContent = "";
// 	resetButton.textContent = "New Colors";
// 	numSquares = 3
// 	this.classList.add("btn-selected");
// 	hardButton.classList.remove("btn-selected");
// 	colors = generateColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = "steelblue";
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// var hardButton = document.querySelector("#hard");
// hardButton.addEventListener("click", function () {
// 	messageDisplay.textContent = "";
// 	resetButton.textContent = "New Colors";
// 	numSquares = 6
// 	this.classList.add("btn-selected");
// 	easyButton.classList.remove("btn-selected");
// 	colors = generateColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = "steelblue";
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });