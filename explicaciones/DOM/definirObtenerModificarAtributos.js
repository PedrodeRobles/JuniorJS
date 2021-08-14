const rangoEtario = document.querySelector(".rangoEtario");

rangoEtario.setAttribute("type", "number");  //Modificar atributos

const valorDelAtributo = rangoEtario.getAttribute("type"); //Obtengo el valor del atributo type

document.write(valorDelAtributo);

const eliminarAtributo = rangoEtario.removeAttribute("type");