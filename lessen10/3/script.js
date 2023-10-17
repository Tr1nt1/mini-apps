// Задание 3
// Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик.
// Образец - devby.io, или можно посмотреть здесь: https://ucarecdn.com/aeb69a87-...
// Внутри открывающегося по клику на бургер блока сначала идет строка поиска, при клике в нее (фокусное состояние) фон всей строки, включая кнопку, меняется на белый.
// Все нужные иконки скачать с сайта dev.by, из кода в инспекторе.
// ПОДСКАЗКИ. Вы можете изначально сверстать открытое меню, при этом кнопка "крестик" будет расположена в точности на месте кнопки "бургер". Скрыть выпадающий блок с помощью CSS. При открытии меню кнопка "бургер" будет исчезать, при закрытии - появляться.

const burger = document.querySelector('.burger');
const panel = document.querySelector('.panel');
const close = document.querySelector('.close');
const input = document.querySelector('.input');
const form = document.querySelector('.forrm');


burger.addEventListener('click', (event) => {
    if (burger.classList.contains('close')) {
        panel.style.display = 'none';
        burger.classList.remove('close');
    } else {
        burger.classList.add('close');
        panel.style.display = 'block';
        
    }

})

input.addEventListener('focusin', (event) => {
    form.style.backgroundColor = 'white';
})

input.addEventListener('focusout', (event) => {
    form.style.backgroundColor = '#f5f5f7';
})



/*
//focusin
//focusout
*/
