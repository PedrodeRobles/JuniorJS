class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }
    
    verInfo(){                               // Metodo, es una funcion dentro de una clase
        console.log(this.informacion);
    }
}

const perro = new Animal("Perro", 8, "marron");
const gato = new Animal("Gato", 5, "negro");
const pajaro = new Animal("Loro", 3, "verde");


console.log(perro);
console.log(perro.color);

console.log(perro.informacion);
console.log(gato.informacion);
console.log(pajaro.informacion);
console.log()

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

