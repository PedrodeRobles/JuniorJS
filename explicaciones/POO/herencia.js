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
        this.raza = raza;
    }
    ladrar(){
        console.log("WAW! WAW!. Soy un  " + this.raza);
    }
}

const perro = new Perro("Perro", 8, "marron", "Doberman");
const gato = new Animal("Gato", 5, "negro");
const pajaro = new Animal("Loro", 3, "verde");

perro.ladrar();
gato.ladrar(); //Error porque la funcion ladrar no existe para el gato
pajaro.verInfo();

