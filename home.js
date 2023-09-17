let timerInterval;
let totalTime;
let isTimerSet = false;

function enableTypingArea() {
    document.querySelector(".textarae").disabled = false;
}

function disableTypingArea() {
    document.querySelector(".textarae").disabled = true;
}

function startTimer() {
    const minutesInput = document.getElementById("MM");
    const secondsInput = document.getElementById("SS");

    const minutes = parseInt(minutesInput.value);
    const seconds = parseInt(secondsInput.value);

    if (isNaN(minutes) || isNaN(seconds)) {
        alert("Invalid input. Please enter valid minutes and seconds.");
        return;
    }

    totalTime = (minutes * 60 + seconds) * 1000;

    timerInterval = setInterval(updateTimer, 1000);

    minutesInput.disabled = true;
    secondsInput.disabled = true;
    isTimerSet = true;
    enableTypingArea();
}

function updateTimer() {
    const remainingMinutes = Math.floor(totalTime / 60000);
    const remainingSeconds = Math.floor((totalTime % 60000) / 1000);

    document.getElementById("timer").textContent = `${remainingMinutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    totalTime -= 1000;

    if (totalTime < -1) {
        clearInterval(timerInterval);
        document.getElementById("timer").textContent = "00:00";
        countWords();
        disableTypingArea();
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    const mmInput = document.getElementById("MM");
    const ssInput = document.getElementById("SS");
    mmInput.value = "";
    ssInput.value = "";
    document.getElementById("timer").innerHTML = "00:00";
    mmInput.disabled = false;
    ssInput.disabled = false;
    wordsTextArea.value = "";
    document.querySelector(".count").innerHTML = "0";
    disableTypingArea();
    isTimerSet = false;
}

const wordsTextArea = document.querySelector(".textarae");
const countBtn = document.querySelector(".submit");
const wordCount = document.querySelector(".count");

const countWords = () => {
    clearInterval(timerInterval);
    const mmInput = document.getElementById("MM");
    const ssInput = document.getElementById("SS");
    mmInput.value = "";
    ssInput.value = "";
    document.getElementById("timer").innerHTML = "00:00";
    mmInput.disabled = false;
    ssInput.disabled = false;
    const words = wordsTextArea.value;
    const wordsTrimmed = words.replace(/\s+/g, " ").trim();
    const numberOfWords = wordsTrimmed ? wordsTrimmed.split(" ").length : 0;
    wordCount.innerHTML = numberOfWords;
    disableTypingArea();
};

document.addEventListener("DOMContentLoaded", () => {
    countBtn.addEventListener("click", countWords);
    disableTypingArea();
});

let isDarkMode = false;

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode", isDarkMode);
    isDarkMode = !isDarkMode;
}
