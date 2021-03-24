'use strict';

let numberOfFilms;

function start(){
	numberOfFilms = prompt("Скільки фільмів ви вже переглянули?", "");
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = prompt("Скільки фільмів ви вже переглянули?", "");
	}
}

start();

let personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	privat : false
};

function rememberMyFilms () {
	for ( let i = 0; i < 2; i++){
		const first = prompt('Останій фільм який ви подивились?', ''),
				second = prompt('На скільки ви б його оцінили?', '');
		if( first !=null && second !=null && first !='' && second !="" && first.length<50){
			personalMovieDB.movies[first] = second;
		}else{
			i--;
		}
	}
}

rememberMyFilms ();

function detectPeronalLevel () {
	if(personalMovieDB.count < 10){
		console.log('Дуже мало подивились');
	}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
		console.log('Нормальний такий клядач');
	}else if(personalMovieDB.count >= 30 ){
		console.log('Ви Кіноман');
	}else{
		console.log('Виникла помилка');
	}
}

detectPeronalLevel ();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB); 
	}
}

showMyDB (personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i<=3; i++){
		const genre = prompt(`Ваш Улюблений жанр під номером ${i}?`);
		personalMovieDB.genres[i-1] = genre;
	}
}

writeYourGenres ();