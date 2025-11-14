// créons un tableau
let prenoms  = ["Eva", "Bass", "Mondot", "David", 'Julien'], p="";
// utilisons la methode "push" pour ajouter les noms suivants à notre tableau
let taille = prenoms.push("Florian", "Zara");
// rajoutons la boucle for avec l'initialisation, le test et l'incrémentation
for(let i=0; i< prenoms.length; i++){
      p += "Prenom n°" + (i+1) + ' : ' + prenoms[i] + '\n';
}
 // affichons le résultat
 // le "taille" permets de récupérer l'information récupéré de la méthode 'push'
 alert('Le tableau contient' + taille + 'éléments : \n' +p);

 // créons un autre tableau
 let name = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
 // je déclare créér les variables suivantes pour les "âges"
let ages = [25, 20, 29, 30];
// utilisons les arguments suivants
let produits = ['Livre', 20, 'Ordinateur', 5, ['Magnets', 100]];
// Identifions les "p"de notre page HTML pour les présenter à l'écran
document.getElementById('p1').innerHTML = prenoms[0] + ' possède 1 ' + produits[2];
document.getElementById('p2').innerHTML = prenoms[1] + ' a ' + ages[1] + ' ans';
document.getElementById('p3').innerHTML = produits[4][1] + ' ' + produits[4][0];

//utilisons la methode "join"
let hombres = ['Pierre', 'Mathilde', 'Florian', 'Camille'];
let tranches = [25, 20, 29, 30];

/*On insère 'Thomas' et 'Manon' dans le tableau prenoms, après le deuxième élément
 *(Mathilde) et sans supprimer d'éléments*/
hombres.splice(2, 0, 'Thomas', 'Manon');

/*On supprime les deux éléments après le premier ( c'est à dire 20 et 29) et on
 *insère 35 après le premier élément (29)*/
let del = tranches.splice(1, 2, 35);

document.getElementById('p1').innerHTML = hombres.join(' - ');
document.getElementById('p2').innerHTML = tranches.join(' / ');
document.getElementById('p3').innerHTML = '"' + del + '" supprimé de tranches';


// Créons et manipulon des dates
let date = Date();
let date2 = Date.now();
// Identifions les "p" de notre page HTML pour affivher la date de manière complète
document.getElementById('p1').innerHTML = date;
document.getElementById('p2').innerHTML = date2;
// 
alert(date);

//On crée une date de facon local
let date1 = new Date();
/* utilisons la méthode ci-dessous, qui renvoie la date complète,
 formatée d'une local et d'options */
let dateLocale = date1.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'});
// Identifions le "p1" de notre page HTML pour afficher la date complète en format local
document.getElementById('p1').innerHTML = 'Date : ' + dateLocale;

// plus simple
const dte = new Date();


// Créons un fonction pour identifier la localisation
function coordonnees(pos) {
    let crd = pos.coords;
// cette variable définie la latitude selon la position géographique
    let latitude = crd.latitude;
// cette variable définie la longitude selon la position géographique
    let longitude = crd.longitude;
    
    document.getElementById('p1').innerHTML= 'Latitude : ' + latitude.toFixed(2);
    document.getElementById('p2').innerHTML= 'Longitude : ' + longitude.toFixed(2);
}
// Cette propriété consiste à géolocaliser l'appareil en temps réél
navigator.geolocation.getCurrentPosition(coordonnees);

// utilisons la méthode max de l'objet Math pour "le paramètre du reste"
let a = 1, b = 2, c = 3, d = 4;
function somme(...nombres){
    let s = 0;
    for (let nombre of nombres){
        s += nombre;
    }
return s;
}
// afficher les resultats
/* je déclare décommenter les résultats pur ne afficher les boîtes d'alertes, ce qu'on parle
de "paramètre du reste".Littéralement, on demande au JavaScript de stocker les arguments passés 
dans un tableau qui possèdera le nom mentionné après '….'

alert(a+' + '+b+' = ' +somme(a,b));
alert(a+' + '+b+' + '+c+' = ' + somme(a, b, c));
*/

// créons une autre
let nom = 'Sow', prenom = 'Anna';
function profil(nom, prenom, ...hobbies){
    let h = '';
    for(hobbie of hobbies){
        h += hobbie + ', ';
    }
    alert('Nom : ' + nom + '\nPrénom : ' + prenom + '\nHobbies : ' + h);
}

/*Décommentez le code pour afficher les boites d'alerte
profil('Sow', 'Anna');
profil('Sow', 'Anna', 'Roblox');
profil('Sow', 'Anna', 'jeux vidéos', 'Roblox');
*/

// utilisons la méthode max de l'objet Math pour le "paramètre de décomposition"
let tb1 = [3, 5, 1, 32];
let tb2= [64, -5, 17];

/*Code à décommenter pour afficher les boites d'alerte
alert('Plus grand nombre de tb1 : ' + Math.max(...tb1));
alert('Plus grand nombre de tb1 et tb2 : ' +Math.max(...tb1, ...tb2) );
*/

// pour la poertée et la durée de vi des variables
let x = 5;//Variable globale

function portee1(){
    let y = 10; //Variable locale
    alert(x + y); // = x + 10
}

function portee2(){
    let x = 100;
    alert(x); // = 100
}

/*Décommentez le code pour l'exécuter
portee1(); // 5 + 10 = 15
x = 20; //On modifie la valeur dans x global
portee1(); // La dernière valeur connue de x (20) est utilisée
portee2(); // 100
*/

let q = 'Bachir';

//bio() a accès à let prenom(q) (et à let age) mais pas à let hobbie
/*Placer des variables dans une fonction interne permet donc de les sécuriser en empêchant leur accès depuis un contexte externe.*/
function bio(){
    let age = 20;
    //hobbies() a accès à let prenom(q) et à let age (et à let hobbie)
    function hobbies(){
        let hobbie =  'Trail';
        return q + ', ' + age + ' ans. Je fais du ' + hobbie;
    }
    return hobbies();
}

/*Décommentez le code pour l'exécuter
alert(bio());
*/

// Prenons un exemple de "closure de pratique"

//on crée une fonction compteur()
function compteur(){
//Cette fonction initialise une variable count et définit également une fonction anonyme interne qu’elle va retourner. 
    let cont = 0;

   return function() {
    return cont++;
   };
}
/*
Pour exécuter notre fonction anonyme, la façon la plus simple est donc ici de stocker le résultat retourné par compteur() (notre fonction anonyme donc) dans une variable
 et d’utiliser ensuite cette variable « comme » une fonction en l’appelant avec un couple de parenthèses.
 On appelle cette variable let plusUn.*/
let plusUn = compteur();

/*Décommentez le code pour l'exécuter
alert(plusUn()); //0 
alert(plusUn()); //1
alert(plusUn()); //2
*/
 
// Créons une promesse
function loadScript(src){
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
        script.onload = () => resolve('Fichier ' + src + ' bien chargé');
        script.onerror = () => reject(new Error('Echec de chargement de ' + src));
    });
}
const promesse1 = loadScript('boucle.js');
const promesse2 = loadScript('script2.js');
// Exploiter les résultats avec les méthodes then() et catch()
promesse1.then(
    function(result){alert(result);},
    function(error){alert(error);}
);
//Code similaire au précédent avec des fonctions fléchées
promesse2.then(result => alert(result), error => alert(error));