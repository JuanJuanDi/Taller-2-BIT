//Este si no le encontre el sentido a la logica, ya que tampoco recordaba que es un facotrial, pero bueno, busque un ejemplo de como hacerlo.



/**function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos";
    }
    else if (numero === 0) {
        return 1;
    }
    else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

const numero = 5;
const factorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${factorial}`);
 */