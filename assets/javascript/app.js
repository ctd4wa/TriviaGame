$(document).ready(function(){
    var qna = [
        {
            question: "What was the first Pokémon designed?",
            choice: ["Pikachu", "Ditto", "Charmander", "Rhydon"],
            answer: 3,
            image: "https://66.media.tumblr.com/d0c9caf64827981e3cc44c6a9981d61f/tumblr_poivo4iwfq1sgge6vo1_640.gif"
        },
        {
            question: "According to the National Pokédex, which Pokémon is classified as number 25?",
            choice: ["Pidgey", "Pikachu", "Sandshrew", "Vulpix"],
            answer: 1,
            image: "https://media3.giphy.com/media/39GAXpLVKvYRO/giphy.gif?cid=790b76115d0ae83241474d2e63f9f3fc&rid=giphy.gif"
        },
        {
            question: "Pokémon Red featured which Pokémon on its cover?",
            choice: ["Charizard", "Vulpix", "Moltres", "Charmander"],
            answer: 0,
            image: "https://media0.giphy.com/media/4tY9mWimjpD9e/giphy.gif?cid=790b76115d0af4477473576c51a14b82&rid=giphy.gif"
        },
        {
            question: "The names of the Professors featured in the Pokémon console games are based off of what?",
            choice: ["flowers", "Japanese cuisine", "trees", "teas"],
            answer: 2,
            image: "https://media.giphy.com/media/IiA6yfcjtVSsU/giphy.gif"
        },
        {
            question: "The cities of the Kanto Region are named after what?",
            choice: ["Japanese cities", "Colors", "Japanese dishes", "fish"],
            answer: 1,
            image: "https://media.giphy.com/media/khz8FuMbvbvdC/giphy.gif"
        },
        {
            question: "What type of Pokémon take no damage from Normal-type attacks?",
            choice:["Dark", "Psychic", "Grass", "Ghost"],
            answer: 3,
            image: "https://media0.giphy.com/media/DQtaF5WbB6rbG/giphy.gif"
        },
    ];
    var correctCount = 0;
    var incorrectCount = 0;
    var blankCount = 0;
var timer = 20;
var intervalId;
var userGuess ="";
var running = false;
var qCount = qna.length;
var pick;
var index;
var newArray = [];
var holder = [];



$("#reset").hide();
//click start button to start game
$("#start").on("click", function () {
		$("#start").hide();
		displayQuestion();
		runTimer();
		for(var i = 0; i < qna.length; i++) {
	holder.push(qna[i]);
}
	})
//timer start
function runTimer(){
	if (!running) {
	intervalId = setInterval(decrement, 1000); 
	running = true;
	}
}
//timer countdown
function decrement() {
	$("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
	timer --;

	//stop timer if reach 0
	if (timer === 0) {
		blankCount++;
		stop();
		$("#answerblock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
		hidepicture();
	}	
}

//timer stop
function stop() {
	running = false;
	clearInterval(intervalId);
}
//randomly pick question in array if not already shown
//display question and loop though and display possible answers
function displayQuestion() {
	//generate random index in array
	index = Math.floor(Math.random()*qna.length);
	pick = qna[index];

//	if (pick.shown) {
//		//recursive to continue to generate new index until one is chosen that has not shown in this game yet
//		displayQuestion();
//	} else {
//		console.log(pick.question);
		//iterate through answer array and display
		$("#questionblock").html("<h2>" + pick.question + "</h2>");
		for(var i = 0; i < pick.choice.length; i++) {
			var userChoice = $("<div>");
			userChoice.addClass("answerchoice");
			userChoice.html(pick.choice[i]);
			//assign array position to it so can check answer
			userChoice.attr("data-guessvalue", i);
			$("#answerblock").append(userChoice);
//		}
}



//click function to select answer and outcomes
$(".answerchoice").on("click", function () {
	//grab array position from userGuess
	userGuess = parseInt($(this).attr("data-guessvalue"));

	//correct guess or wrong guess outcomes
	if (userGuess === pick.answer) {
		stop();
		correctCount++;
		userGuess="";
		$("#answerblock").html("<p>Well Done!</p>");
		hidepicture();

	} else {
		stop();
		incorrectCount++;
		userGuess="";
		$("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
		hidepicture();
	}
})
}


function hidepicture () {
	$("#answerblock").append("<img src=" + pick.image + ">");
	newArray.push(pick);
	qna.splice(index,1);

	var hidpic = setTimeout(function() {
		$("#answerblock").empty();
		timer= 20;

	//run the score screen if all questions answered
	if ((incorrectCount + correctCount + blankCount) === qCount) {
		$("#questionblock").empty();
		$("#questionblock").html("<h3>Game Over!  Did you catch 'em all?: </h3>");
		$("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
		$("#answerblock").append("<h4> Incorrect: " + incorrectCount + "</h4>" );
		$("#answerblock").append("<h4> Left Blank: " + blankCount + "</h4>" );
		$("#reset").show();
		correctCount = 0;
		incorrectCount = 0;
		blankCount = 0;

	} else {
		runTimer();
		displayQuestion();

	}
	}, 3000);


}

$("#reset").on("click", function() {
	$("#reset").hide();
	$("#answerblock").empty();
	$("#questionblock").empty();
	for(var i = 0; i < holder.length; i++) {
		qna.push(holder[i]);
	}
	runTimer();
	displayQuestion();

})

})
// start with Start Button page
// when Start is clicked, questions&answers appear and timer begins
// How do you have an individual container for the Start button and then hide it to begin the game?
// Once Start is clicked, the game begins and the timer runs.
// Show timer and set it to 30 seconds to decrease
// x many questions, with answers in the format of radio buttons(html input or bootstrap button ids)
//