const respu = document.getElementById("respu");

function suma() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    let respuesta = parseInt(num1) + parseInt(num2);
    respu.innerHTML = respuesta
};
function resta() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    let respuesta = num1 - num2;
    respu.innerHTML = respuesta
};
function multiplicacion() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    let respuesta = num1 * num2;
    respu.innerHTML = respuesta
};
function division() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    let respuesta = num1/num2;
    respu.innerHTML = respuesta
};
