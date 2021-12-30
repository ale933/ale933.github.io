function budinoAlLatteConLeMacchie() {
    const data = new Date();

    var hours = data.getHours();
    var minutes = data.getMinutes();
    var seconds = data.getSeconds();

    var day = data.getDay();
    var dayy;

    var month = data.getMonth();
    var monthh;

    var year = data.getFullYear();

    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    // Day
    if (day == 1) {
        dayy = "Monday";
    }
    
    if (day == 2) {
        dayy = "Tuesday";
    }
    
    if (day == 3) {
        dayy = "Wednesday";
    }
    
    if (day == 4) {
        dayy = "Thursday";
    }
    
    if (day == 5) {
        dayy = "Friday";
    }
    
    if (day == 6) {
        dayy = "Saturday";
    }
    
    if (day == 7) {
        dayy = "Sunday";
    }
    //End day

    // Month
    if (month == 0) {
        monthh = "January";
    }

    if (month == 1) {
        monthh = "Febrary";
    }

    if (month == 2) {
        monthh = "March";
    }

    if (month == 3) {
        monthh = "April";
    }

    if (month == 4) {
        monthh = "May";
    }

    if (month == 5) {
        monthh = "June";
    }

    if (month == 6) {
        monthh = "July";
    }

    if (month == 7) {
        monthh = "August";
    }

    if (month == 8) {
        monthh = "September";
    }

    if (month == 9) {
        monthh = "October";
    }

    if (month == 10) {
        monthh = "November";
    }

    if (month == 11) {
        monthh = "December";
    }

    //End month


    document.getElementById('Clock').innerHTML = `${hours}:${minutes}:${seconds}`;
    document.getElementById('titlee').innerHTML = `Clock | ${hours}:${minutes}`;
    document.getElementById('Day').innerHTML = `Today is ${dayy}`;
    document.getElementById('Month').innerHTML = `${monthh}`;
    document.getElementById('Year').innerHTML = `${year}`;
}

setInterval(budinoAlLatteConLeMacchie, 500)