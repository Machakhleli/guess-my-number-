let minNum = 1;
let maxNum = 20;
//function for creating random number
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let gettedRandomNum = randomNum(minNum, maxNum);
// console.log(gettedRandomNum);

const secretNum = document.querySelector(".secret-number");
let inputedNum = document.querySelector("input");
const bodyBg = document.querySelector("body");
const displayedMsg = document.querySelector(".guessing");
let storedHighscore = document.querySelector(".highscore");
let startingScore = 20;
let startingHighscore = localStorage.getItem("highscore"); //get and store higscore number
storedHighscore.textContent = `🥇 Highscore: ${startingHighscore}`;

let checkInputedNum = document.querySelector(".check-btn");
checkInputedNum.addEventListener("click", () => {
    const enteredNum = Number(inputedNum.value);

    if (enteredNum === gettedRandomNum) {
        secretNum.textContent = gettedRandomNum;
        bodyBg.style.backgroundImage = "url(https://i.gifer.com/4A5.gif)";
        bodyBg.style.backgroundRepeat = "no-repeat";
        bodyBg.style.backgroundSize = "cover";
        displayedMsg.textContent = "IT'S CORRECT NUMBER";
        displayedMsg.style.color = "white";
        checkInputedNum.style.color = "white";
        checkInputedNum.disabled = true;
        checkInputedNum.textContent = "you can't click now";
        checkInputedNum.style.fontSize = "0.5rem";
        inputedNum.style.color = "white";
        inputedNum.disabled = true;
        document.querySelector("span").style.color = "white";
        document.querySelector("h1").style.color = "white";
        document.querySelector(".starting-score").style.color = "white";
        storedHighscore.style.color = "white";
        restart.style.color = "white";

        if (startingScore > startingHighscore) {
            startingHighscore = startingScore;
            localStorage.setItem("highscore", startingHighscore);//set the getted highscore  number
            storedHighscore.textContent = `🥇 Highscore: ${startingHighscore}`;
        }
        if (startingScore == 0) {
            document.querySelector(".starting-score").textContent = "You lose! Try again :)"
        }
    } else if (enteredNum < minNum || enteredNum > maxNum) {
        displayedMsg.textContent = `You must enter numbers between ${minNum} and ${maxNum}.`;
    } else {
        if (startingScore > 1) {
            displayedMsg.textContent = enteredNum < gettedRandomNum ? "📉 Too low!" : "📈 Too high!";
            startingScore--;
            document.querySelector(".starting-score").textContent = `💯 Score: ${startingScore}`;
        } else {
            displayedMsg.textContent = "You lose, Try again!"
            document.querySelector(".starting-score").textContent = 0;
        }
    }
});

//reload whole page
const restart = document.querySelector(".restart-btn");
restart.addEventListener("click", () => {
    location.reload();
});
