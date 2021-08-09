class Calculadora {
    constructor(){
    }
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num,exp){
        return num**exp;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();


alert("¿Que operacion deseas realizar?")
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicación, 5: potenciación. 6: raíz cuadrada, 7: raíz cubica")

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar")
    let numero2 = prompt("Segundo numero para sumar")
    let resultado = calculadora.sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar")
    let numero2 = prompt("Segundo numero para restar")
    let resultado = calculadora.restar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if (operacion == 3) {
    let numero1 = prompt("Primer numero para dividir")
    let numero2 = prompt("Segundo numero para dividir")
    let resultado = calculadora.dividir(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar")
    let numero2 = prompt("Segundo numero para multiplicar")
    let resultado = calculadora.multiplicar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if (operacion == 5) {
    let numero1 = prompt("Número a potenciar")
    let numero2 = prompt("Exponente")
    let resultado = calculadora.potenciar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`)
}
else if (operacion == 6) {
    let numero = prompt("Raiz cuadrada de:")
    let resultado = calculadora.raizCuadrada(numero);
    alert(`Tu resultado es ${resultado}`)
}
else if (operacion == 7) {
    let numero = prompt("Raiz cubica de:")
    let resultado = calculadora.raizCubica(numero);
    alert(`Tu resultado es ${resultado}`)
}
else {
    alert("Esa operacion no existe")
}