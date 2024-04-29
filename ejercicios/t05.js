function realizarOperacion(num1, num2, operacion) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
                return num1 / num2;

}

const numero1 = prompt("Ingrese el primer número:");
const operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /):");
const numero2 = prompt("Ingrese el segundo número:");

alert(`El resultado de es: ${resultado}`);
console.log(`El resultado de es: ${resultado}`);


/**
 *Revise que son switch se podia realizar ese proceso y usando el case pero al hacerlo, me dice que no funciona y no se que es lo que puede fallar :(
 */

