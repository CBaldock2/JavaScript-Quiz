var timerElement = document.getElementById("timer");
var start = document.getElementById("start");

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
//Starts the timer when the start button is clicked
start.addEventListener("click", startQuiz)
start.addEventListener("click", q1)

function gameOver() {

}

var score = 0;
document.getElementById("").onclick = function () {
    var correct = document.getElementById("correct").value
    var incorrect = document.getElementById("incorrect").value
    if (correct === true) {
        alert("nice!")
        score++;
    } else if (incorrect) {
        alert("wrong");
    }
}

function q1() {
    document.getElementById("start").onclick = function () {
        document.getElementById("q1").style.display = "block";
    }
}
