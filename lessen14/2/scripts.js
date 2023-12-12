//Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
//Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.
const ul = document.getElementById('ul');

let xhr = new XMLHttpRequest();

const startProcess = (item) => {
    const li = document.createElement('li');
    li.textContent = item.title;
    return li;
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.onload = function () {
    let ListTasks = JSON.parse(xhr.response);

    ListTasks.forEach((item, index) => {
        if (index < 20) {
            ul.append(startProcess(item));
        }
    });
}