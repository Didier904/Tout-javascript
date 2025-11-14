
// En utilisant les guillemets, pas besion de l'anti-slash parcequ'il est déja reconnu comme chaîne de caractère
let dpt1 = "j'habite à Amiens";
// En utilisant les apostrophes, on met en place l'anti-slash entre le ('j') pour que le script JS le reconnais comme chaîne de caractère 
let dpt2 = 'j\'habite à Amiens';
// Affichons le résultat
alert("affiche le résultat");

//Calculons les variables
let a = 5, b = 2, c = 4;
// utilisons l'opérateur de concaténation
a += 2; // équivalent de a = a + 2
// utilisons l'opérateur de soustraction
a -= 4; // équivalent de a = a - 4
// utilisons l'opérateur de multiplication
b *= a;
c *= b;
alert(a)


 
// Exemple de concaténation
let prénom = "Bass", espace = ' ', nom = "SOW";
// concatenation pour donner le résultat final
let résultat = prénom + espace + nom;
let toi = 'Aliou Sow';
// Affiche le résultat
alert("Contenu de la variable résultat est :" + résultat +
      "Contenu de la variable toi est :" + toi   
);



// Exemple de concaténation avec une chaîne de caractère
let x = 4 + 3 + "1";
let y = 5 + 2 + "1";
// Concaténons le résultat
alert("variable de x est de :" + x)
// Concarénons avec le typeOf, qui donne le résultat 72 string(chaîne de caractère)
// utilisation du \n pour le retour à la ligne
// le typeof sert à déterminer le type de valeur
alert("variable de x est de :"  + x + typeof(x) +
      "\nvariable de y est de :" + y + typeof(y)
); 

// utilisation de la condition if
let heure = 21;
// si heure est inf ou égal à 10, alors le message sera "Bonjour"
if (heure <= 10 == false){
      alert("Bonjour");
}
// sinon si heure est égal à 12, alors le messge sera 'il est midi'
else if (heure == 12 == true){
      alerte ("il est midi")
}
// sinon c'est le matin
else{
      alert("c'est le matin")
}


let d = 0;
  // Quand la valeur de d est inférieur à 10; il s'éxécuter juqu'a 9 
while (d < 10){
      alert("d contient le valeur :" +d);
      // le d++ rajoute un +1 à la valeur d jusqu'a la ferméture de la boucle soit (9) parce que d < 10
      d++;
}

//utilisation de la boucle for
let i = "";
for(i = 0; i <10; i++){
      alert( "i contient la valeur de :" +i);
}

// création d'une foncton simple
// x et y sont des paramètres parce qu'ils sont témoins la fonction multiplication
function mulitiplication(x,y){
      return x *y ; // tout ce qui est après l'instruction return ne sera jamais affiché, parce qu'il met fin à l'éxecution
}
// appleons nos éléments à multiplier
// le 5 et le 10 sont appelés arguments parce qu'ils remplacent le x et le y qui sont à leur tour de paramètres
 let  resultat1 = mulitiplication(5,10);
 resultat1 += 2;
 alert(resultat1); 

 // utilisons de sobjets primitives
let primitive = "Je suis une valeur primitive";

//Déclarons l'identité
let moi ={
      // je déclare les propriétés suivantes
    prenom : "Mary",
    nom : "Balde",
    age  : 16,
     identite : function(){
        return 'Prénom : ' +this.prenom +
        '\nNom : ' +this.nom +
        '\nAge :' +this.age;
     }
}
// affiche l'identité complete de la personne ciblée
alert(moi.identite());

//Création d'un objet simple
function identite(p, n, a){
      // le "this" nous permets d'accéder aux paramètres associés de (prénom, nom, age)
      this.prenom = p;
      this.nom = n;
      this.age = a;
}
// on détermine les ages de Bass et Mary
let Bass = new identite("Bass", "Sow", 21);
let Mary = new identite("Mary", "Balde", 16);

alert('Age de Bass: ' +Bass.age +
      '\nAge de Mary: ' +Mary.age
);

 //les méthodes de objets "string"
// déclarons une variable
let  texte  = "je m'appelle Nereus"
// Ecrivons cette variable en minuscule avec la propriété suivante
let texteMin = texte.toLocaleLowerCase();
// en majuscules
let texteMaj = texte.toUpperCase();

// affixhons le résultat
alert("texte de base :" + texte +
      "\ntexte en minuscules :" + texteMin +
      "\ntexte en majuscules :" + texteMaj);

// utilisationde la propriété
let js = "j'apprends le Javascript";
// affichons le résultat pour remplacer le mot "JS en PHP"
alert(js.replace("Javasript", "PHP"));



