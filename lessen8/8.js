// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)

/*console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`);

// Задание 2
// В файле html есть разметка:
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// Вывести в консоль каждое из имен (содержимое каждого li).
// ПОДСКАЗКИ
// 1) C помощью метода document.querySelectorAll найдите на странице все пункты списка (li) и запишите в переменную. У вас получится html-коллекция (массив). 
// 2) Обойдите коллекцию с помощью forEach и для каждого li вывкдите в консоль текстовое содержимое (innerText)

let odgect = document.querySelectorAll('li');
odgect.forEach(element => {
    console.log(element.innerText);
});

// Задание 3
// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

let item = document.querySelectorAll('li');
item.forEach((element, index) => {
    element.innerText = index;
});

//Задание 4
//Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

let p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, tenetur! Illum, corporis quisquam eos libero nemo similique voluptates vel dolores repellendus asperiores sint tempore, maxime reprehenderit odit, nesciunt delectus numquam?'
p.style.fontSize = '36px';
p.style.fontWeight = 'bold';
document.body.append(p);

// Задание 5
// Написать в html тег заголовка с текстом "Сегодня:" 
// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.


const nowDate = new Date();
if (nowDate.getMonth() + 1 < 10) {
    monthNew = `0${nowDate.getMonth() + 1}`;
}
document.querySelector('p').innerText = `${nowDate.getDate()}.${monthNew}.${nowDate.getFullYear()}`

// Задание 6
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

let newFunction = (nameTag, nameColor, content) => {
let tag = document.createElement(nameTag);
tag.style.color = nameColor;
tag.innerText = content;
document.body.append(tag);
}

newFunction('h1', 'green', 'Day');

// Задание 7
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
let select = document.querySelector('select');
for (let i = 1960; i < 2021; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    select.append(option);
}

// Задание 8
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

const clients = [
{name: "Женя", order: true},
{name: "Кристина", order: true},
{name: "Павел", order: false},
{name: "Виолетта", order: false},
{name: "Костя", order: true}
];

let ul = document.querySelector('ul');

clients.forEach(element => {
    let li = document.createElement('li');
    if (element.order == true) {
        render = 'оплатил';
    } else {
        render = 'отменил';
    }
    li.innerText = `Клиент ${element.name} ${render} заказ`;
    ul.append(li);
});

// Задание 9
// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

const div = document.createElement('div');
div.style.background = 'green';
div.style.padding = '10px';
linksArr.forEach(element => {
    const a = document.createElement('a');
    a.href = element;
    a.target = '_blank';
    a.innerText = element;
    a.style.display = 'block';
    div.append(a);
});
document.body.append(div);


// Задание 10
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().
// ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li

const elementsForRemove = document.querySelectorAll('.forRemove');
elementsForRemove.forEach(element => {
   element.remove(); 
});

// Задание 11*
// Создать массив объектов с полями name, age. Например:
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ]
// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

const users = [
    {name: 'Mark', age: 12},
    {name: 'Olga', age: 30},
    {name:'Tom', age: 25},
    {name:'Den', age: 43}
];

const table = document.querySelector('table');
for (let element of users) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.innerText = element.name;
    td2.innerText = element.age;
    td1.style.color = 'red';
    td2.style.color = 'blue';
    tr.append(td1);
    tr.append(td2);
    table.append(tr);
}


document.body.append(table);*/


// Задание 12
// Есть верстка: https://teenscool1.notion.site...
// С помощью JavaScript:
// 1) Найти в коде список ul и добавить ему класс “list”.
// 2) На li через один (начиная с самого первого) установить класс “item”
// 3) На все ссылки в примере установить класс “custom-link”

const ul = document.querySelector('ul');
ul.className = "list";
const allLi = document.querySelectorAll('li');

for (let i = 0; i < allLi.length; i += 2) {
    allLi[i].classList.add("item");
}

allLi.forEach(element => {
    element.classList.add("custom-link");
});