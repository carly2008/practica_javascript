/**
 * Ejercicio 8.
 * Guarda en un array tus 3 ciudades favoritas, por orden. Pregunta al usuario qué número de
 * ciudad quieres que te muestre, y muéstrala después por pantalla.
 */

let city = ['Torrevieja','Potes','Valencia']

let i = parseInt(prompt('Dame un numero del 1 al 3 y te dare una ciudad'))

i = i - 1 
console.log(i)
alert(city[i])
