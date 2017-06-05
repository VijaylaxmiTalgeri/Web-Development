//Give the 6 grids some colors
// var colors = ["rgb(255, 0, 0)", 
// 			  "rgb(0, 255, 0)", 
// 			  "rgb(0, 0, 255)", 
// 			  "rgb(255, 255, 0)", 
// 			  "rgb(255, 0, 255)",
// 			  "rgb(0, 255, 255)"
// 			];

var numSquares = 6;

//Generate 6 random colors between 0 and 255 
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var mesgDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset1");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");


easyButton.addEventListener("click", function() {
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");

	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	// Hide the last 3 squares
	for(var i=0; i < squares.length ; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";	
		}
	}
});

hardButton.addEventListener("click", function() {
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");

	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i < squares.length ; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});
	
resetButton.addEventListener("click", function() {
	//generate random colors
	colors = generateRandomColors(numSquares);
	//pick new color
	pickedColor = pickColor();
	//change color display to pickedcolor
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i=0; i < squares.length ; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	mesgDisplay.textContent = "";
	this.textContent= "New Colors";
});

colorDisplay.textContent = pickedColor; 

for(var i=0; i < squares.length ; i++) {
	squares[i].style.background = colors[i];

	// Add click Listeners to squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if( clickedColor === pickedColor) {
			mesgDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColor(clickedColor);
		}
		else {
			this.style.background = "#232323";
			mesgDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color) {
	for(var i=0; i < squares.length ; i++) {
		squares[i].style.background = color;
		h1.style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num) {
	var arr = [];
	for(var i = 0 ; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//Pick a RED between o and 255
	var red = Math.floor(Math.random() * 256);
	//Pick a GREEN between o and 255
	var green = Math.floor(Math.random() * 256);
	//Pick a BLUE between o and 255
	var blue = Math.floor(Math.random() * 256);

	return ("rgb(" + red + ", " + green + ", " + blue + ")"); 
}	