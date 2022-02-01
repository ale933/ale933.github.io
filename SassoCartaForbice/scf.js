////////
////////


var namee = window.prompt("Inserire Nome");

document.getElementById('welcome').innerHTML = `Benvenuto ${namee}`;

function sasso() {
    var a = ["Sasso", "Carta", "Forbice"];

    var b = Math.floor(Math.random() * 3);

    var sceltaCPU = a[b];

    var sceltaUtente;
    
    sceltaUtente = "Sasso";

    if (sceltaUtente == sceltaCPU) {
        alert("Riprovare!")
    }

    if (sceltaUtente == "Sasso" && sceltaCPU == "Forbice") {
        alert(`${namee} Vince!`)
    }
    
    if (sceltaUtente == "Sasso" && sceltaCPU == "Carta") {
        alert("CPU Vince!")
    }

}

function carta() {
    var a = ["Sasso", "Carta", "Forbice"];

    var b = Math.floor(Math.random() * 3);
    
    var sceltaCPU = a[b];

    var sceltaUtente;

    sceltaUtente = "Carta";

    if (sceltaUtente == sceltaCPU) {
        alert("Riprovare!")
    }

    if (sceltaUtente == "Carta" && sceltaCPU == "Sasso") {
        alert(`${namee} Vince!`)
    }
    
    if (sceltaUtente == "Carta" && sceltaCPU == "Forbice") {
        alert("CPU Vince!")
    }
}

function forbice() {
    var a = ["Sasso", "Carta", "Forbice"];

    var b = Math.floor(Math.random() * 3);
    
    var sceltaCPU = a[b];

    var sceltaUtente;
    
    sceltaUtente = "Forbice";

    if (sceltaUtente == sceltaCPU) {
        alert("Riprovare!")
    }

    if (sceltaUtente == "Forbice" && sceltaCPU == "Carta") {
        alert(`${namee} Vince!`)
    }

    if (sceltaUtente == "Forbice" && sceltaCPU == "Sasso") {
        alert("CPU Vince!")
    }
}

