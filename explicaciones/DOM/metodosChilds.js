const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P");
const h2Nuevo = document.createElement("H2");
h2Nuevo.innerHTML = "Titulo"

const h2antiguo = document.querySelector(".h2")

contenedor.replaceChild(h2Nuevo, h2antiguo);

contenedor.removeChild(h2Nuevo);

let respuesta = contenedor.hasChildNodes();
if (respuesta) {
    document.write("El elemento tiene hijos");
} else {
    document.write("El elemento NO tiene hijos")
}


console.log(contenedor.parentElement); //Muestra el padre del elemento