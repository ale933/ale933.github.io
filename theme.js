const data = new Date();
const hour = data.getHours();

//function theme() {

if (hour >= 21) {
    document.getElementById('sas').style.backgroundColor = '#083452';
    document.getElementById('sas').style.color = 'white';
}

else if (hour >= 18) {
    document.getElementById('sas').style.backgroundColor = '#0f598a';
    document.getElementById('sas').style.color = 'white';
}

else if (hour >= 06) {
    document.getElementById('sas').style.backgroundColor = '#1776b6';
    document.getElementById('sas').style.color = 'white';
}

else if (hour >= 0) {
    document.getElementById('sas').style.backgroundColor = '#021420';
    document.getElementById('sas').style.color = 'white';
}