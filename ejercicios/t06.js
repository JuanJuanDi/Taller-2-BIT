
//Esta solucion la hice luego de buscar mas posibilidades para hacerlo, y aunque funciona correctamente, no tengo muy claro como funciona o como puede ser usado el nombreCompleto.replace(/\s/g, '').length


const nombreCompleto = prompt("Ingresa tus nombres y apellidos completos:");
const cantidadCaracteres = nombreCompleto.replace(/\s/g, '').length;
console.log(`La cantidad de caracteres en tus nombres y apellidos completos es: ${cantidadCaracteres}`);

//
//


//Esta solucion la hice siguien ejercicios anteriores que hemos realizado en clase

/**const nombreCompleto = prompt("Ingresa tus nombres y apellidos completos:");
let cantidadCaracteres = 0;
for (let i = 0; i < nombreCompleto.length; i++) {
    if (nombreCompleto[i] !== ' ') {
        cantidadCaracteres++;
    }
}

console.log(`La cantidad de caracteres en tus nombres y apellidos completos es: ${cantidadCaracteres}`); */
