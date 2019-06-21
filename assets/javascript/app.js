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
            choice: ["Pidgey,", "Pikachu", "Sandshrew", "Vulpix"],
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
    ]
    var correctCount = 0;
    var incorrectCount = 0;
    var blankCount = 0;
    var timer = 15;
    var userGuess = "";
    var intervalId;
    var QuestionCount = qna.length;
    var pick;
    var running = false;
    var holder = [];
    var choiceArray = [];



    $("#start").on("click", function(){
        $("#start").hide();
        showQuestion();
        startTimer();
        for(var i = 0; i < qna.length; i++) {
            holder.push(qna[i]);
        }
    });

    function startTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }

    function decrement() {
        $("#timeleft").html("<h3> You have " + timer + " seconds left!! </h3>");
        timer --;

            if (timer == 0) {
                blankCount++;
                stop();
                $("#answerblock").html("<p>Ruh roh! Time's up! The answer is:" + pick.choice[pick.answer] + "</p>");
                hidepicture();
            }

    }

    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    // displays question in a random array and displays multiple choices for each
    function showQuestion() {
        index = Math.floor(Math.random()*qna.length);
        pick = qna[index];

        $("#questionblock").html("<h2>" + pick.question + "</h2>");
        for (let i = 0; i < pick.choice.length; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);
            userChoice.attr("guessvalue", i);
            $("#answerblock").append(userChoice);    
        }
    }

    $(".answerchoice").on("click", function() {
        userGuess = parseInt($(this).attr("guessvalue"));
            if (userGuess === pick.answer ) {
                stop();
                correctCount++;
                userGuess="";
                $("#answerblock").html("<p> Well done! </p>");
                hidepicture();
            } else {
                stop();
                incorrectCount++;
                userGuess="";
                $("#answerblock").html("<p> Nope! The right answer is: " + pick.choice[pick.answer] + " </p>");
                hidepicture();
            }
    })
    function hidepicture () {
        $("#answerblock").append("<img src=" + pick.image + ">");
        choiceArray.push(pick);
        
        var hidepic = setTimeout(function() {
            $("#answerblock").empty();
            timer= 15;

        if ((incorrectCount + correctCount + blankCount) === QuestionCount) {
            $("#questionblock").empty();
            $("#questionblock").html("<h3> Did you catch 'em all? </h3>");
            $("#answerblock").append("<h4> Correct: " + correctCount + "</h4>");
            $("#answerblock").append("<h4> Incorrect: " + incorrectCount + "</h4>");
            $("#answerblock").append("<h4> Left Blank: " + blankCount + "</h4>");
        } else {
            startTimer();
            showQuestion();
        }
        }, 3000);
    }
})
// start with Start Button page
// when Start is clicked, questions&answers appear and timer begins
// How do you have an individual container for the Start button and then hide it to begin the game?
// Once Start is clicked, the game begins and the timer runs.
// Show timer and set it to 30 seconds to decrease
// x many questions, with answers in the format of radio buttons(html input or bootstrap button ids)
//