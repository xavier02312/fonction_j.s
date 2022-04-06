/**
 * Entrainement
 */
//Selectionner le champs text du nom

const lastName = document.querySelector("#lastname");

// Applique un écouteur d'évènement sur les chamgements
// effectués dans le champs
lastName.addEventListener(`input`, () => {                  //écouter d'événement
    
    //Vérifie si le champs est vide ou pas
    const response = notEmpty(lastName.value);

    isError("Votre nom est obligatoire", response, "lastname");
});

//Le prénom//
const firstName = document.querySelector("#firstname");

firstName.addEventListener(`input`, () => {

    const response = notEmpty(firstName.value);
    isError("Votre prénom est obligatoire", response, "firstname");

});
//Le pseudo
const Pseudo = document.querySelector("#pseudo");

Pseudo.addEventListener(`input`, () => {

    const response = notEmpty(Pseudo.value);
    isError("Le pseudo est obligatoire", response, "pseudo");

    //Si response est pas vide 

    if (response) {
        const length = isLength(pseudo.value, 5);
        isError("Le pseudo doit comporter 5 caractère min.", length, "pseudo")
    }

});
//Le mail
const mail = document.querySelector("#email");

mail.addEventListener(`input`,() => {

    const response = notEmpty(mail.value);
    isError("Votre Adresse e-mail est obligatoire", response, "email");

    if (response) {
        //fonction faite avant puis faire if 
        const checkEmail = isEmail(mail.value);
        isError("L'adresse email est invalide", checkEmail, "email");
    }

})
//Le mot de passe
const password = document.querySelector("#password");

password.addEventListener(`input`,() => {

    const response = notEmpty(password.value);
    isError("Votre mot de passe est obligatoire", response, "password");

    if (response) {
        const length = isLength(password.value, 6);
        isError("Le mots de passe doit comporter 6 caractères min.", length, "password");
    }

});
// Confirme le Mot de Passe
const confirmpassword = document.querySelector("#confirmpassword");

confirmpassword.addEventListener(`input`,() => {

    const response = notEmpty(confirmpassword.value);
    isError("Votre mot de passe est obligatoire", response, "confirmpassword");

    if (response) {
        const length = isLength(confirmpassword.value, 6);
        isError("Le mots de passe doit être le même.", length, "confirmpassword");
    }

});






//FONCTION
/**
 * Vérifie que la donnée ne soit pas vide
 */

const notEmpty = (value) => {
    if (typeof value !== "string" || value.length === 0) {
        return false;
    } else { 

    return true;
 }}

 /**
  * Gestion des erreurs du formulaire
  * @param {string} message
  * @param {boolean} error
  * @param {string} id
  */
 const isError = (message, success, id) => {

    //Récupère le champ input
    const input = document.querySelector(`#${id}`);

    //Récupère la balise contenant le message d'erreur
    const messageError = document.querySelector(`#${id}Error`);

    //Affiche le message d'erreur
    input.style.border = "2px solid red";
    messageError.innerText = message;
    messageError.style.display = "block";

    //affiche un succès
    if (success) {
        input.style.border = "2px solid green";
        messageError.style.display = "none";
    }
 }
 

 /**
  * Vérifie la longueur d'une chaîne de caractère
  * 
  * @param {string} value Chaine de caratère à évaluer
  * @param {int} min    Longueur min. à atteindre
  * 
  * @returns {boolean}
  */
const isLength = (value, min) => {

    return value.length >= min;
};

/**
 * Vérifie la validité d'une adresse mail
 * 
 * @param {string} value
 * @returns {boolean}
 */

const isEmail = (value) => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,10}$/;        //code pattern sert pour les vérif de caractère
    return pattern.test(value);

}


    



 