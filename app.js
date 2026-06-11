var demo = document.getElementById("demo");
// demo = demo.innerHTML;

// console.log(userInput);
var userInput = document.getElementById("userInput")

// JS number Generator
var botNum = Math.floor(Math.random() * 10 + 1);

// console.log(botNum);


function user() {
    var userValue = userInput.value;
    // userInput = +userInput.value;
    // console.log(userValue);


    // while (userValue.length <= 0) {  }

    if (userValue < 1 || userValue > 10) {
        alert("Please enter a number between 1 and 10");
    }
    else {
        demo.innerHTML = botNum;
        if (userValue == botNum) {
            alert("you win");
            demo.innerHTML = botNum;
        } else {

            alert("try again")
        }




    }

}
// var user_input = document.getElementById("user_input");

// var js_number = Math.floor(Math.random()*10+1);

// function random_num(){

// }

// function user() {
//     user_input = user_input.value;

// }

