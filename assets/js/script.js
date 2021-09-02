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
var index = 0;
var userData = {
    name: "",
    score: 0,
}
var questionBankObj = [
    {
        title: "what is your name?",
        choices: ["1. nana", "2. kim anh", "3. bee", "4. All of these above"],
        answer: "4. All of these above",
    },
];

//obtaingin the question and display it as within the h2 tag on the question screen.
var getQuestion = function(index){
    var question = document.querySelector("#question-screen h2");
    question.textContent = questionBankObj[index].title;
};

//displaying answer choices and obtain the user answer
var getChoices = function(index){
    var choiceIndex = questionBankObj[index].choices;
    var answerList = document.querySelector("#answer-list")

    for (var i = 0; i < choiceIndex.length; i++){
        var choiceNode = document.createElement("li");

        choiceNode.setAttribute ("id", "submit");
        choiceNode.setAttribute ("class", "answer-choice");
        choiceNode.textContent = choiceIndex[i];

        answerList.appendChild(choiceNode);
    }

    //obtaingin the user answer answer base on what user clicked
    var getUserChoices = document.querySelectorAll("#submit");
    for (var i = 0; i < getUserChoices.length; i++){
        getUserChoices[i].addEventListener("click", checkAnswer);
    };
};

//checking the user answer and update the timer
var checkAnswer = function(event){
    var userAnswer = event.target.textContent;
    var correctAnswer = questionBankObj[index].answer;

    if (userAnswer !== correctAnswer){
        timeLeft -= 20;
        console.log(timeLeft);
    }  
};

//displaying the question section, displaying the score section
var displayQuestion = function(){
    var startScreen = document.querySelector("#start-screen");
    var questionScreen = document.querySelector("#question-screen");

    startScreen.setAttribute("class", "hide");
    questionScreen.setAttribute("class", "");
}

var displayingScore = function(){
    var questionScreen = document.querySelector("#question-screen");
    var scoreScreen = document.querySelector("#score-screen");

    questionScreen.setAttribute("class", "hide");
    scoreScreen.setAttribute("class", "");
}

//running the timer
var startTimer = function(){
};

//running the quiz
var startQuiz = function(){
    displayQuestion();
    getQuestion(index);
    getChoices(index);
};



startButton.addEventListener("click", startQuiz);