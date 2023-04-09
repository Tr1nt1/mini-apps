// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

const ul = document.querySelector('ul');
const input = document.querySelector('input');

input.addEventListener('keyup', (event) => {
    const li = document.createElement('li');
    li.innerText = (event.key);
    ul.append(li);
});