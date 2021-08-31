// event listen to start the quiz
// when the quiz started decreasing the timer
// displying the question -- if the timer is not zero or there is still question left
// event listener to whatever answer the user chooses
// check that answer against the correct answer
// right --> move on, false --> subtract 10 second then move on
// check the timer again to make sure it's not zero, if it's zero --> display a message
//if the timer is not zero and the user got through the quiz --> display the score and ask the user to input a name for the high score
// after getting the score then added it to the high score list and store it locally.
//score logic will be in the score.js
var startButton = document.querySelector("#start-quiz");
var timeLeft = 100;
var questionBankObj = [
    {
        title: "what is your name?",
        choices: ["nana", "kim anh", "bee", "All of these above"],
        answer: "All of these above",
    },
];

var startquiz = function(){
    console.log("quiz start");
}

startButton.addEventListener("click", startquiz);