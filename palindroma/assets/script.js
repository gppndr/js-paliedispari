/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// chiedere all'utente di inserire una parola
const userWord = isWordPalindrome(prompt('inserisci una parola'));


//creare una funzione per capire se la parola inserita è palindroma
function isWordPalindrome(word) {
    console.log('Hai inserito la parola:' + word);
    
    // facciamo il reverse della parola
    const userWordReverse = word.split('').reverse().join('');
    console.log('La parola inserita al contrario diventa:' + userWordReverse);

    //checkiamo se la parola è palindroma
    if(userWordReverse == word) {
        console.log('La parola inserita è palindroma');
    } else {
        console.log('La parola inserita non è palindroma');
    };
};