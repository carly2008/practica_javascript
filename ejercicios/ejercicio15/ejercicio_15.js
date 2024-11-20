/**
 * Ejercicio 15.
 * Verificación de Múltiplos de 5: Declara una variable numérica cuyo valor es introducido por el
 * usuario. Usa el operador % para verificar si es múltiplo de 5. Muestra un mensaje que diga “Es
 * múltiplo de 5” o “No es múltiplo de 5”
 */

let userNumber = parseInt(prompt('Dame un numero'))

if (userNumber % 5 === 0) {
    alert(userNumber+' es multiplo de 5')
} else {
    alert(userNumber+' no es multiplo de 5')
}