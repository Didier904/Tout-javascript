/* ============================================================
    EXEMPLE 1 — MANIPULATION DE TABLEAUX 
   ============================================================

    /*
    let prenoms = ["Eva", "Bass", "Mondot", "David", "Julien"], p = "";
    let taille = prenoms.push("Florian", "Zara");

    for (let i = 0; i < prenoms.length; i++) {
        p += "Prénom n°" + (i + 1) + " : " + prenoms[i] + "\n";
    }

    alert("Le tableau contient " + taille + " éléments : \n" + p);
    */

/* ============================================================
===================== FIN EXEMPLE 1 ======================== */



/* ============================================================
    EXEMPLE 2 — ACCÈS AUX ÉLÉMENTS 
   ============================================================

    /*
    let ages = [25, 20, 29, 30];
    let produits = ["Livre", 20, "Ordinateur", 5, ["Magnets", 100]];

    document.getElementById("p1").innerHTML = prenoms[0] + " possède 1 " + produits[2];
    document.getElementById("p2").innerHTML = prenoms[1] + " a " + ages[1] + " ans";
    document.getElementById("p3").innerHTML = produits[4][1] + " " + produits[4][0];
    */

/* ============================================================
===================== FIN EXEMPLE 2 ======================== */



/* ============================================================
    EXEMPLE 3 — splice(), join() et transformations 
   ============================================================

    /*
    let hommes = ["Nereus", "Mathilde", "Thibaut", "Eva"];
    let tranches = [25, 20, 29, 30];

    hommes.splice(2, 0, "Thomas", "Manon");
    let del = tranches.splice(1, 2, 35);

    document.getElementById("p1").innerHTML = hommes.join(" - ");
    document.getElementById("p2").innerHTML = tranches.join(" / ");
    document.getElementById("p3").innerHTML = '"' + del + '" supprimé de tranches';
    */

/* ============================================================
===================== FIN EXEMPLE 3 ======================== */



/* ============================================================
    EXEMPLE 4 — DATES 
   ============================================================

    /*
    let date = Date();
    let date2 = Date.now();
    alert(date);

    let date1 = new Date();
    let dateLocale = date1.toLocaleString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    document.getElementById("p1").innerHTML = "Date : " + dateLocale;
    */

/* ============================================================
===================== FIN EXEMPLE 4 ======================== */



/* ============================================================
    EXEMPLE 5 — GÉOLOCALISATION 
   ============================================================

    /*
    function coordonnees(pos) {
        let latitude = pos.coords.latitude;
        let longitude = pos.coords.longitude;

        document.getElementById("p1").innerHTML = "Latitude : " + latitude.toFixed(2);
        document.getElementById("p2").innerHTML = "Longitude : " + longitude.toFixed(2);
    }

    navigator.geolocation.getCurrentPosition(coordonnees);
    */

/* ============================================================
===================== FIN EXEMPLE 5 ======================== */



/* ============================================================
    EXEMPLE 6 — PARAMÈTRE REST ET FONCTIONS 
   ============================================================

    /*
    function somme(...nombres) {
        let total = 0;
        for (let n of nombres) { total += n; }
        return total;
    }

    alert(somme(1, 2));
    alert(somme(1, 2, 3));
    */

/* ============================================================
===================== FIN EXEMPLE 6 ======================== */



/* ============================================================
    EXEMPLE 7 — PROFIL ET HOBBIES 
   ============================================================

    /*
    function profil(nom, prenom, ...hobbies) {
        let h = hobbies.join(", ");
        alert("Nom : " + nom + "\nPrénom : " + prenom + "\nHobbies : " + h);
    }

    profil("Sow", "Anna");
    profil("Sow", "Anna", "Roblox");
    */

/* ============================================================
===================== FIN EXEMPLE 7 ======================== */



/* ============================================================
    EXEMPLE 8 — Math.max() & SPREAD 
   ============================================================

    /*
    let tb1 = [3, 5, 1, 32];
    let tb2 = [64, -5, 17];

    alert(Math.max(...tb1));
    alert(Math.max(...tb1, ...tb2));
    */

/* ============================================================
===================== FIN EXEMPLE 8 ======================== */



/* ============================================================
    EXEMPLE 9 — PORTÉE DES VARIABLES 
   ============================================================

    /*
    let x = 5;

    function portee1() {
        let y = 10;
        alert(x + y);
    }

    function portee2() {
        let x = 100;
        alert(x);
    }

    portee1();
    x = 20;
    portee1();
    portee2();
    */

/* ============================================================
===================== FIN EXEMPLE 9 ======================== */



/* ============================================================
    EXEMPLE 10 — CLOSURES 
   ============================================================

    /*
    function compteur() {
        let cont = 0;
        return function () {
            return cont++;
        };
    }

    let plusUn = compteur();

    alert(plusUn());
    alert(plusUn());
    alert(plusUn());
    */

/* ============================================================
===================== FIN EXEMPLE 10 ======================== */



/* ============================================================
    EXEMPLE 11 — PROMESSES ET CHARGEMENT DE SCRIPTS 
   ============================================================

    /*
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            let script = document.createElement("script");
            script.src = src;
            document.head.append(script);

            script.onload = () => resolve("Fichier " + src + " bien chargé");
            script.onerror = () => reject("Échec de chargement de " + src);
        });
    }

    loadScript("boucle.js").then(
        result => alert(result),
        error => alert(error)
    );

    loadScript("script2.js").then(
        result => alert(result),
        error => alert(error)
    );
    */

/* ============================================================
===================== FIN EXEMPLE 11 ======================== */

