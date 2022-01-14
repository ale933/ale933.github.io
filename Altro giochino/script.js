console.log("sesso");

var scoree = 1;




function pene() {
    var randomTop = Math.floor(Math.random() * 480);
    var randomLeft = Math.floor(Math.random() * 100);
    document.getElementById('block').style.top = `${randomTop}px`;
    document.getElementById('block').style.left = `${randomLeft}%`;
    document.getElementById('score').innerHTML = 'Score: ' + scoree++;
}