$(document).ready(function(){
    var qna = [
        {
            question: "What was the first Pokémon designed?",
            choices: ["Pikachu", "Ditto", "Charmander", "Rhydon"],
            answer: 3,
            image: "https://66.media.tumblr.com/d0c9caf64827981e3cc44c6a9981d61f/tumblr_poivo4iwfq1sgge6vo1_640.gif"
        },
        {
            question: "According to the National Pokédex, which Pokémon is classified as number 25?",
            choices: ["Pidgey,", "Pikachu", "Sandshrew", "Vulpix"],
            answer: 1,
            image: "https://media3.giphy.com/media/39GAXpLVKvYRO/giphy.gif?cid=790b76115d0ae83241474d2e63f9f3fc&rid=giphy.gif"
        },
        {
            question: "Pokémon Red featured which Pokémon on its cover?",
            choices: ["Charizard", "Vulpix", "Moltres", "Charmander"],
            answer: 0,
            image: "https://media0.giphy.com/media/4tY9mWimjpD9e/giphy.gif?cid=790b76115d0af4477473576c51a14b82&rid=giphy.gif"
        },
        {
            question: "The names of the Professors featured in the Pokémon console games are based off of what?",
            choices: ["flowers", "Japanese cuisine", "trees", "teas"],
            answer: 2,
            image: "https://media.giphy.com/media/IiA6yfcjtVSsU/giphy.gif"
        },
    ]
    var correctCount = 0;
    var incorrectCount = 0;
    var blankCount = 0;
    var timer = 0;
    var userGuess = "";
    var intervalId;
    var QuestionCount = qna.length;
    var choice;



    $("#start").on("click", function(){
        $("#start").hide();
        showQuestion();
        startTimer();
        
            
        }
    })
})
// start with Start Button page
// when Start is clicked, questions&answers appear and timer begins
// How do you have an individual container for the Start button and then hide it to begin the game?
// Once Start is clicked, the game begins and the timer runs.
// Show timer and set it to 30 seconds to decrease
// x many questions, with answers in the format of radio buttons(html input or bootstrap button ids)
//