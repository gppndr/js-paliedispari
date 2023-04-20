/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// L’utente sceglie pari o dispari
const userEvenOdd = prompt("Pari o dispari?").toLowerCase();
console.log('Hai scelto:' + userEvenOdd);

//l'utente inserisce un numero da 1 a 5.
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Il numero inserito è:" + userNumber);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const min = 1;
const max = 5;
const cpuNumber = getRandomNumber(min, max);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log("Il numero generato dal computer é:" + cpuNumber);

//Sommiamo i due numeri
const sum = userNumber + cpuNumber;
console.log("La somma dei due numeri è:" + sum);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let sumEvenOrOdd = isEven(sum);

function isEven(number) {
    if(number % 2 == 0) {
        console.log('La somma dei due numeri è pari');
        return 'pari'
    } else {
        console.log('La somma dei due numeri è dispari');
        return 'dispari'
    };
};

//Dichiariamo chi ha vinto
if(sumEvenOrOdd === userEvenOdd){
    console.log('Hai vinto!')
} else {
console.log('Hai perso!')
};

