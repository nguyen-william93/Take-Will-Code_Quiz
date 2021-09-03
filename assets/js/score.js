var clearHighscore = document.querySelector("#clear");

//get the local storage, sort the score, then display it
var printScore = function(){
    var score = JSON.parse(localStorage.getItem("highscore")) || [];

    score.sort((a,b) => b.score - a.score);
    for(var i = 0; i < score.length; i++){
       var liEl = document.createElement("li");
       liEl.textContent = score[i].name + "--" + score[i].score;
       var olEl = document.querySelector("#highscore")
       olEl.appendChild(liEl);
    }
}

//if clear score button is click then clear the local storage
var clearScore = function(){
    window.localStorage.removeItem("highscore");
    window.location.reload();
};

clearHighscore.addEventListener("click", clearScore)



printScore();