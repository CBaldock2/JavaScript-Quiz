var timerElement = document.getElementById("timer");
var start = document.getElementById("start");

var answered = 0;
var timerCount;
var timer;

function startQuiz() {
    timerCount = 5;
    //Need to render first page
    startTimer();
}

//Timer
start.addEventListener("click", startQuiz)
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = "Time: " + timerCount;
        if(timer === 0){
            clearInterval
        }
    }, 1000);
}

//Starts the timer when the start button is clicked
start.addEventListener("click", q1)