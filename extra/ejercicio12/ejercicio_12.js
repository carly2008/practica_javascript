/**
 * Ejercicio 3.
 * Realiza una función que reciba una cadena de texto y la devuelva al revés. Es decir, si tecleo
 * “hola que tal” deberá mostrar “lat euq aloh”.
 */

let initString = prompt('Dame una cadna de texto')
let finalString = ''
for (let i = initString.length -1; i >= 0; i--) {
    finalString += initString[i] 
}
alert(finalString)