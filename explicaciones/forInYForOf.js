let animales = ["Gato", "Perro", "Cotorra"];

for(animal in animales) {         // Este muestra las posiciones
    console.log(animal);
}

console.log()

for(animal of animales) {         // Este muestra los elementos
    console.log(animal);
}