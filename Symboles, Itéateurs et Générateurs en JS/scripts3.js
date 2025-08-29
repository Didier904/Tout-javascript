 /* =================================
   Lignes 1-7 : Exemples de Symboles
   ==================================

// Création de Symboles 
const symbole1 = Symbol();
const symbole2 = Symbol('symbole2');
const x42 = Symbol(42);

//Crée et renvoie un nouveau symbole symbole3
const symbole3 = Symbol.for('symbole3');

//On convertit le symbole en chaine pour pouvoir l'alert - 
// je déclare décommenter le code pour l'exécuter plus tard
alert(symbole3.toString());
*/


/* ==================================================
   Lignes 15-41 : Fonctions Génératrices (Generators)
   ================================================== 

// Créer une génératrice de fonction avec "generateSequence" pour créer une suite de sequences 
function* generateSequence1(){   
//  Concrètement, yield* va nous permettre d’exécuter le code d’un générateur à partir
// d’un autre générateur et donc de renvoyer les valeurs liées aux yield de ce premier générateur. 

    yield 1;
    yield 2;
    yield 3;
}
function* generateSequence2(){
    yield 4;
    yield* generateSequence1();
    yield 5;
}

let generateur = generateSequence2();

let quatre = generateur.next(); //{value: 4, done: false}
let un = generateur.next(); //{value: 1, done: false}
let deux = generateur.next(); //{value: 2, done: false}
let trois = generateur.next(); //{value: 3, done: false}
let cinq = generateur.next(); //{value: 5, done: false}
let und = generateur.next();  //{value: undefined, done: true}

// affichons le résultat
alert(quatre.value + '\n' +
      un.value + '\n' +
      deux.value + '\n' +
      trois.value + '\n' +
      cinq.value + '\n' +
      und.value); */


/* ==================================
   Lignes 49-56 : Exemple de Cookies
   ================================== 

/* Création d'un cookie
document.cookie = 'user=Nereus'; //Crée ou met à jour un cookie 'user'
alert(document.cookie); //Affiche la liste des cookies

let date = new Date(Date.now() + 86400000); // 86400000ms = 1jour
date = date.toUTCString();

// créons notre cookie
document.cookie = 'user=Nereus; path =/; domain=nereus-sow.com; secures; expires=' + date;

//Supprime le cookie en lui passant une date d'expiration passée
document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'; */


/* ==================================================
   Lignes 58+ : IndexedDB : Stockage d'un utilisateur
   ================================================== 
let ck = '';
let openRequest = indexedDB.open('db', 1);

openRequest.onupgradeneeded = function(){
    ck = openRequest.result;

    //Si l'objet de stockage users n'existe pas, on le crée
    if (!ck.objectStoreNames.contains('users')){
        ck.createObjectStore('users', {keyPath: 'id'});
    }
};

openRequest.onerror = function(){
    alert('Impossible d\'accéder à IndexedDB');
};

openRequest.onsuccess = function(){
    ck = openRequest.result;
    let transaction = ck.transaction('users', 'readwrite');
    
    transaction.oncomplete = function(){
        alert('Transaction terminée');
    };

    let users = transaction.objectStore('users');
    
    let user = {
        id: 1,
        prenom: 'Pierre',
        mail: 'pierre.giraud@edhec.com',
        inscription: new Date()
    };
    
    let ajout = users.add(user);
    
    ajout.onsuccess = function(){ 
        alert('Utilisateur ajouté avec la clef ' + ajout.result);
    };
    
    ajout.onerror = function(){
        alert('Erreur : ' + ajout.error);
    };
}; */


/* ===========================================
   Lignes 121-131 : Exemple de rectangle vide
   ============================================ 
// déssinons notre rectangle vide
let canvas = document.getElementById('c3');

// utlisons la méthode "getContext" pour renvoyé un objet appartenant à l'interface "CanvasRenderingContext2D"
let ctx = canvas.getContext('2d'); // '2d' pour le format

//
ctx.strokeStyle = '#b31ccbff'; //Nuance de move
ctx.strokeRect(50, 25, 200, 100); */


/* ============================================
   Lignes 134-141 : Exemple de rectangle plein
   ============================================ 
let cnvs = document.getElementById('c3');
let ctx = canvas.getContext('2d');

ctx.fillStyle = '#cc4471ff'; //Nuance rosâtre
ctx.fillRect(50, 25, 200, 100); */


 /* décommentez le script pour tester le résultat
 ================================================
   Exemple de plusieurs rectangles remplis et tracés
   ================================================ 

// Récupère l'élément <canvas> dans le DOM avec l'id 'c3'
let canvas = document.getElementById('c3');

// Récupère le contexte 2D du canvas pour pouvoir dessiner
let ctx = canvas.getContext('2d');

// --------- RECTANGLES REMPLIS ---------

// Définit la couleur de remplissage pour le premier rectangle
ctx.fillStyle = '#b31ccbff'; // Nuance violette foncée
// Dessine un rectangle plein aux coordonnées x=50, y=25, largeur=200, hauteur=100
ctx.fillRect(50, 25, 200, 100);

// Change la couleur de remplissage pour le deuxième rectangle
ctx.fillStyle = '#cc4471ff'; // Nuance rosâtre
// Dessine un deuxième rectangle plein aux coordonnées x=350, y=25, largeur=200, hauteur=100
ctx.fillRect(350, 25, 200, 100);

// --------- RECTANGLES TRACÉS (contours) ---------

// Définit la couleur du contour
ctx.strokeStyle = 'purple'; // Violet
// Dessine un rectangle vide (seulement le contour) aux coordonnées x=50, y=175, largeur=200, hauteur=100
ctx.strokeRect(50, 175, 200, 100);

// Dessine un deuxième rectangle vide aux coordonnées x=350, y=175, largeur=200, hauteur=100
ctx.strokeRect(350, 175, 200, 100);
*/


/*======================================================
   Lignes 165-177  : déssinons du texte dans un canevas
  =======================================================
let cnvs = document.getElementById('c3');
let ctx = cnvs.getContext('2d'); // '2d' en minuscules

// Texte creux
ctx.font = 'bold 10px Verdana, Arial, serif'; // 'bold' (gras) au lieu de 'gras'
ctx.strokeStyle = 'blue'; // 'strokeStyle' avec s minuscule
ctx.strokeText('Texte creux', 25, 50); // 'strokeText' avec s minuscule

// Texte plein
ctx.font = 'bold 20px Verdana, Arial, serif';
ctx.fillStyle = 'black'; // 'dark' n’existe pas, mets une vraie couleur
ctx.textAlign = 'center'; // 'center' au lieu de 'centre'
ctx.fillText('Texte plein', 150, 100); // texte plein
*/