function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    body: document.body,
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}

// =========== Відсєбятіна ==================
const heading = document.createElement("h1");
heading.style.fontSize = "18px";
heading.textContent = "To start color change of background color press 'Start' button and to stop color change press 'Stop' button.";
refs.startBtn.before(heading);
// ==========================================

let timerId = null;
const TIMER_INTERVAL = 1000; //milliseconds
let currentColor = "";



refs.stopBtn.disabled = true;

refs.startBtn.addEventListener("click", () => {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    console.log(`Body random background color change was started with inerval ${TIMER_INTERVAL / 1000} second:`);
    
    timerId = setInterval(() => {
        const randomColor = getRandomHexColor();
        refs.body.style.backgroundColor = randomColor;
        currentColor = randomColor;
        console.log(`Color was changed to ${randomColor}`);
    }, TIMER_INTERVAL);
});

refs.stopBtn.addEventListener("click", () => {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(timerId);
    console.log(`Body random background color change was stopped on ${currentColor} color.`);
});