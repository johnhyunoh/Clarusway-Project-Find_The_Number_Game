const attempts = document.getElementById("num");
const message = document.getElementById("msg");
const attemptsMessage = document.getElementById("attemptsMsg");

// Generating random number from 1-100
var randNum = Math.floor(Math.random() * 100 + 1);

// Variable for: -counting the number of attempts
//               -number of attempts left
var guess = 0;
var attemptsLeft = 10;

// Create a button for the case of restarting the game
let btn = document.createElement("button");
btn.innerHTML = "Start Over";
btn.id = "restartBtn";

check.addEventListener("click", checkValue);
btn.addEventListener("click", restart);

// |------------------------------ Functions ------------------------------|
function checkValue() {
    console.log("Attempt #", guess+1);

    // Retrieve user's guess
    var x = document.getElementById("aNumber").value;
    console.log("Retrieved number:", x);
    if (attemptsLeft == 0 || message.innerHTML == "You guessed correct. Congratulations!") {
        return;
    }
    else if (x == randNum) {
        console.log("done");
        guess++;
        attemptsLeft--;
        message.innerHTML = "You guessed correct. Congratulations!"
        attempts.innerHTML = attemptsLeft;
        document.body.appendChild(btn);
    }
    else if (attemptsLeft == 1) {
        console.log("done");
        guess++;
        attemptsLeft--;
        message.innerHTML = "The number was " + randNum + ". Better luck next time.";
        attempts.innerHTML = attemptsLeft;
        document.body.appendChild(btn);
    }
    else if (x > randNum) {
        guess++;
        attemptsLeft--;
        console.log("Value is too high.");
        message.innerHTML = "Value is too high."
        attempts.innerHTML = attemptsLeft;
        console.log(attemptsLeft);
    }
    else if (x < randNum) {
        guess++;
        attemptsLeft--;
        console.log("Value is too low.");
        message.innerHTML = "Value is too low."
        attempts.innerHTML = attemptsLeft;
        console.log(attemptsLeft);
    }
}

function restart() {
    // Reset values to default
    guess = 0;
    attemptsLeft = 10;
    document.getElementById("aNumber").value = "";
    message.innerHTML = "Write the Number";
    attempts.innerHTML = attemptsLeft;

    // Regenerate a new random Number
    randNum = Math.floor(Math.random() * 100 + 1);

    // Disable the Start Over button
    document.getElementById("restartBtn").remove();
}
