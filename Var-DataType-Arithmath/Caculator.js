function Addition() {
    let x = document.forms["caculator"]['a'].value;
    let y = document.forms["caculator"]['b'].value;
    let a = parseInt(x);
    let b = parseInt(y);
    let z = a + b ;
    document.getElementById('result').innerHTML = z ;
}
function Subtraction() {
    let x = document.forms["caculator"]['a'].value;
    let y = document.forms["caculator"]['b'].value;
    let a = parseInt(x);
    let b = parseInt(y);
    let z = a - b ;
    document.getElementById('result').innerHTML = z;
}
function Multiplication() {
    let x = document.forms["caculator"]['a'].value;
    let y = document.forms["caculator"]['b'].value;
    let a = parseInt(x);
    let b = parseInt(y);
    let z = a * b ;
    document.getElementById('result').innerHTML = z;
}
function Division() {
    let x = document.forms["caculator"]['a'].value;
    let y = document.forms["caculator"]['b'].value;
    let a = parseInt(x);
    let b = parseInt(y);
    let z = a / b ;
    document.getElementById('result').innerHTML = z;
}
