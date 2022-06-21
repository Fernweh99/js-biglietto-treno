// Recupero l'elemento p dal DOM
ticketPrice = document.getElementById("ticket-price");

// Chiedo all'utente il numero di chilometri che vuole percorrere
const kilomRun = parseInt(prompt("Quanti kilometri vuoi percorrere?", "20"));

// Chiedo all'utente la sua età
const userAge = parseInt(prompt("Quanti anni hai?", "17"));

// Valido i dati inseriti dall'utente
if (isNaN(kilomRun) | isNaN(userAge)) {
    alert("i dati inseriti non sono validi!!");
}

else {
    // dichiaro constante prezzo per kilometri
    const priceForKilom = 0.21;
    
    // dichiaro un altra variabile con l'operazione che calcola il prezzo finale x tot kilometri
    let priceFinal = kilomRun * priceForKilom;
    
    // Verifico se l'utente rientra tra gli under 18 o over 65 per un eventuale sconto
    let discount = 0
    if (userAge < 18) {
        discount = priceFinal * 0.2;
    }
    
    else if(userAge > 65) {
        discount = priceFinal * 0.4;
    }
    
    // Output su pagina il prezzo del biglietto
    ticketPrice.innerHTML = `Il prezzo del tuo biglietto è: <strong>${priceFinal.toFixed(2)}€</strong>`;
    
    // Output su pagina lo sconto sul biglietto
    ticketDiscount = document.getElementById("ticket-discount");
    if (discount !== 0) {
        ticketDiscount.innerHTML = `Lo sconto applicato per la tua età è di: <strong>${discount.toFixed(2)}€</strong>`;
    }

    else {
        ticketDiscount.innerText = "Non hai nessuno sconto per la tua età";
    }

    // Calcolo prezzo finale e output su pagina
    priceFinal += - discount;
    ticketPriceFinal = document.getElementById("ticket-price-final");
    ticketPriceFinal.innerHTML = `Il prezzo finale del biglietto è: <strong>${priceFinal.toFixed(2)}€</strong>`
    
}