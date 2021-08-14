const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI"); //Siempre en mayuscula
const textoDelItem = document.createTextNode("Texto de la lista")

console.log(item);
console.log(textoDelItem);

item.appendChild(textoDelItem); //Funcion del padre que toma como parametro al hijo
console.log(item);

contenedor.appendChild(item);

/////////////////////////////////////////////////////////////////////////////////

const fragmento = document.createDocumentFragment(); //Mejoramos el rendimiento de la iteración

for (i = 0; i < 20; i++) {
    let item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);
