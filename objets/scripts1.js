/* ============================================================
   COURS — MÉTHODES SUR LES STRINGS ET NUMBERS EN JAVASCRIPT
   ============================================================ */

/* ----------------- DÉFINITIONS -----------------
En JavaScript :
1. Les Strings (chaînes de caractères) représentent du texte.
   Exemple : let nom = "Alice";

2. Les Numbers représentent des nombres, entiers ou décimaux.
   Exemple : let age = 25;

Documentation officielle :
- Strings : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String
- Numbers : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number
--------------------------------------------------*/

/* ----------------- EXEMPLES SUR LES STRINGS ----------------- */
// Exemple de remplacement dans une chaîne
// let texte = "J'apprends le JS";
// texte.replace("JS", "PHP"); // Remplace "JS" par "PHP"

// Convertir en majuscules ou minuscules
// texte.toUpperCase(); // "J'APPRENDS LE JS"
// texte.toLowerCase(); // "j'apprends le js"

// Vérifier si une chaîne contient un mot
// texte.includes("JS"); // true

// Extraire une partie de la chaîne
// texte.substring(2, 8); // "appren"

// Séparer une chaîne en tableau
// texte.split(" "); // ["J'apprends", "le", "JS"]

/* ----------------- EXEMPLES SUR LES NUMBERS ----------------- */
// let x = 10.5632;

// Arrondir un nombre décimal avec toFixed
// x.toFixed(2); // "10.56"

// Préciser le nombre de chiffres significatifs avec toPrecision
// let d = 25.123;
// d.toPrecision(3); // "25.1"

// Afficher un nombre en notation exponentielle
// d.toExponential(3); // "2.512e+1"

// Conversion en entier ou flottant
// parseInt("123.45"); // 123
// parseFloat("123.45"); // 123.45

// Vérifier si un nombre est entier
// Number.isInteger(d); // false
// Number.isInteger(100); // true

/* ----------------- AUTRES EXEMPLES ----------------- */
// Arrondir à l'entier le plus proche
// Math.round(7.8); // 8

// Nombre aléatoire entre 0 et 1
// Math.random(); // 0.0 ≤ résultat < 1.0

// Nombre aléatoire entre 1 et 100
// Math.floor(Math.random() * 100) + 1;

 