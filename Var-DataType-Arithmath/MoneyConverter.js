function Convert() {
    let x = document.forms["moneycv"]['Money'].value;
    let R = x / 23000;
    document.getElementById('result').innerHTML = "Result: " + R + " VND";
}
