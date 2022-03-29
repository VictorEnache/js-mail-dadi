const mail_list = ['victor@gmail.com', 'ginevra@gmail.com', 'giacomo@gmail.com','vincenzo@gmail.com',];

const user_mail_input = prompt('Inserisci la tua email!')

let risposta;

const risposta_affermativa = "L'indirizzo email inserito è corretto"

const risposta_negativa = "L'indirizzo email inserito è errato, si prega di riprovare!"

for (let i = 0; i<mail_list.length; i++) {
    const single_mail = mail_list[i]
    

    if (user_mail_input == single_mail) {
        risposta = risposta_affermativa
    }
}

if (risposta != risposta_affermativa) {
    risposta = risposta_negativa;
}
console.log(mail_list)
console.log(risposta)