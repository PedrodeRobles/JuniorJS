const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.firstChild;
const ultimoHijo = contenedor.lastChild;


console.log(primerHijo); //Se muestra #text en la consola porque entre </div> y <h2> hay espacion basico que son tomados como texto
console.log(ultimoHijo);


const primerElementoHijo = contenedor.firstElementChild;  //No toma el espacio como texto
console.log(primerElementoHijo);

const hijos = contenedor.childNodes;   //Muestra todos los hijos
console.log(hijos);   // No es un array!!!
hijos.forEach(hijo => console.log(hijo));  //Se recorren los nodos 

const elementosHijos = contenedor.children;
console.log(elementosHijos); //Muestra los nodos sin los #text
for ( hijo of elementosHijos) {  //Recorremos elementosHijos
    console.log(hijo);
};