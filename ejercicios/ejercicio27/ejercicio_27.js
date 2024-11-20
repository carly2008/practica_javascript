/**
 * Ejercicio 27
 * Introduce en una variable tus 5 grupos de música favorito. Pide al usuario que introduzca un
 * grupo a su elección. Usa un bucle while para que el usuario deba seguir intentándolo hasta que
 * el grupo coincida con uno de los introducidos por ti. Acompaña el programa con frases para
 * indicar al usuario sus pasos.
 */
let gruposFavoritos = ["Muse", "Coldplay", "Radiohead", "Arctic Monkeys", "Imagine Dragons"]

alert("¡Bienvenido! Adivina uno de mis grupos de música favoritos.")

let grupoUsuario

let acertado = false

while (!acertado) {
    grupoUsuario = prompt("Introduce el nombre de un grupo de música:")

    for (let i = 0; i < gruposFavoritos.length; i++) {
        if (grupoUsuario === gruposFavoritos[i] && !acertado) {
            acertado = true
        }
    }

    if (acertado) {
        alert(`¡Correcto! ${grupoUsuario} es uno de mis grupos favoritos.`)
    } else {
        alert("No es uno de mis favoritos. Inténtalo de nuevo.")
    }
}
