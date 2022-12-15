var timerElement = document.getElementById("timer");
var start = document.getElementById("start");

var score = 0;
var answered = 0;
var timerCount;
var timer;

function startQuiz() {
    timerCount = 35;
    //Need to render first page
    startTimer();
}

//Timer
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;
        //Ends the game if all the questions are answered
        if (answered && timerCount > 0) {
            clearInterval(timer);
            gameOver()
        }
        //The game is over when the time is out
        if (timerCount === 0) {
            clearInterval(timer);
            gameOver
        }

    }, 1000);


}


function gameOver() {

}

function getScore() {

}

//Starts the timer when the start button is clicked
start.addEventListener("click", startQuiz)

//Question 1
