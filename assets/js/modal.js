function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Élement du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// Événement de lancement de la modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction pour lancer le formulaire modal
function launchModal() {
  modalbg.style.display = "block";
}
// Fevenement de fermuture de la modal
modalClose.addEventListener("click", closeModal);

// Fonction pour fermer le formulaire modal
function closeModal() {
  modalbg.style.display = "none";
}

// Récupération des données saisi
let prenom = document.querySelector("#first_name");
let nom = document.querySelector("#name");
let email = document.querySelector("#email");
let dateDeNaissance = document.querySelector("#birthdate");
let nbTournois = document.querySelector("#quantity");
let btnSubmit = document.querySelector(".btn-submit");

console.log(prenom.value);
console.log(nom.value);
console.log(email.value);
console.log(dateDeNaissance.value);
console.log(nbTournois.value);
console.log(btnSubmit);

// Récupération de la valeur de la case à cocher
let Tournois = document.querySelectorAll("input[type=radio]");
function recupererValeur() {
  const valeurCheckbox = this.value;
  console.log(valeurCheckbox);
  return valeurCheckbox;

  console.log(valeurCheckbox);
}

// Vérification si la saisi est bonne
let grasped = /^[a-zA-Z]{2}$/;
//modifier pour avoir les é et carac spé
let test = /^[^a-zA-Z0-9_]{2}$/;

// Fonction pour afficher le message d'erreur
function afficherMessageErrer(message, id) {
  const messageErreur = document.getElementById(id);
  messageErreur.textContent = message;
  messageErreur.style.display = "block";
}
// Fonction pour cacher le message d'erreur
function cacherMessageErreur() {
  const messageErreur = document.getElementById("error-message");
  messageErreur.textContent = "";
  messageErreur.style.display = "none";
}
// Fonction pour afficher un message de succès
function afficherMessageSucces(message, id) {
  const messageSucces = document.getElementById(id);
  messageSucces.textContent = message;
  messageSucces.style.display = "block";
}

// // Afficher le message d'erreur
// afficherMessageErrerChamp(
//   "Veuillez entrer 2 caractères ou plus pour le champ du nom."
// );

// Récuperer la valeur du btn radio
let isRadioValid = false;
function radioValid() {
  let listeRadio = document.querySelectorAll("input[type=radio]");
  for (let i = 0; i < listeRadio.length; i++) {
    if (listeRadio[i].checked) {
      isRadioValid = true;
      // console.log(listeRadio[i].value);
    }
  }
  if (!isRadioValid) {
    afficherMessageErrer("Radio invalide", "errorid");
  }
}

//Ne pas oublier de checked

// Vérifier les conditions d'utilisation
let conditions = document.getElementById("conditions");
{
  if (conditions.cheked) {
    //success
  } else {
    //Ecrire un message disant qu'il est obligatoire.
  }
}

// Bloqué le chargement de page lors du submit
function validate() {
  preventDefault();
  let nom = document.getElementById("first_name");
  console.log(nom.value);
  radioValid();
  if (isRadioValid) {
    console.log("test");
  }
}
