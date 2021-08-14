const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable", "true"); //Se puede podificar el Texto
titulo.setAttribute("dir", "ltr");  //rtl: rigth to left
titulo.setAttribute("hidden", "true"); //Esconde el contenido
titulo.removeAttribute("hidden");
titulo.setAttribute("tabindex", "0")
titulo.setAttribute("title", "Mostrar informacion");


const input = document.querySelector(".input-normal");

document.write(input.className + "<br>"); // Muestra el nombre de la clase
document.write(input.value + "<br>");
document.write(input.type = "file");
input.accept = "image/png";

const input2 = document.querySelector(".input2");

input2.minLength = 4;    //Se pueden ingresar minimo 4 caracteres
input2.placeholder = "Escribir aqui";
input2.required = "required"; //Campo obligatorio