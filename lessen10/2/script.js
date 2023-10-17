const panel = document.querySelector('.panel');
const Close = document.querySelector('.close');
const burger = document.querySelector('.burger');
const main = document.querySelector('main');

burger.addEventListener('click', (event) => {
    event.preventDefault();
    panel.style.width = '250px';
    main.style.marginLeft = '250px';
    burger.style.display = 'none';
})

Close.addEventListener('click', (event) => {
    event.preventDefault();
    panel.style.width = '0px';
    main.style.marginLeft = '0px';
    burger.style.display = 'block';
})