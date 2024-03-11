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
let btnSubmit = document.querySelector(".btn-submit");

// Récupération de la valeur de la case à cocher
let Tournois = document.querySelectorAll("input[type=radio]");
function recupererValeur() {
  const valeurCheckbox = this.value;
  console.log(valeurCheckbox);
  return valeurCheckbox;

  console.log(valeurCheckbox);
}

//Verifier les caractère saisie
const verifCarac = new RegExp(/^[a-zA-Z\-]{2,}$/);

//verfier les email saisie
const verifMail = new RegExp(/^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/);

//verfier la date d'anniversaire
const verifBDay = new RegExp(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/);

// Function pour récupérer le nom saisie

function verfiName() {
  const first_name = document.querySelector("#first_name");
  const result = verifCarac.test(first_name.value);
  first_name.closest(".formData").setAttribute("data-error-visible", !result);
  return result;
}

// Function pour récuperer le prénom saisie
function verifSecondName() {
  const lastname = document.querySelector("#name");
  const result = verifCarac.test(lastname.value);
  lastname.closest(".formData").setAttribute("data-error-visible", !result);
  return result;
}

// Function pour récuperer et verifier le mail saisie
function verifEmail() {
  const mail = document.querySelector("#email");
  const result = verifMail.test(mail.value);
  mail.closest(".formData").setAttribute("data-error-visible", !result);
  return result;
}

// Function pour récperer et verifier la date de naissance

function recupeBirthDate() {
  const birthdate = document.querySelector("#birthdate");
  const result = birthdate.value != "";
  birthdate.closest(".formData").setAttribute("data-error-visible", !result);
  return result;
}

// Récuperer la valeur de l'input radio lieu
function radioValid() {
  const listeRadio = document.querySelectorAll("input[type=radio]");
  let result = false;
  for (let i = 0; i < listeRadio.length; i++) {
    if (listeRadio[i].checked) {
      result = true;
      break;
    }
  }
  listeRadio[0]
    .closest(".formData")
    .setAttribute("data-error-visible", !result);
  return result;
}

// Vérifier le nombre de participation
function participate() {
  const participate = document.querySelector("#quantity");
  const result =
    participate.value >= 0 &&
    participate.value < 99 &&
    participate.value !== "";
  participate.closest(".formData").setAttribute("data-error-visible", !result);
  return result;
}

// Vérifier les conditions d'utilisation
let isConditionValid = false;
function conditionCheck() {
  const conditions = document.querySelector("#checkbox1");
  const result = conditions.checked;
  conditions.closest(".formData").setAttribute("data-error-visible", !result);
  return result;
}

// Function de validation du formulaire
function validate(event) {
  event.preventDefault();
  if (
    verfiName() &
    verifSecondName() &
    recupeBirthDate() &
    verifEmail() &
    participate() &
    conditionCheck() &
    radioValid()
  ) {
    const body = document.querySelector(".modal-body");
    const success = document.querySelector(".modal-success");
    body.style.display = "none";
    success.style.display = "block";
  }
  // console.log();
}
