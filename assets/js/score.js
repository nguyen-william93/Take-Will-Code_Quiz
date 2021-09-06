var clearHighscore = document.querySelector("#clear");
var olEl = document.querySelector("#highscore");

//get the local storage, sort the score, then display it
var printScore = function(){
    var score = JSON.parse(localStorage.getItem("highscore")) || [];

    score.sort((a,b) => b.score - a.score); //sorting the score in descdending order

    for(var i = 0; i < score.length; i++){
       var liEl = document.createElement("li");

       liEl.textContent = i + 1 + ". " + score[i].name + "--" + score[i].score;

       olEl.appendChild(liEl);
    }
};

//if clear score button is click then clear the local storage
var clearScore = function(){
    window.localStorage.removeItem("highscore");
    window.location.reload();
};

clearHighscore.addEventListener("click", clearScore);

printScore();