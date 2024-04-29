//Este fue relativamente sencillo, lo que no recordaba fue el return y es lo que hacia que no funcionara, porque no tengo claro en que momentos es que se usa y cuales no, pero luego de leer vi que eso era lo que faltaba y al final si funciono

function calcularAreaTriangulo(base, altura) {
    const area = (base * altura) / 2;
    return area;
}

const base = parseFloat(prompt("Ingresa la base del triángulo:"));
const altura = parseFloat(prompt("Ingresa la altura del triángulo:"));

const areaTriangulo = calcularAreaTriangulo(base, altura);

alert(`El área del triángulo con base ${base} y altura ${altura} es: ${areaTriangulo}`);
console.log(`El área del triángulo con base ${base} y altura ${altura} es: ${areaTriangulo}`);
