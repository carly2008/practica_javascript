/**
 * Ejercicio 29
 * Solicita al usuario que introduzca una palabra o frase corta. Usa un bucle for para invertir el texto
 * ingresado, que deben introducir en una nueva string. Muestra el texto invertido con una
 * ventana única, mostrando todo el texto invertido.
 */

let userWord = prompt('Dame una palabra o frase corta')

let newWord = ''

for (let i = userWord.length - 1; i >= 0; i--) {
    newWord += userWord[i]
}
alert(newWord)