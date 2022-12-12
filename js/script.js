// 1 - Chiedere all'utente di inserire una parola a sua scelta tramite promp
// 2 - Definire tramite una funzione se la parola data è palindroma o no
    // 2.1 - Definire una funzione con parametro in ingresso
    // 2.2 - Invertire la parola data
        // 2.2.1 - Mettere le lettere della parola in un'array
        // 2.2.2 - Invertire l'ordine delle lettere
        // 2.2.3 - Riunire le lettere invertite per formare la nuova parola da confrontare con l'originale
        /*
         2.2.4 - SE la nuova parola è uguale alla prima
                    : Stampa "Parola palindroma"
                    ALTRIMENTI
                    : Stampa "Parola non palindroma
         */


let word = prompt("Inserire una parola");

function checkPalindroma(word)
{
    let new_word = word.split("");
    new_word = new_word.reverse()
    new_word = new_word.join("")
    console.log(new_word);

    if(new_word === word){
        
        alert("La parola è palindroma")

    }else{
        alert("La parola non è palindroma")
    }
}

checkPalindroma(word);





