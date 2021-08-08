class Celular{
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false
    }
    prenderApagar(){
        if (this.encendido == false){
            alert("Celular encendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }

    reiciniar(){
        if (this.encendido == true){
            alert("Reiniciando celular");
        } else {
            alert("El celular esta apagado, no se puede reiniciar")
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolucion de ${this.resolucionCamara}`)
    }
    grabarVideo(){
        alert(`Grabando video en ${this.resolucionCamara}`);
    }

    mostrarInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolucion de Video: <b>${this.resolucionCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>`
    }
    
}

class CelularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram);
        this.resolucionCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientofacial(){
        alert("Iniciando reconocimiento facial");
    }

    infoAltaGama(){
        return this.mostrarInfo() + `Resolucion de camara extra: <b>${this.resolucionCamaraExtra}</b> </br>`
    }
    
}

// const celular1 = new Celular("rojo", "150g", "5´", "HD", "1GB");
// const celular2 = new Celular("negro", "155g", "5.4´", "Full HD", "2GB");
// const celular3 = new Celular("blanco", "146g", "5.9´", "Full HD", "2GB");


// celular1.prenderApagar();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiciniar();
// celular1.prenderApagar();
// celular1.prenderApagar();

const celular1 = new CelularAltaGama("Rojo", "130g", "5.2´", "4K", "3GB", "HD");
const celular2 = new CelularAltaGama("Negro", "142g", "6´", "4K", "4GB", "Full HD");


document.write(`
    ${celular1.infoAltaGama()} <br>
    ${celular2.infoAltaGama()} <br>
`)



