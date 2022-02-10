function nuevoPorcentaje(){
    let porcentaje = parseInt(document.querySelector("body > main > div > input[type=number]").value)
    calcularPorcentaje(porcentaje)
}

function calcularPorcentaje(numero) {
    const costo = document.getElementById("btnCalcular").value;
    const valor = (costo * (100 - numero)) / 100
    const resultado = document.getElementById("resultado");
    return resultado.innerHTML = valor;
}