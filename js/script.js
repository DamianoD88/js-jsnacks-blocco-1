
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// il primo prompt dove inserire la prima parola
// valore firstword uguale richiesta prima parola
// var firstWord = prompt('prima parola');

// stampo firstword
// console.log(firstWord);


// il secondo prompt dove inserire la seconda parola
// valore firstword uguale richiesta seconda parola
// var secondWord  = prompt('seconda parola');

// stampo secondword
// console.log(secondWord);



// if (firstWord.length > secondWord.length) {
//     document.getElementById('word').innerHTML = 'più corta'+ secondWord;

// }  else if (firstWord.length < secondWord.length) {
//     document.getElementById('word').innerHTML = 'più corta'+ firstWord;
// }
//     else  {
//         document.getElementById('word').innerHTML = 'parole uguali';
// } 

/************************************************************************************************ */

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri   inseriti. Esegui questo programma in due versioni, con il for e con il while.

// var somma = 0;

// for (var i = 0; i < 5; i++) {
//     numero = parseInt(prompt('inserire numero'));
//     console.log(numero);
//     somma = somma + numero;
// }

// console.log(somma)


// var i = 0;

// while(i < 5){
//     numero= parseInt(prompt('inserire numero'));
//     somma += numero;
//     i++;
// }

// document.getElementById('word').innerHTML = somma;
// console.log(somma);

/************************************************************************************************ */

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array



// var array = ['']

// for (var i = 0; i < 6; i++) {
//     numero= parseInt(prompt('inserire numero'));
//     if (numero * 2 +1) {
//         array.push(numero)
//         document.getElementById('word').innerHTML = numero;
//     }
// }

    


// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Crea un array con i nominativi degli invitati

var invitati = ['Beppe', 'Gino', 'Geltrude', 'Arturo'];

// chiedi all'utente il suo nome

var nomeUtente = prompt('come ti chiami?');

// Do una risposta all'utente

var messaggioUtente = 'Non puoi entrare'

// comunicagli SE può partecipare  o no alla festa

for (var i = 0; i < invitati.length; i++){
    if (nomeUtente == invitati[i]) {
        messaggioUtente = 'Puoi entrare';
    }
}

alert(messaggioUtente);
