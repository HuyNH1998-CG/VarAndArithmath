function Addition() {
    let x = document.forms["caculator"]['a'].value;
    let y = document.forms["caculator"]['b'].value;
    let a = parseFloat(x);
    let b = parseFloat(y);
    let z = a + b ;
    document.getElementById('result').innerHTML = z ;
}
function Subtraction() {
    let x = document.forms["caculator"]['a'].value;
    let y = document.forms["caculator"]['b'].value;
    let a = parseFloat(x);
    let b = parseFloat(y);
    let z = a - b ;
    document.getElementById('result').innerHTML = z;
}
function Multiplication() {
    let x = document.forms["caculator"]['a'].value;
    let y = document.forms["caculator"]['b'].value;
    let a = parseFloat(x);
    let b = parseFloat(y);
    let z = a * b ;
    document.getElementById('result').innerHTML = z;
}
function Division() {
    let x = document.forms["caculator"]['a'].value;
    let y = document.forms["caculator"]['b'].value;
    let a = parseFloat(x);
    let b = parseFloat(y);
    let z = a / b ;
    document.getElementById('result').innerHTML = z;
}
