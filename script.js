$(document).ready(function(){

//var random = Math.floor(Math.random()*4);

//0, 1, 2, 3
// console.log(random);
// console.log(random);
// console.log(random);
// console.log(random);
// console.log(random);

//yellow = 0
//green = 1
//red = 2
//blue = 3
const YELLOW = "YELLOW";
const GREEN = "GREEN";
const RED = "RED";
const BLUE = "BLUE";

//object simon
//access properties, simon.colors, etc
var simon = {
	sendColor: function(color){

		if (!simon.sequence.length){  //falsey value, same as === 0;
			//start a new game
			simon.nextSequence();
		}else {
			if (color === simon.sequence[simon.step]){
			//go to the next step
				if (simon.step === simon.sequence.length -1){
					console.log("sequence complete!");
					simon.step = 0;
					simon.nextSequence();
				}else{
					simon.step++;
				}

		  	}else {
			  	//!! loose condition
			  	alert("WRONG!!");
			  	simon.sequence = []; //reset the game
			  	simon.step = 0;
		  	}
		}

		console.log("NEW COLOR: " + color);
	},
	sequence: [],
	colors: [YELLOW, GREEN, RED, BLUE],
	step: 0,
	nextSequence: function(){
		var nextColor = simon.colors[Math.floor(Math.random()* simon.colors.length)];
		console.log(nextColor); //not defined
		simon.sequence.push(nextColor);
		console.log(simon.sequence);
	},
};
simon.nextSequence();


const yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
//$('#dice-button').click(e => rollSound.play());
const greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");

const redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");

const blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");


$(document).ready(function(){
	$("#yellow").on("click", function(){
		simon.sendColor(YELLOW);
		yellowSound.play();
		$("#yellow").addClass("light-yellow").delay(400).queue(function(){
			$(this).removeClass("light-yellow").dequeue();
		});
		//yellowSound.play();
	});
});
$(document).ready(function(){
	$("#green").on("click", function(){
		simon.sendColor(GREEN);
		greenSound.play();
		$("#green").addClass("light-green").delay(400).queue(function(){
			$(this).removeClass("light-green").dequeue();
		});
		//greenSound.play();
	});
});
$(document).ready(function(){
	$("#red").on("click", function(){
		simon.sendColor(RED);
		redSound.play();
		$("#red").addClass("light-red").delay(400).queue(function(){
			$(this).removeClass("light-red").dequeue();
		});
		//redSound.play();
	});
});
$(document).ready(function(){
	$("#blue").on("click", function(){
		simon.sendColor(BLUE);
		blueSound.play();
		$("#blue").addClass("light-blue").delay(400).queue(function(){
			$(this).removeClass("light-blue").dequeue();
		});
		//blueSound.play();
	});
});











}); //doc ready func ends