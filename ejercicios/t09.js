//Este no lo supe como resolver, mas que todo el principio no supe como orgnizar la logica de la idea para hacerlo, luego de ver algunos ejemplos del ejercicio, pues ya se puede ver ya mas claro y se entiende bien, pero desde 0 si no supe como hacerlo.


function generarListaAleatoria(longitud, min, max) {
    const lista = [];
    for (let i = 0; i < longitud; i++) {
        lista.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return lista;
}

function eliminarPares(lista) {
    return lista.filter(numero => numero % 2 !== 0);
}

const listaAleatoria = generarListaAleatoria(10, 1, 100);
console.log("Lista aleatoria original:", listaAleatoria);

const listaSinPares = eliminarPares(listaAleatoria);
console.log("Lista sin números pares:", listaSinPares);
