/**
 * Ejercicio 28
 * Solicita al usuario que introduzca una palabra o frase corta. Usa un bucle for para invertir el texto
 * ingresado. Muestra el texto invertido con una ventana para cada letra
 */

let userWord = prompt('Dame una palabra o frase corta')

for (let i = userWord.length - 1; i >= 0; i--) {
    alert(userWord[i])
}
