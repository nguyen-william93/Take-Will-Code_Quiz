//declaring global variable and question bank obj
var startButoon =  document.querySelector("#start-quiz");
var questionScreen = document.querySelector("#question-screen");
var multipleChoice = document.querySelector("#answer-list");
var time = document.querySelector("#time");
var feedBack = document.querySelector("#feed-back");
var submitEl = document.querySelector("#submit");
var timeLeft = 20;
var index = 0;
var timerFunction;
var questionBankObj = [
    {
        question: "hi what is your nane?",
        choices: ["a", "b", "c", "d"],
        correctAnswer: "a"
    },
    {
        question: "How are you doing?",
        choices: ["a","b","c","d"],
        correctAnswer: "c"
    }  
];

//quiz ended, stop the timer, dispalying the result page for user and prompt to enter username
var quizEnd = function(){
    clearInterval(timerFunction);

    var scoreScreen = document.querySelector("#score-screen");
    scoreScreen.removeAttribute("class");

    var finalScore = document.querySelector("#final-score");
    finalScore.textContent = timeLeft;

    questionScreen.setAttribute("class", "hide");

}

//check the user answer and apply the correct consequences
//after checking the user answer, if there are still question left then display it, if not endquiz
var checkAnswer = function(){
    if (this.value !== questionBankObj[index].correctAnswer){
        timeLeft -= 10;
        if (timeLeft < 0){
            timeLeft = 0;
        }
        time.textContent = timeLeft;
        feedBack.textContent = "Wrong!";
        feedBack.setAttribute("class", "feed-back-wrong");
    } else {
        feedBack.textContent = "Correct!";
        feedBack.setAttribute("class", "feed-back-correct");
    };

    feedBack.setAttribute("class", "feed-back");
    setTimeout(function(){
        feedBack.setAttribute("class", "feed-back hide");
    }, 1000);

    index += 1;
    if(index === questionBankObj.length){
        quizEnd();
    } else {
        getQuestion();
    }
};

//generating the question and multiple choice pave
var getQuestion=  function(){
    var currentQuestion = questionBankObj[index];

    var questionTitle = document.querySelector("#question-screen h2");
    questionTitle.textContent = currentQuestion.question;

    multipleChoice.innerHTML = "";

    for (var i = 0; i < 4; i ++){
        var choiceNode = document.createElement("li");
        var buttonEl = document.createElement("button")
        buttonEl.setAttribute("class", "choice");
        buttonEl.setAttribute("value", currentQuestion.choices[i]);

        buttonEl.textContent = i + 1 + ". " + currentQuestion.choices[i];

        buttonEl.addEventListener ("click", checkAnswer);
        
        choiceNode.appendChild(buttonEl);

        multipleChoice.appendChild(choiceNode);

    };
};

//start/run the quiz when start button is clicked
//also timerfunction is also in here to start the timer. if time left is = 0 then automatically end the quiz
//also displaying the time left after every second
var startQuiz = function(){
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");
    
    questionScreen.setAttribute("class", "");

    time.textContent = timeLeft;
    timerFunction = setInterval(function(){
        timeLeft -= 1;
        time.textContent = timeLeft;
        if (timeLeft === 0){
            timeLeft = 0;
            quizEnd();
        }
    }, 1000);
    getQuestion();
};

//save the user score to local storage and direct the user to the score.html page.
var saveScore = function(){
    var userName = document.querySelector("#name").value.trim();
    if (userName !== ""){
        var highscore = JSON.parse(localStorage.getItem("highscore")) || [];
        var userObj = {
            name: userName,
            score: timeLeft
        }
        
        highscore.push(userObj);
        window.localStorage.setItem("highscore", JSON.stringify(highscore));

        window.location.href = "score.html";
    }
}

submitEl.addEventListener("click", saveScore);
startButoon.addEventListener("click", startQuiz);

