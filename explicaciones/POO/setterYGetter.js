class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }
    
    verInfo(){          // Metodo, es una funcion dentro de una clase
        console.log(this.informacion);
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
    }
    set setRaza(newRaza){
        this.raza = newRaza;
    }
    get getRaza(){
        return this.raza
    }
}

const perro = new Perro("Perro", 8, "marron");
const gato = new Animal("Gato", 5, "negro");
const pajaro = new Animal("Loro", 3, "verde");

perro.setRaza = "Doberman";

console.log(perro.getRaza);

