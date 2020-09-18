var cantidadDolares = document.querySelector("#input__dolares").value
var resultadoPesos = document.querySelector("#input__pesos")
var fotoAlberto = document.querySelector(".hero__alberto")

function calculadora() {
    var cantidadDolares = document.querySelector("#input__dolares").value
    var resultadoPesos = document.querySelector("#input__pesos")

    resultadoFinal = ((cantidadDolares * 79.25) * 1.65).toFixed(2)

    var pesosNecesarios = resultadoPesos.setAttribute("value", resultadoFinal)

    fotoAlberto.classList.add("open")
}