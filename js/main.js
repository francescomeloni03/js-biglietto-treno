


let eta = prompt("Inserisci la tua età");
let distanzaKil = prompt("Inserisci distanza chilometrica")


let costo = distanzaKil * 0.21;
let messaggio;
// console.log("costo di base", costo)





if(eta < 18) {
    // console.log("l'utente ha meno di 18 anni")
    costo = costo * 0.8;
    messaggio = `Hai lo sconto Under 18. Il costo del tuo biglietto è: ${costo} euro`;
    

} else if (eta > 65) {
    // console.log("l'utente ha piu di 65 anni");
    costo = costo * 0.55;
    messaggio = `Hai lo sconto Over 65. Il costo del tuo biglietto è: ${costo} euro`;
    

} else {
    // console.log("l'utente non ha lo sconto");
    messaggio = `Non hai nessuno sconto. Il costo del tuo biglietto è: ${costo} euro`;
}


document.getElementById("risultato").innerText = messaggio;
// console.log("costo finale", costo);