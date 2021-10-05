class Film{

    constructor (nev, rendezo, ev) {
        this.nev = nev;
        this.rendezo = rendezo;
        this.ev = ev;
    }

    toString() {
        return this.nev + " " + this.rendezo + " " + this.ev;
    }

    getNev() {
        return this.nev;
    }

    getRendezo() {
        return this.rendezo;
    }

    getEv() {
        return this.ev;
    }
}

var adatok = []

function hozzaad() {
    let nev = document.getElementById('filmNev').value;
    let rendezo = document.getElementById('filmRendezo').value;
    let ev = document.getElementById('filmEv').value;

    let adat = new Film(nev, rendezo, ev);

    adatok.push(adat)

    document.getElementById('filmNev').value = "";
    document.getElementById('filmRendezo').value = "";
    document.getElementById('filmEv').value = "";
}

function listaz() {
    var writeTo = document.getElementById('tabla')
    var table = document.createElement('table');

    var tr = document.createElement('tr');

    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');

    var text1 = document.createTextNode("Film címe");
    var text2 = document.createTextNode("Rendező neve");
    var text3 = document.createTextNode("Film kiadási éve");

    th1.appendChild(text1);
    th2.appendChild(text2);
    th3.appendChild(text3);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);

    table.appendChild(tr);
    
    for (var i = 0; i < adatok.length; i++){
        var tr = document.createElement('tr');   
    
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');

        var text1 = document.createTextNode(adatok[i].getNev());
        var text2 = document.createTextNode(adatok[i].getRendezo());
        var text3 = document.createTextNode(adatok[i].getEv());

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    
        table.appendChild(tr);
    }
    writeTo.appendChild(table);
}