"Номер 1"

let i = 1;

const seyWord = setInterval(() => {
    console.log(`Сообщение номер ${i}`);
    i++
}, 2000);

setTimeout(() => {
    clearInterval(seyWord);
}, 10000)

"Номер 2"

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const sec = document.getElementById('sec');

const time = setInterval(() => {
    const date = new Date()
    hours.textContent = date.getHours()
    minutes.textContent = date.getMinutes()
    sec.textContent = date.getSeconds()
}, 1000);