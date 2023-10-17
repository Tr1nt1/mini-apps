// Задание 4
// Реализовать функционал мини таск-менеджера
// Функционально должно работать так: https://ucarecdn.com/a2aeaed4-...
// Затем стилизовать (написать CSS) на свое усмотрение.
// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) Описать в html форму с полем input и кнопкой отправки формы. Под формой предусмотреть пустой список ul.
// 2) На событие отправки формы добавлять в список ul элемент li со значением инпута. Сам инпут при этом очищать.
// 3) Внутри добавляющегося li перед текстом должен также добавляться чекбокс.
// Для добавления элемента внутрь в начало используйте метод element.prepend(element).
// 4) При отметке чекбокса задача должна перечеркиваться (становиться выполненной) и перемещаться вниз списка. Если отметку снять - перечеркивание убирается и задача помещается в начало списка.
// Отмеченный чекбокс - js-свойство .checked
// Перечеркнутый текст - CSS-свойство text-decoration: line-through
// 5) К каждой задаче добавить кнопку для удаления, реализовать само удаление.
// Для удаления элементов используется метод element.remove().
// 6) Пропишите CSS, чтобы ваш таск-менеджер выглядел получше: уберите маркеры у списка, оформите кнопки.
// Добавить в таск-менеджер кнопку, которая помечает все задачи как сделанные.
// - Добавить тег button в html код и повесить на него обработчик события click
// - В обработчике найти все существующие теги li при помощи функции document.querySelectorAll
// - В цикле или с помощью forEach обойти найденные в пункте теги li. Каждому проставить li.style.textDecoration = 'line-through';

const input = document.querySelector('.inp');
const form = document.querySelector('.forrm');
const ul = document.querySelector('.ull');
const button = document.querySelector('.button');
const deleteButton = document.getElementById('deleteButton')



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const li = document.createElement('li');
    li.innerText = (input.value);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const but = document.createElement('button')
    but.style.width = '20px';
    but.style.height = '20px';
    but.innerText = 'X';
    li.prepend(checkbox);
    li.append(but)
    ul.append(li);
    input.value = '';
    checkbox.addEventListener('change', (event) => {
    if (checkbox.checked) {
      li.style.textDecoration = 'line-through';
      ul.appendChild(li);
    } else {
      li.style.textDecoration = 'none';
      ul.prepend(li);
    }
})
    but.addEventListener('click', (event) => {
    li.remove();
})
})

deleteButton.addEventListener('click', function () {
    const tasks = ul.querySelectorAll('li');
    tasks.forEach((task) => {
      const checkbox = task.querySelector('input[type="checkbox"]');
      checkbox.checked = true;
      task.style.textDecoration = 'line-through';
    });
  });




