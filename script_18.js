/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("сколько фильмов ты смотрел?", "");
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {}, // - в это свойство поместить пустой объект
  actors: {}, // - тоже поместить пустой объект
  genres: [], // - сюда поместить пустой массив
  privat: false, // - в это свойство поместить boolean(логическое) значение false
};

let a;
let b;

do {
  a = prompt("Один из последних просмотренных фильмов?", "");
  b = prompt("На сколько оцените его?", "");
  console.log("a = ", a);
  console.log("b = ", b);
} while (
  a == null ||
  b == null ||
  a.length == 0 ||
  b.length == 0 ||
  a.length >= 20 ||
  b.length >= 20
);

personalMovieDB.movies[a] = b;
console.log("done");

console.log(personalMovieDB);
let wa = "";
if (personalMovieDB.count <= 10) {
  wa = "слишком мало , меньше 10";
  console.log(wa);
  alert(wa);
} else if (personalMovieDB.count >= 10) {
  wa = "да вы киноман ";
  console.log(wa);
  alert(wa);
} else {
  wa = "совсем не смотрели фильмы ";
  console.log(wa);
  alert(wa);
}
