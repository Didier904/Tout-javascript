let texte = "J'apprends le JS "
    alert(texte.replace("JS" , "PHP"));
    
// utilsons les méthodes de l'objet Number(qui est utilisé pour convertir certaines variables en nombre)
let x = 10.5632
// utilisons la méthode "toFixed" pour arrondir un nombre décimal
let g = x.toFixed(2);
// afficjons le résultat
alert('Valeur de g : ' + g)

// utilsons la méthode "toPrecision" pour préciser le nombre du début à la fin
 let d  = 25.123
 // cette propriété précise le nombre souhaité
 let a = d.toPrecision(3);
 // afficchons le résultat
 alert('Valeur de a :' + a);

 
// utilsons la méthode "toExponential" pour préciser l'exposant du nombre
 let b  = 25.123
 // cette propriété précise l'exposant de l'argument
 let z = d.toExponential(3);
 // afficchons le résultat
 alert('Valeur de z :'  + z);
