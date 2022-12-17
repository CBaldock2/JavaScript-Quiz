var timer = document.getElementById("timer");
var start = document.getElementById("start");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var clear = document.querySelector("#clear");

//Timer Variables
var timeLeft = 76;
var penalty = 10;
var holdInterval = 0;

//Score variable
var score = 0;


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

//Keeps score
function setScore() {
    if(correct === true) {
        score = score + 5;
    }
}

//Subtracts 10 seconds if an answer is wrong
function timeLoss() {
    if(incorrect = true) {
        timeLeft - penalty;
    }
}

//I thought this would make the first question appear
start.onclick = function () {
    q1.style.display = "block";
}

//I thought this would make the game over page appear
q1.onclick = function () {
    gameOver.style.display = "block";
}

//Will add initials to the local.storage
function saveScore() {
    var initials = input;
    localStorage.setItem("initials", initials);
}

//Will display the initials on the High score page
var name = localStorage.getItem("initials")

//Will clear the score board once i get a score saved
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
