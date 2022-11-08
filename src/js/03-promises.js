import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('[type="submit"]')
}

// Задаємо початкові значення змінних для інпутів
let delayValue = 0;
let delayStepValue = 0;
let anountValue = 0;


refs.submitBtn.addEventListener('click', onSubmitBtnClick);

// При кліку на кнопку:
function onSubmitBtnClick(event) {
  event.preventDefault();
  // Отримуємо значення інпутів і записуємо їх в змінні
  delayValue = Number(refs.form.delay.value);
  delayStepValue = Number(refs.form.step.value);
  anountValue = Number(refs.form.amount.value);

  /*
    Викликаємо функцію createPromise для створення промісу стільки разів, скільки вказано в
    змінній anountValue та на кожній ітерації передаємо функції номер виклику та затримку, 
    збільшену на крок зазначений в змінній delayStepValue
  */
  for (let i = 1; i <= anountValue; i += 1) {
    createPromise(i, delayValue);
    delayValue += delayStepValue;
  }
  
}
// Створюємо функцію для виклику 1 промісу із заданою затримкою в delayValue
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3; // Випадково визначаємо чи буде операція успішна 
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay }); // Якщо операція завершилась успішно
      } else {
        reject({ position, delay }); // Якщо операція завершилась не успішно
      }
    }, delayValue);
  });

  promise
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`); // Виводимо повідомлення при успішній операції
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`); // Виводимо повідомлення при не успішній операції
  });
}

