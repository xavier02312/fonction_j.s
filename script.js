/**
 * LES FONCTIONS
 */

function nomDeLaFonction() {
    //...
}

let nomDeFonction = function(prenom, nom = "doe", age = 10) {   //parametre ou argument => prenom//

    let phrase = `Bonjour ${prenom}`;

    if (nom !== "doe") {
        phrase += ` ${nom}`;
    }                                                           //if permet d' ajouter "doe" et age=10
                                                                //if permet d' ajouter age=10
    if (age !== null) {
        phrase += `, tu as ${age} ans`;
    }

    // console.log(phrase);                                      //Ma 2ème phrase en console est completter
    return phrase;

   // console.log(`Bonjour ${prenom} ${nom}, tu as ${age} !`);  // se qui est en fonction reste en fonction//
}

let nomFonction = () => {
    //...
}

nomDeFonction("xavier", "paqueriaud", 38);                      //console => xavier 
// nomDeFonction("Marcelle");                                   //console => Marcelle        

let brouette = "xavier";
let lastName = "paqueriaud";                                    // on peux déclarer autre variable
let number = 38;

// l' orde des argument importants, les respecter
let phraseBienvenue = nomDeFonction(brouette, lastName, number);
console.log(phraseBienvenue);
// nomDeFonction("jérome");                                      // valeur de console de la 2ème phrase
document.querySelector("body").innerText = phraseBienvenue;      //Afficher dans le body

/**
 * Fonction recursive
 * ATTENTION § SI AUCUN ARRET? BOUCLE INFINIE       
 */
let addition = function(number, limit) {

    if (number != limit) {
        number += 1;
        console.log(number);
        addition(number, limit);
    }
    return true;                                
}

let finish = addition(1, 200);                              //Déffini la fin de l'addition//

if (finish) {
    console.log("Addition terminée !");
}