function sayed() {
    var result;

    var result = document.getElementById("number1").value;

    if (result >= 80 && result <= 100) {
        document.getElementById("resultPrint").innerHTML = "Apni A+ paisen";
    } else if (result >= 70 && result < 80) {
        document.getElementById("resultPrint").innerHTML = "Apni A paisen";
    } else if (result >= 60 && result < 70) {
        document.getElementById("resultPrint").innerHTML = "Apni A- paisen";
    } else if (result >= 50 && result < 60) {
        document.getElementById("resultPrint").innerHTML = "Apni B paisen";
    } else if (result >= 40 && result < 50) {
        document.getElementById("resultPrint").innerHTML = "Apni C paisen";
    } else if (result >= 33 && result < 40) {
        document.getElementById("resultPrint").innerHTML = "Apni D paisen";
    } else if (result >= 0 && result < 33) {
        document.getElementById("resultPrint").innerHTML = "Apni Fail Korsen";
    } else {
        document.getElementById("resultPrint").innerHTML = "Please Input Valid Number";
    }

}