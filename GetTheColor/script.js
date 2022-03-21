/* My favorite colors that I've found out using this site */
const FAV_COLORS = ["#735095", "#8f6161", "#1993ff", "#be97d3", "fecc13", "#b4dbfe", "#e4c075", "#7551ff", "#be38f3", "#efa8f0", "#fffbbb", "#ff40ff", "#00fdff", "#4d22b3", "#9a244f", "#defabc", "#874efe", "#aa7942", "#5e30eb", "#0052ff", "#561029", "#d5ffa1", "#fff000", "#abcfed", "#ffde2f", "#88809a", "#2e073e", "#4e4384", "#ff81df"];
var a = {
    suca: false,
    sesso: true
}
console.log("Favorite colors: ");
console.log(FAV_COLORS);


function aaa() {
    // document.getElementById('inputColor').style.border = "1px " + document.getElementById('inputColor').value + " solid"; // // 
    document.getElementById('valueColor').innerHTML = document.getElementById('inputColor').value;
    document.getElementById('body').style.backgroundColor = document.getElementById('inputColor').value;
    
}
function aaaa() {
    document.getElementById('inputColor').value = document.getElementById('valueC').value;
    document.getElementById('body').style.backgroundColor = document.getElementById('valueC').value;
    document.getElementById('valueColor').innerHTML = document.getElementById('valueC').value;
}