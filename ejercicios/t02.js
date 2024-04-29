// Definimos el número para el cual generaremos la tabla de multiplicar

let numero = prompt("Ingresa el número que quieres multiplicar:");
for (let i = 1; i <= 20; i++) {
    let resultado = numero * i;
    console.log(numero + ' * ' + i + " = " + resultado);
}


/**
 * En este tuve que buscar como hacer la iteracion de la multiplicacion (i <= 10) porque no entendia como organizarlo para que puediera hacer la multiplicacion.
 */