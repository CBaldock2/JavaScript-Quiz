var timer = document.getElementById("timer");
var start = document.getElementById("start");
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");

var answered = 0;

//Timer Variables
var timeLeft = 5;
var penalty = 10;
var holdInterval = 0;

//Timer
start.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeLeft--;
            timer.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(holdInterval);
            }
        }, 1000);
    }

});

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {
        //Creates a list
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initals + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
