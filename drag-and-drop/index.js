// Création d'une boite
let item;

//  Evenement dragstart
document.addEventListener("dragstart", (e) => {
  item = e.target;
});

// On enleve l'icone sens-interdit
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// Ou est-ce quon veut relacher l'element
document.addEventListener("drop", (e) => {
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault(e);
    e.target.appendChild(item);
  }
});

// Pour vider le drag & drop

document.addEventListener('dragend', () => (item= null))