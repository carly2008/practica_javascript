/**
 * Ejercicio 16.
 * Condiciones de Entrada a un Club: Declara dos variables: edad (numérica) y membresia
 * (booleana). La entrada solo se permite si el usuario tiene al menos 18 años o si es miembro del
 * club. Estos datos los introduce el usuario. Muestra un mensaje apropiado según el caso.
 */

let age = parseInt(prompt('Dame tu edad'))
let membership = prompt('¿Tienes una membresia?')
if (membership.toLowerCase() === 'si'){
    membership = true
}else{
    membership = false
}

if (membership && age >= 18){
    alert('Acceso permitido')
}else{
    alert('Acceso denegado')
}

console.log(membership)