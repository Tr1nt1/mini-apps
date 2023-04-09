// Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.

const div = document.querySelector('div');
const form = document.querySelector('form');
const inp1 = document.querySelector('.num1');
const inp2 = document.querySelector('.num2');
const select = document.querySelector('select');
const option = document.querySelectorAll('option');
console.log(div, form, inp1, inp2, select);

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let result 
//     if (select.value == '+') {
//         result = +inp1.value + +inp2.value;
//     } else if (select.value == '-') {
//         result = +inp1.value - +inp2.value;
//     } else if (select.value == '*') {
//         result = +inp1.value * +inp2.value;
//     } else if (select.value == '/') {
//         result = +inp1.value / +inp2.value;
//     }
//     div.innerText = result; 
// });

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = eval(`${Number(inp1.value)} ${select.value} ${Number(inp2.value)}`);
    div.innerText = result; 
});