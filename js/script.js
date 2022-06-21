// Recupero l'elemento p dal DOM
ticketPrice = document.getElementById("prezzo-finale");
console.log(ticketPrice);

// Chiedo all'utente il numero di chilometri che vuole percorrere
const kilomRun = parseInt(prompt("Quanti kilometri vuoi percorrere?", "20"));
console.log(kilomRun);

// Chiedo all'utente la sua età
const userAge = parseInt(prompt("Quanti anni hai?", "17"));
console.log(userAge);

// dichiaro constante prezzo per kilometri
const priceForKilom = 0.21;
console.log(priceForKilom);

// dichiaro un altra variabile con l'operazione che calcola il prezzo finale x tot kilometri
let priceFinal = kilomRun * priceForKilom;
console.log(priceFinal);

// Verifico se l'utente rientra tra gli under 18 o over 65 per un eventuale sconto
let discount = 0
if (userAge < 18) {
    discount = priceFinal * 0.2;
}

else if(userAge > 65) {
    discount = priceFinal * 0.4;
}

console.log(discount)

// Calcolo prezzo finale
// Output su pagina il prezzo del biglietto