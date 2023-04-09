// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

const button = document.querySelector('button');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomDeg(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

button.addEventListener('mouseenter', () => {
    
    button.style.backgroundColor = `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)})`;
})

button.addEventListener('mouseleave', () => {
    
    button.style.transform = `rotate(${getRandomDeg(-180, 180)}deg)`;
});