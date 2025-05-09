
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
        // document.querySelector("starting-score").style.color = "white";
        // document.querySelector("highscore").style.color = "white";
    } else if (enteredNum < minNum || enteredNum > maxNum) {
        displayedMsg.textContent = `You must enter numbers between ${minNum} and ${maxNum}.`;
    } else if (enteredNum > gettedRandomNum) {
        displayedMsg.textContent = "📈 Too high!";
    } else if (enteredNum < gettedRandomNum) {
        displayedMsg.textContent = "📉 Too low!";
    }
});





