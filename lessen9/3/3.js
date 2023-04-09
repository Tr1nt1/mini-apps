// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

const ul = document.querySelector('ul');
const input = document.querySelector('form input');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerText = (input.value);
    ul.append(li);
    input.value = '';
});