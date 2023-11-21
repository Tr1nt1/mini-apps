// console.log(localStorage);

// const userName = 'Zhenya';

// const age = 20;

// const obg = {
//     name: 'Oleg',
//     role: true
// }

// const array = [34, 567, -3]

// localStorage.userName = userName;

// console.log(localStorage);

// localStorage.age = age;

// console.log(localStorage);

// if (Number(localStorage.age) > 18){

// }


// if(localStorage.userName){

// }






// Задание 1
// 1) 
// Задать объект с полем name. 
// Задать переменную, которая будет хранить JSON упомянутого объекта. 
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.
// 2)
// Создать переменную user, в которой хранится объект. 
// Записать переменную в localStorage. 
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

const userName = {name: 'Zhenya'};
const userNameJSON = JSON.stringify(userName);
const userNameParsing = JSON.parse(userNameJSON);

const user = {};
localStorage.user = user;
const newUser = JSON.stringify(localStorage.user);
