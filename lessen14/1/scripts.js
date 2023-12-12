//По данному url расположена задача:
//https://jsonplaceholder.typicode.com/todos/1
//В html предусмотреть <div></div>
//Достать с сервера заголовок задачи и отобразить его в div.
const div = document.getElementById('div');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

xhr.send();

xhr.onload = function() {
    let responseObj = xhr.response;
    const InnetTextDiv = JSON.parse(responseObj);
    div.innerText = InnetTextDiv.title
}