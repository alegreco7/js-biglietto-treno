let eta = prompt("Inserisci la tua età.")
let km = prompt("inserisci la quantità di km che vuoi percorrere.")
km = km * 0.21;

// variabili

let sconto;
let ticketFullPrice = km;
let message;
// calcoli

if(eta >= 65){
    sconto = ticketFullPrice * 40 / 100;
    ticketFullPrice = km - sconto;
    // messaggio 
    message = "Complimenti rientri nella categoria degli Over.65 e questo ti garantisce uno sconto del 40%! Il tuo prezzo finale sarà:"
}
else if(eta < 18){
    sconto = ticketFullPrice * 20 / 100;
    ticketFullPrice = km - sconto;
    // messaggio
    message = "Complimenti rientri nella categoria Under.18 e questo ti garantisce uno sconto del 20%! Il tuo prezzo finale sarà:"

}
else{
    // messaggio
    message = "Ecco il tuo prezzo finale."
}

// arrotondo il prezzo
ticketFullPrice = ticketFullPrice.toFixed(2);


