function Convert() {
    let x = document.getElementById('Money').value;
    let inputcurrencyA = document.getElementById('A').value;
    let inputcurrencyB = document.getElementById('B').value;
    let a = inputcurrencyA;
    let b = inputcurrencyB;
    if ((a == 'VND') && (b == 'VND')) {
        let R = x
        document.getElementById('result').innerHTML = "Result: " + R + " VND";
    }
    if ((a == 'VND') && (b == 'USD')) {
        let R = x / 23000
        document.getElementById('result').innerHTML = "Result: " + R + " USD";
    }
    if ((a == 'VND') && (b == 'JPY')) {
        let R = x / 200;
        document.getElementById('result').innerHTML = "Result: " + R + " JPY";
    }
    if ((a == 'USD') && (b == 'VND')) {
        let R = x * 23000;
        document.getElementById('result').innerHTML = "Result: " + R + " VND";
    }
    if ((a == 'USD') && (b == 'USD')) {
        let R = x;
        document.getElementById('result').innerHTML = "Result: " + R + " USD";
    }
    if ((a == 'USD') && (b == 'JPY')) {
        let R = x * 100;
        document.getElementById('result').innerHTML = "Result: " + R + " JPY";
    }
    if ((a == 'JPY') && (b == 'VND')) {
        let R = x * 200;
        document.getElementById('result').innerHTML = "Result: " + R + " VND";
    }
    if ((a == 'JPY') && (b == 'USD')) {
        let R = x / 100;
        document.getElementById('result').innerHTML = "Result: " + R + " USD";
    }
    if ((a == 'JPY') && (b == 'JPY')) {
        let R = x;
        document.getElementById('result').innerHTML = "Result: " + R + " JPY";
    }
}
