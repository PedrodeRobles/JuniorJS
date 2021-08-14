const titulo = document.querySelector(".titulo");

titulo.classList.add("grande"); //Agrega una clase, se ve en consola

const tituloPequeño = document.querySelector(".titulo2");

tituloPequeño.classList.remove("chico") //Remueve esa palabra del valor class

let valor = tituloPequeño.classList.item(2);
document.write(valor + "<br>");

let booleano = tituloPequeño.classList.contains("secundario");
document.write(booleano);
if (booleano) {
    document.write("La clase existe")
} else {
    document.write("La clase NO existe")
}

tituloPequeño.classList.toggle("pinguino"); // Si tiene la clase la saca y si no la tiene la agrega
tituloPequeño.classList.toggle("pinguino" , true); //Siempre la agrega

let titulo3 = document.querySelector(".titulo3");

titulo3.classList.replace("rojo", "azul"); //Se reemplazan
