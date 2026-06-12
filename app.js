var demo = document.getElementById("demo");

var userInput = document.getElementById("userInput")


let botNum;

function numGenerator() {
    botNum = Math.floor(Math.random() * 10 + 1);

}

numGenerator();

let highScore = document.getElementById("highScore");
score = +highScore.innerText;


let currentScore = document.getElementById("currentScore")
current = currentScore.innerText;
// console.log(current);



let userAttempts = document.getElementById("attempts")
attempts = userAttempts.innerText;


console.log(botNum);
// console.log(botNum2);



function checkGuess() {
    var userValue = userInput.value;

    if (userValue < 1 || userValue > 10) {
        alert("Please enter a number between 1 and 10");
    }
    else {
        attempts--;
        userAttempts.innerHTML = attempts
        // demo.innerHTML = botNum;


        if (userValue == botNum) {
            demo.innerHTML = botNum;
            alert("you win");
            numGenerator()
            console.log(botNum);


            current++;
            currentScore.innerHTML = current;
            // numGenerator()
            if (current > score) {
                score++;
                highScore.innerHTML = score
            }



        } else {

            alert("try again")

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




