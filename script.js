// /* Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */

// "use strict";

// // Lern 12

// // const numberOfFilms = +prompt("сколько фильмов ты смотрел?", "");
// // console.log(numberOfFilms);

// // const personalMovieDB = {
// //   count: numberOfFilms,
// //   movies: {}, // - в это свойство поместить пустой объект
// //   actors: {}, // - тоже поместить пустой объект
// //   genres: [], // - сюда поместить пустой массив
// //   privat: false, // - в это свойство поместить boolean(логическое) значение false
// // };

// // const a = prompt("Один из последних просмотренных фильмов?", ""),
// //   b = prompt("На сколько оцените его?", ""),
// //   c = prompt("Один из последних просмотренных фильмов?", ""),
// //   d = prompt("На сколько оцените его?", "");

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// // console.log(personalMovieDB);

// /*  ====== Learn 13 =======  if */ ////////////////////////////

// // const num = 47;

// // console.log(num);

// // if (num < 30) {
// //   console.log("error");
// // } else if (num == 41) {
// //   console.log(" = 41 ");
// // } else {
// //   console.log("good");
// // }

// // // (num > 30) ? console.log("good") : console.log("error"); // тернарный

// // switch (num) {
// //   case 49:
// //     console.log(' = 49');
// //     break;
// //   case 41:
// //     console.log(' = 41');
// //     break;
// //   case 40:
// //     console.log(' = 41');
// //     break;
// //   default:
// //     console.log(' не попало');
// //     break;
// // }

// /*  ====== Learn 14 =======  циклы */ ////////////////////////////

// // const num = 42;

// // for (let i = 1; i < 0; i++) {
// //   1;
// // }

// /*  ====== Learn 15 =======  циклы */ ////////////////////////////

// /* Задание на урок:

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

// // "use strict";

// // Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt("сколько фильмов ты смотрел?", "");
// console.log(numberOfFilms);

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {}, // - в это свойство поместить пустой объект
//   actors: {}, // - тоже поместить пустой объект
//   genres: [], // - сюда поместить пустой массив
//   privat: false, // - в это свойство поместить boolean(логическое) значение false
// };

// let a = "";
// let b = "";

// do {
//   a = prompt("Один из последних просмотренных фильмов?", "");
//   b = prompt("На сколько оцените его?", "");
//   console.log("a = ", a);
//   console.log("b = ", b);
// } while (
//   a == null ||
//   b == null ||
//   a.length == 0 ||
//   b.length == 0 ||
//   a.length >= 20 ||
//   b.length >= 20
// );

// personalMovieDB.movies[a] = b;
// console.log("done");

// // for (let i = 0; i < 1; i++) {
// //   const a = prompt("Один из последних просмотренных фильмов?", "");
// //   console.log("a = ", a);
// //   const b = prompt("На сколько оцените его?", "");
// //   console.log("b = ", b);

// //   if (a != "" && b != "") {
// //     personalMovieDB.movies[a] = b;
// //     console.log("done4");
// //   } else {
// //     i--;
// //     console.log("error");
// //   }
// // }

// console.log(personalMovieDB);
// let wa = "";
// if (personalMovieDB.count <= 10) {
//   wa = "слишком мало , меньше 10";
//   console.log(wa);
//   alert(wa);
// } else if (personalMovieDB.count >= 10) {
//   wa = "да вы киноман ";
//   console.log(wa);
//   alert(wa);
// } else {
//   wa = "совсем не смотрели фильмы ";
//   console.log(wa);
//   alert(wa);
// }

// function foo() {
//   var f = (...args) => args[0];
//   return f(2);
// }

// foo(1); // 2
// console.log(foo(1));

//  function createCounter() {
//     let counter = 0
//     const myFunction = function() {
//       counter = counter + 1
//       return counter
//     }
//     return myFunction
//   }
//   const increment = createCounter()
//   const c1 = increment()
//   const c2 = increment()
//   const c3 = increment()
//   console.log('example increment', c1, c2, c3)

//   1: function createCounter() {
//   2:   let counter = 0
//   3:   const myFunction = function() {
//   4:     counter = counter + 1
//   5:     return counter
//   6:   }
//   7:   return myFunction
//   8: }
//   9: const increment = createCounter()
//  10: const c1 = increment()
//  11: const c2 = increment()
//  12: const c3 = increment()
//  13: console.log('example increment', c1, c2, c3)

/////////////////////////////////////////////
/* Задание на урок 18 лекция :

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

// Код возьмите из предыдущего домашнего задания
