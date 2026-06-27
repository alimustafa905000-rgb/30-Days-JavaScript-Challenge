let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

const minuteDisplay = document.querySelector("#minutes");
const secondDisplay = document.querySelector("#seconds");
const millisecondDisplay = document.querySelector("#milliseconds");

const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

function startTimer() {
    milliseconds++;

    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    minuteDisplay.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondDisplay.innerText = seconds < 10 ? "0" + seconds : seconds;
    millisecondDisplay.innerText = milliseconds < 10 ? "0" + milliseconds : milliseconds;
}

startBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = setInterval(startTimer, 10);
});

pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minuteDisplay.innerText = "00";
    secondDisplay.innerText = "00";
    millisecondDisplay.innerText = "00";
});