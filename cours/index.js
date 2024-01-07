// "use strict";

// Canvas : espace dans lequel on peut agir dessus
function draw() {
  const canvas = document.getElementById("canvas");
  // ctx = contexte
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(50, 50, 50, 150);

  ctx.fillStyle = "rgba(0,100,200,0.5)";
  ctx.fillRect(100, 30, 100, 50);

  ctx.fillStyle = "rgba(100,100,200, 0.5)";
  ctx.fillRect(10, 25, 100, 100);
  ctx.clearRect(35, 25, 40, 40);
  ctx.strokeRect(125, 75, 50, 50);

  ctx.fillStyle = "rgba(200,100,200,0.8)";
  ctx.beginPath();
  ctx.moveTo(180, 150);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 150);
  ctx.fill();
}

window.addEventListener("load", draw);

//------------
// Try catch
//------------

try {
  // on test un block de code
  maFonction();
} catch (err) {
  console.log(err);
}

function isValidJson(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}

console.log(isValidJson("24"));

try {
  maFonction();
} catch (err) {
  console.log(err);
} finally {
  console.log("on est arrivé au bout ! ");
}

// Throw (pour renvoyer qql chose)
function isNumber(num) {
  if (isNaN(num)) {
    throw "Not a number !";
  } else {
    console.log("C'est un nombre");
  }
  // Plein de code, le throw arreterai l'execution du code et nous renverrai dans la console 
}

try {
    isNumber("2d");
} catch (err) {
console.log("Erreur :" + err);
}

//---------
// Strict mode, c'est du javascript un peu plus restrictif et bcp plus moderne, cela permet d'avoir du JS un peu plus cadré
//----------

voiture = "toyota";
console.log(voiture);


