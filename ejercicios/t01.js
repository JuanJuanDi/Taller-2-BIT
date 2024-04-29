/**
 * Escribe un programa que tome dos números como variables y muestre cuál es el mayor de los dos.
 */

let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");

if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo.");
    alert("El primer número es mayor que el segundo.");

} else if (numero2 > numero1) {
    console.log("El segundo número es mayor que el primero.");
    alert("El segundo número es mayor que el primero.");

} else{
    console.log("Los dos números son iguales.");
    alert("Los dos números son iguales.");
}

/**
 *primero organice el else asi, pero no funcionaba ya que luego de decir si era igual o diferente, tambien aparecia que eran igual y no entiendo porque, lo dejo sin nada y si funciona :p
 * 
 * } else (numero1 === numero2); {
    console.log("Los dos números son iguales.");
    alert("Los dos números son iguales.");
}
 */


