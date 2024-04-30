//En este busque como se podia hacer para generar lo del numero random del 1 al 10, ya que aunque en clase vimos como generar uno random, no sabia como hacerlo entre numeros en especifico, y el como especificar como el while solo funcione cuando sea verdadero.


const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let suposicionUsuario;
while (true) {
    suposicionUsuario = parseInt(prompt("Adivina el número (entre 1 y 10):"));

    if (suposicionUsuario === numeroAleatorio) {
        console.log("¡Felicitaciones! ¡Adivinaste el número correctamente!");
        alert("¡Felicitaciones! ¡Adivinaste el número correctamente!");
        break; 
    } else if (suposicionUsuario < numeroAleatorio) {
        alert("La suposición es demasiado baja. Inténtalo de nuevo.");
        console.log("La suposición es demasiado baja. Inténtalo de nuevo.");
    } else {
        alert("La suposición es demasiado baja. Inténtalo de nuevo.");
        console.log("La suposición es demasiado alta. Inténtalo de nuevo.");
    }
}



