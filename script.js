"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a !=null && b !=null && a !="" && b !="" && a.length < 50) {
        
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

// }

 console.log(personalMovieDB);

//const num = 8;

// if (num < 7) {
//     console.log('Error');
// } else if (num > 10) {
//     console.log('Much');
// } else {
//     console.log('Ok!');
// }

//  switch (num) {
//     case 6:
//         console.log('false');
//         break;
//     case 10:
//         console.log("fal");
//         break;
//     case 7:
//         console.log("ToChno!");
//         break;
//     default:
//         console.log("No this time");
//         break;    
// }     

//let num = 0;

// while (num < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

// if (a !=null && b !=null && a !="" && b !="" && a.length < 50) {
  
// personalMovieDB.movies[a] = b;
// console.log('done');
// } else {
//   console.log('error');
//   i--;
// }

//     console.log(num);
//     num++;
// }
// console.log(personalMovieDB);


// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');

// if (a !=null && b !=null && a !="" && b !="" && a.length < 50) {

// personalMovieDB.movies[a] = b;
// console.log('done');
// } else {
// console.log('error');
// i--;
// }

//     console.log(num);
//     num++;
// }
// while (num < 2);

// console.log(personalMovieDB);


// for (let i = 1; i < 11; i++) {
//     if (i === 8) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// function Testo(w){
//     console.log(w);
// }

// Testo("Privet Medved!");

const options = {
    name: 'Alex',
    suname: 'Petrov',
    clientId: '2456',
    email: 'ddd@ebot.com',
    vizits: {
        youtube: 'video',
        pinterest: "pins",
        insagram: 'photos'
    },
    makeTest: function() {
    console.log('Testor');
}
};

options.makeTest();

// console.log(options.name);

// console.log(options ["vizits"]["youtube"]);


    const {youtube, pinterest, insagram} = options.vizits;
    console.log(pinterest);
// console.log(Object.keys(options).length);

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Propertis ${i} have means ${options[key][i]}`);
//         } 
//     } else {
//        console.log(`Propertis ${key} have means ${options[key]}`);
//        counter++;
//     }
// }

// console.log(counter);

