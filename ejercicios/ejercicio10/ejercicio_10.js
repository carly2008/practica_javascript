/**
 * Ejercicio 10.
 * Declara dos variables numéricas, edad y experiencia. Crea otra booleana. Si la edad es mayor o
 * igual a 18 y la experiencia mayor a 5, la variable booleana será “true”. De lo contrario, “false”.
 * Muestra un mensaje que diga “Acceso concedido” en caso positivo. Si no, muestra “Acceso
 * denegado”.
 */

let age = parseInt(prompt('Dame tu edad'))
let experiencia = parseInt(prompt('Dame tus años de experiencia'))

let Acceso = false


if (age >= 18 && experiencia >=5){
    Acceso = true
}

if(Acceso){
    alert('Acceso concedido')
}else if(!Acceso){
    alert('Acceso denegado')
}