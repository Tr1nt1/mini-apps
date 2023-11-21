// Задание 2
// Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.
// Пример реализации:
// https://ucarecdn.com/6e689f37-...
// ПОДСКАЗКИ
// - значение атрибута можно узнать с помощью метода element.getAttribute(' '). Но если атрибут стандартный, то можно его забрать с помощью одноименного свойства. Например, адрес картинки = img.src (img - переменная, в которой хранится картика).
// Порядок работы:
// 1. Собираем изображения в массив.
// 2. Вешаем обработчик клика на все окно - window. Так js будет "слушать" клики и записывать в event.target тот элемент, по которому пришелся клик (event нужно обязятельно добавить как параметр в addEventListener).
// window.addEventListener('click', (event => { }))
// Перебираем массив картинок, сравниваем их с event.target. Забираем из картинки, на которую пришелся клик, url (значение атрибута src), вешаем на нее класс active, а у остальных картинок убираем. Записываем url активной картинки в память и ставим ее на фон body.
// При загрузке страницы (в начале кода JS) добавляем проверку, есть ли информация об активной картинке в LocalStorage, если есть - добавляем ей класс active и ставим ее на фон. Если нет - можно присвоить этот класс и поставить на фон первую картинку из массива.



const allImg = document.querySelectorAll('img');
if(localStorage.saveClass){
    document.body.style.backgroundImage = `url(${localStorage.saveClass})`;
}
window.addEventListener('click', (event) => {
    allImg.forEach(item => {
        if (event.target === item) {
            const imgUrl = event.target.src
            localStorage.saveClass = imgUrl
            item.classList.add('active');
            document.body.style.backgroundImage = `url(${imgUrl})`;
        } else {
            item.classList.remove('active');
        }
    })
})
