"use strict";

/////////////////////////////////////////
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оценити его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оценити его?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// console.log(personalMovieDB);




// if (1) {
//   console.log('Ок!');
// } else {
//   console.log('Error!');
// }



// if (num < 49) {
//   console.log('Error!');
// } else if (num > 100) {
//   console.log('Много');
// } else {
//   console.log('Ok');
// }


// (num === 50) ? console.log('Ok') : console.log('Error');


// const num = '50';

// switch (num) {
//   case '49':
//     console.log('Неверно');
//     break;
//   case '100':
//     console.log('Неверно');
//     break;
//   case '50 ':
//     console.log('Верно');
//     break;
//   default:
//     console.log('Не в этот раз');
//     break;
// }


  // const hamburger = 5;
  // const fries = null; 

  // if (hamburger && fries) {
  //   console.log('Я сыт');
  // }

// console.log((hamburger && fries));


// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log((hamburger === 3 && cola && fries)); 

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dasdsadas');


// if (hamburger === 3 && cola === 1 && fries) {
//   console.log('Все сыты');
// } else {
//   console.log('Мы уходим'); 
// }




// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//   console.log('Все сыты');
// } else {
//   console.log('Мы уходим');
// }

// console.log(hamburger || cola || fries);




// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);



// console.log(!0);
 







// Что выведет в консоль код ?



// console.log(NaN || 2 || undefined);


// console.log(NaN && 2 && undefined);


// console.log(1 && 2 && 3);


// console.log(!1 && 2 || !3);


// console.log(25 || null && !3);


// console.log(NaN || null || !3 || undefined || 5);


// console.log(NaN || null && !3 && undefined || 5);


// console.log(5 === 5 && 3 > 1 || 5);



// Выполняется ли условие ?

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//   console.log('Done!')
// }




// Выполняется ли условие ?

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log('Done!')
// }

// Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение.С const будет ошибка, можете проверить.
//   А без значения там undefined, напоминаю 🙂

//   Выполняется ли условие?

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//   console.log('Done!')
// }




// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++
// }
// while (num < 55);

// let num = 50;

// for (let i = 1; i < 10; i++) {
//   if(i === 6) {
//     // break;
//     continue;
//   }

//   console.log(i);
// }




// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);  
//   }
// }

// *
// **
// ***
// ****
// *****
// ******


// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
   
//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }

//   result += '\n'
// }

// console.log(result);

//  first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first;
//       console.log(`Third level: ${k}`);
//     }
//   }
//  }


// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) break first; 
//       console.log(`Third level: ${k}`);
//     }
//   }
// }



 
// const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '')

// const 
//   personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// }

// for (let i = 0; i < 2; i++) {
//   const 
//   a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('на сколько оцените его?', '');

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--; 
//   }

// }


// if (personalMovieDB.count < 10) {
//   console.log('Просмотренно довольно мало фильмов');
// } else if (personalMovieDB.count
//   >= 10 && personalMovieDB.count < 30) {
//   console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//   console.log('Вы киноман');
// } else {
//   console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);




// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   let num = 10;
//   console.log(num);
// }


// showFirstMessage('Hello World!');
// console.log(num);


// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4,3));
// console.log(calc(6,2));
// console.log(calc(4,1));



// function ret() {
//   let num = 50;

//   //

//   return num;
// }

// const anitheNum = ret();
// console.log(anitheNum);


// const logger = function () {
//   console.log('Hello');
// };

// logger();


// const calc = (a, b) => a + b;




// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//   console.log(curr * amount);

// }

// convert(500, usdCurr);
// convert(500, eurCurr);


// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//  return curr * amount;

// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr)
// promotion(res);



// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 6) return
//   }
//   console.log('Done');
// }

// test();




// const str = 'teSt';


// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);


// const fruit = 'Some fruit';

// console.log(fruit.indexOf('q'));


// console.log(logg.slice(-5, -1));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));


// console.log(logg.substr(6, 5));
// const logg = 'Hello world';

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px'
// console.log(parseInt(test));
// console.log(parseFloat(test));




// function first() {
//   //
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`я учу ${lang}`);
//   callback();
// }


// function done() {
//   console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);


// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function () {
//     console.log('Test');
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);


// let counter = 0;
// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// };
// console.log(counter);

// console.log(options.name);
 
// delete options.name;
  
// console.log(options);