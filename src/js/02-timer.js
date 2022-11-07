import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    dataInput: document.querySelector("#datetime-picker"),
    daysValue: document.querySelector("[data-days]"),
    hoursValue: document.querySelector("[data-hours]"),
    minutesValue: document.querySelector("[data-minutes]"),
    secondsValue: document.querySelector("[data-seconds]"),
    startBtn: document.querySelector("[data-start]")
}

let startCountdownDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= Date.now()) {
        Notify.failure("Please choose a date in the future");
        refs.startBtn.disabled = true;
    } else {
        refs.startBtn.disabled = false;
        startCountdownDate = selectedDates[0].getTime();
      }
  },
};

flatpickr("#datetime-picker", options);

//===================Timer===================
const timer = {
    isActive: false,
    intervalId: null,
    start() {
        if (this.isActive) {
            return
        }

        const startTime = startCountdownDate;
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;

            if (deltaTime < 0) {
                clearInterval(this.intervalId);
                return
            }
            const timeParts = convertMs(deltaTime);
            refs.daysValue.textContent = `${timeParts.days}`;
            refs.hoursValue.textContent = `${timeParts.hours}`;
            refs.minutesValue.textContent = `${timeParts.minutes}`;
            refs.secondsValue.textContent = `${timeParts.seconds}`;
        }, 1000);
    },
};

refs.startBtn.addEventListener("click", () => {
    timer.start();
})
//============================================


function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}