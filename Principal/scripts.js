/* ============================================================
   EXEMPLE 1 — CHAÎNES DE CARACTÈRES
   ============================================================

    // Avec guillemets
    let dpt1 = "j'habite à Amiens";
    // Avec apostrophes et anti-slash
    let dpt2 = 'j\'habite à Amiens';

    // Affichage de test
    // alert("affiche le résultat");

/* ============================================================
===================== FIN EXEMPLE 1 ======================== */



/* ============================================================
   EXEMPLE 2 — OPÉRATEURS ET CALCULS
   ============================================================

    let a = 5, b = 2, c = 4;

    a += 2; // a = a + 2
    a -= 4; // a = a - 4
    b *= a;
    c *= b;

    // alert(a);

/* ============================================================
===================== FIN EXEMPLE 2 ======================== */



/* ============================================================
   EXEMPLE 3 — CONCATÉNATION
   ============================================================

    let prénom = "Bass", espace = ' ', nom = "SOW";
    let résultat = prénom + espace + nom;
    let toi = 'Aliou Sow';

    // alert("Contenu de la variable résultat est :" + résultat +
    //      "\nContenu de la variable toi est :" + toi);

    let x = 4 + 3 + "1"; // "71"
    let y = 5 + 2 + "1"; // "71"

    // alert("variable de x est de :" + x);
    // alert("variable de x est de :" + x + typeof(x) +
    //       "\nvariable de y est de :" + y + typeof(y));

/* ============================================================
===================== FIN EXEMPLE 3 ======================== */



/* ============================================================
   EXEMPLE 4 — CONDITIONS IF
   ============================================================

    let heure = 21;

    if (heure <= 10 == false) {
        // alert("Bonjour");
    } else if (heure == 12 == true) {
        // alert("il est midi");
    } else {
        // alert("c'est le matin");
    }

/* ============================================================
===================== FIN EXEMPLE 4 ======================== */



/* ============================================================
   EXEMPLE 5 — BOUCLES
   ============================================================

    let d = 0;
    while (d < 10) {
        // alert("d contient le valeur :" + d);
        d++;
    }

    for (let i = 0; i < 10; i++) {
        // alert("i contient la valeur de :" + i);
    }

/* ============================================================
===================== FIN EXEMPLE 5 ======================== */



/* ============================================================
   EXEMPLE 6 — FONCTIONS
   ============================================================

    function multiplication(x, y) {
        return x * y;
    }

    let resultat1 = multiplication(5, 10);
    resultat1 += 2;

    // alert(resultat1);

/* ============================================================
===================== FIN EXEMPLE 6 ======================== */



/* ============================================================
   EXEMPLE 7 — OBJETS PRIMITIFS ET LITTÉRAUX
   ============================================================

    let primitive = "Je suis une valeur primitive";

    let moi = {
        prenom: "Mary",
        nom: "Balde",
        age: 16,
        identite: function() {
            return 'Prénom : ' + this.prenom +
                   '\nNom : ' + this.nom +
                   '\nAge : ' + this.age;
        }
    };

    // alert(moi.identite());

/* ============================================================
===================== FIN EXEMPLE 7 ======================== */



/* ============================================================
   EXEMPLE 8 — OBJETS CONSTRUCTEURS
   ============================================================

    function identite(p, n, a) {
        this.prenom = p;
        this.nom = n;
        this.age = a;
    }

    let Bass = new identite("Bass", "Sow", 21);
    let Mary = new identite("Mary", "Balde", 16);

    // alert('Age de Bass: ' + Bass.age +
    //       '\nAge de Mary: ' + Mary.age);

/* ============================================================
===================== FIN EXEMPLE 8 ======================== */



/* ============================================================
   EXEMPLE 9 — MÉTHODES STRING
   ============================================================

    let texte = "je m'appelle Nereus";
    let texteMin = texte.toLocaleLowerCase();
    let texteMaj = texte.toUpperCase();

    // alert("texte de base :" + texte +
    //       "\ntexte en minuscules :" + texteMin +
    //       "\ntexte en majuscules :" + texteMaj);

    let js = "j'apprends le Javascript";
    // alert(js.replace("Javascript", "PHP"));

/* ============================================================
===================== FIN EXEMPLE 9 ======================== */
