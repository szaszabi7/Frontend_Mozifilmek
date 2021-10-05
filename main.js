class Film{

    constructor (nev, rendezo, ev) {
        this.nev = nev;
        this.rendezo = rendezo;
        this.ev = ev;
    }
}

var adatok = []

function hozzaad() {
    let nev = document.getElementById('filmNev').value;
    let rendezo = document.getElementById('filmRendezo').value;
    let ev = document.getElementById('filmEv').value;

    let sor = new Film(nev, rendezo, ev);

    adatok.push(sor)

    document.getElementById('filmNev').value = "";
    document.getElementById('filmRendezo').value = "";
    document.getElementById('filmEv').value = "";
}