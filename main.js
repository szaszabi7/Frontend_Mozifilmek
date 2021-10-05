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

    var tablazat = document.getElementById('tabla');
    var tableBody = document.getElementById('tablaAdatok');

    tablazat.style.display = "table";

    tableBody.innerHTML = "";

    for (let i = 0; i < adatok.length; i++) {
        let row = tableBody.insertRow();
        let td1 = row.insertCell();
        let text1 = document.createTextNode(adatok[i].getNev());
        td1.appendChild(text1);

        let td2 = row.insertCell();
        let text2 = document.createTextNode(adatok[i].getRendezo());
        td2.appendChild(text2);

        let td3 = row.insertCell();
        let text3 = document.createTextNode(adatok[i].getEv());
        td3.appendChild(text3);
    }
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tabla");
    switching = true;
    dir = "asc"; 
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }