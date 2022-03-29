const random_utente = Math.floor(Math.random() * 6) +1

const random_pc = Math.floor(Math.random() * 6) +1

let risultato;

const vincitore_pc = 'Hai Perso! Il round è stato vinto dalla CPU.'

const vincitore_utente = 'Congratulazioni hai vinto!'

const pareggio = 'In questo round non ci sono stati vincitori.'


if (random_pc > random_utente) {
    risultato = vincitore_pc
}
else if (random_utente > random_pc) {
    risultato = vincitore_utente
}
else {
    risultato = pareggio
}


console.log(`Dato utente: ${random_utente}`)
console.log(`Dato CPU ${random_pc}`)
console.log(risultato);