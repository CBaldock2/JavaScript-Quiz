var timer = document.getElementById("timer");
var start = document.getElementById("start");
var clear = document.getElementById("clear");
var correct = document.querySelector("correct");
var incorrect = document.querySelector("incorrect");

//Timer Variables
var timeLeft = 76;
var penalty = 10;
var holdInterval = 0;

//Score variable
var points = 0;

var questions = {
    question1: "This is question _1___",
    options: {
        answer1: "45",
        answer2: "1",
        answer3: "455",
        answer4: "15"
    },
    correctAnswer: "1",

    question2: "Click True",
    options: {
        answer5: "True",
        answer6: "False"
    }
}

if (document.querySelector(".q1")) {
    document.querySelector(".q1").style = "display: none;"
    var hideQ2 = document.querySelector(".q2");
    hideQ2.style = "display: none;"
}
if (document.querySelector(".q2")) {
    document.querySelector(".q2").style = "display: none;"
    var hideQ3 = document.querySelector(".q3");
    hideQ3.style = "display: none;"
}
if (document.querySelector(".q3")) {
    document.querySelector(".q3").style = "display: none;"
    var hideQ4 = document.querySelector(".q4");
    hideQ4.style = "display: none;"
}
if (document.querySelector(".q4")) {
    document.querySelector(".q4").style = "display: none;"
    var hideQ5 = document.querySelector(".q5");
    hideQ5.style = "display: none;"
}
if (document.querySelector(".q5")) {
    document.querySelector(".q5").style = "display: none;"
    var hideFin = document.querySelector(".fin");
    hideFin.style = "display: none;"
}

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
    var hideStart = document.querySelector(".infoPage");
    hideStart.style = "display: none;"
    document.querySelector(".q1-q1").textContent = questions.question1;
    document.querySelector(".q1").style = "display: block;"
});

var ansBtn = document.querySelectorAll(".ent");
console.log(ansBtn);
for (i = 0; i < ansBtn.length; i++) {
    ansBtn[i].addEventListener("click", function () {
        document.querySelector(".q1").style = "display: none;"
        document.querySelector(".q2").style = "display: block;"
    })
}
var ansBtn = document.querySelectorAll(".ent2");
console.log(ansBtn);
for (i = 0; i < ansBtn.length; i++) {
    ansBtn[i].addEventListener("click", function () {
        document.querySelector(".q2").style = "display: none;"
        document.querySelector(".q3").style = "display: block;"
    })
}
var ansBtn = document.querySelectorAll(".ent3");
console.log(ansBtn);
for (i = 0; i < ansBtn.length; i++) {
    ansBtn[i].addEventListener("click", function () {
        document.querySelector(".q3").style = "display: none;"
        document.querySelector(".q4").style = "display: block;"
    })
}
var ansBtn = document.querySelectorAll(".ent4");
console.log(ansBtn);
for (i = 0; i < ansBtn.length; i++) {
    ansBtn[i].addEventListener("click", function () {
        document.querySelector(".q4").style = "display: none;"
        document.querySelector(".q5").style = "display: block;"
    })
}
var ansBtn = document.querySelectorAll(".ent5");
console.log(ansBtn);
for (i = 0; i < ansBtn.length; i++) {
    ansBtn[i].addEventListener("click", function () {
        document.querySelector(".q5").style = "display: none;"
        document.querySelector(".fin").style = "display: block;"
    })
}

//Keeps score
var currentScore = document.querySelector(".currentScore");

var score = localStorage.getItem("score");

currentScore.textContent = score;

if (question1 === "1") {
    points = points + 5;
}


//Subtracts 10 seconds if an answer is wrong
function wrongAnswer() {
    if (incorrect = true) {
        timeLeft - penalty;
        //Say what the right answer is
    }
}
