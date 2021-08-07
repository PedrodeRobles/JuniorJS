let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cual es tu edad?");
    if (edad >= 18) {
        if(time >= 2 && time < 7 && free == false) {
            alert(`Son las ${time}hs y sos la primer persona despuesde las 2AM, podes pasar GRATIS`);
            free = true;
        } else {
            alert(`Son las ${time}hs podes pasar, pero tenes que PAGAR la entrada`)
        }

    } else {
        alert("Sos menor de edad, no podes pasar")
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.3);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
