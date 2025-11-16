/* ============================================================
   EXEMPLE 1 — SYMBOLS
   ============================================================

    // Création de Symboles
    const symbole1 = Symbol();
    const symbole2 = Symbol('symbole2');
    const x42 = Symbol(42);
    const symbole3 = Symbol.for('symbole3');

    // Pour afficher le symbole (décommenter si nécessaire)
    // alert(symbole3.toString());

/* ============================================================
===================== FIN EXEMPLE 1 ======================== */



/* ============================================================
   EXEMPLE 2 — FONCTIONS GÉNÉRATRICES (GENERATORS)
   ============================================================

    function* generateSequence1() {
        yield 1;
        yield 2;
        yield 3;
    }

    function* generateSequence2() {
        yield 4;
        yield* generateSequence1();
        yield 5;
    }

    let generateur = generateSequence2();

    let quatre = generateur.next();
    let un = generateur.next();
    let deux = generateur.next();
    let trois = generateur.next();
    let cinq = generateur.next();
    let und = generateur.next();

    // Affichage des valeurs (décommenter si nécessaire)
    /*
    alert(
        quatre.value + '\n' +
        un.value + '\n' +
        deux.value + '\n' +
        trois.value + '\n' +
        cinq.value + '\n' +
        und.value
    );
    */

/* ============================================================
===================== FIN EXEMPLE 2 ======================== */



/* ============================================================
   EXEMPLE 3 — COOKIES
   ============================================================

    // Création et suppression de cookies
    /*
    document.cookie = 'user=Nereus';
    alert(document.cookie);

    let date = new Date(Date.now() + 86400000); // 1 jour
    date = date.toUTCString();

    document.cookie = 'user=Nereus; path=/; domain=nereus-sow.com; secure; expires=' + date;
    document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    */

/* ============================================================
===================== FIN EXEMPLE 3 ======================== */



/* ============================================================
   EXEMPLE 4 — INDEXEDDB
   ============================================================

    /*
    let ck = '';
    let openRequest = indexedDB.open('db', 1);

    openRequest.onupgradeneeded = function() {
        ck = openRequest.result;

        if (!ck.objectStoreNames.contains('users')) {
            ck.createObjectStore('users', { keyPath: 'id' });
        }
    };

    openRequest.onerror = function() {
        alert('Impossible d\'accéder à IndexedDB');
    };

    openRequest.onsuccess = function() {
        ck = openRequest.result;
        let transaction = ck.transaction('users', 'readwrite');

        transaction.oncomplete = function() {
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

        ajout.onsuccess = function() {
            alert('Utilisateur ajouté avec la clef ' + ajout.result);
        };

        ajout.onerror = function() {
            alert('Erreur : ' + ajout.error);
        };
    };
    */

/* ============================================================
===================== FIN EXEMPLE 4 ======================== */



/* ============================================================
   EXEMPLE 5 — CANVAS + RECTANGLES
   ============================================================

    // Rectangle vide
    /*
    let canvas = document.getElementById('c3');
    let ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#b31ccbff';
    ctx.strokeRect(50, 25, 200, 100);
    */

    // Rectangle plein
    /*
    let cnvs = document.getElementById('c3');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#cc4471ff';
    ctx.fillRect(50, 25, 200, 100);
    */

    // Plusieurs rectangles remplis et tracés
    /*
    let canvas = document.getElementById('c3');
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = '#b31ccbff';
    ctx.fillRect(50, 25, 200, 100);

    ctx.fillStyle = '#cc4471ff';
    ctx.fillRect(350, 25, 200, 100);

    ctx.strokeStyle = 'purple';
    ctx.strokeRect(50, 175, 200, 100);
    ctx.strokeRect(350, 175, 200, 100);
    */

/* ============================================================
===================== FIN EXEMPLE 5 ======================== */



/* ============================================================
   EXEMPLE 6 — CANVAS + TEXTE
   ============================================================

    /*
    let cnvs = document.getElementById('c3');
    let ctx = cnvs.getContext('2d');

    ctx.font = 'bold 10px Verdana, Arial, serif';
    ctx.strokeStyle = 'blue';
    ctx.strokeText('Texte creux', 25, 50);

    ctx.font = 'bold 20px Verdana, Arial, serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText('Texte plein', 150, 100);
    */

/* ============================================================
===================== FIN EXEMPLE 6 ======================== */
