//este no supe como llegar a solucionarlo, vi varios ejemplos, voy a poner algunos que me parecieron interesantes para revisar, pero realmente no supe como resolverlo.

//
//ejemplo 1

function contarVocales(texto) {
    texto = texto.toLowerCase();
    
    let contadorVocales = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contadorVocales++;
        }
    }

    return contadorVocales;
}

const texto = prompt("Ingrese un string:");
const numeroVocales = contarVocales(texto);
console.log(`El número de vocales en el texto es: ${numeroVocales}`);

//
// ejemplo 2

function contarVocales(texto) {
    texto = texto.toLowerCase();
    
    let contadorVocales = 0;

    for (let i = 0; i < texto.length; i++) {
        if ('aeiou'.includes(texto[i])) {
            contadorVocales++;
        }
    }

    return contadorVocales;
}

const texto = prompt("Ingrese un string:");

const numeroVocales = contarVocales(texto);
console.log(`El número de vocales en el texto es: ${numeroVocales}`);
