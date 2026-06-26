var demo = document.getElementById("demo");

var userInput = document.getElementById("userInput")


let botNum;

function numGenerator() {
    botNum = Math.floor(Math.random() * 10 + 1);

}

numGenerator();

let highScore = document.getElementById("highScore");
// score = +highScore.innerText;
let score = +(localStorage.getItem("highScore") || 0);
highScore.innerHTML = score

let currentScore = document.getElementById("currentScore")
current = currentScore.innerText;
// console.log(current);



let userAttempts = document.getElementById("attempts")
// let localAttemps = +(localStorage.getItem("attemptsLeft"))
// let attempts = +(localStorage.getItem("attempts") || 10);
// attempts = userAttempts.innerText;
let attempts = +(localStorage.getItem("attempts") || 10);

userAttempts.innerHTML = attempts;

console.log(botNum);


let guessText = document.getElementById("correct");
guessText.className = "yourStatus";
// console.log(botNum2);



function checkGuess() {
    var userValue = userInput.value;

    if (userValue < 1 || userValue > 10) {
        alert("Please enter a number between 1 and 10");
    }
    else {
        attempts--;
        userAttempts.innerHTML = attempts;
        // demo.innerHTML = botNum;
        // localStorage.setItem("attempts", attempts);
        localStorage.setItem("attempts", attempts);

        if (userValue == botNum) {
            demo.innerHTML = botNum;
            alert("you win");
            numGenerator()
            console.log(botNum);
            guessText.className = "correct"

            guessText.innerHTML = "Correct"
            current++;
            currentScore.innerHTML = current;
            // numGenerator()
            if (current > score) {
                score = current;
                highScore.innerHTML = score
                localStorage.setItem("highScore", score);

            }



        } else {

            alert("try again")
            guessText.innerHTML = "Try Again"
            guessText.className = "tryAgain"

            current--;
            currentScore.innerHTML = current

        }




    }

}

function playagain() {


    numGenerator();
    console.log(botNum);

    current = 0;
    currentScore.innerHTML = current;

    attempts = 10;
    userAttempts.innerHTML = attempts;

}







