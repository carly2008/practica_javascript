/**
 * Ejercicio 18.
 * Requisitos para Unirse a un Curso Avanzado: Declara dos variables: nota_previa y experiencia.
 * Permite la inscripción si la nota_previa es superior a 8 o si tienen más de un año de experiencia.
 * Estos datos los introduce el usuario. Muestra un mensaje apropiado según el caso.
 */

let nota_previa = parseInt(prompt('Dame tu nota previa'))
let experiencia = parseInt(prompt('Dame tu experiencia previa'))

if (nota_previa >=8 || experiencia >= 1){
    alert('Puedes apuntarte al Curso Avanzado')
}else{
    alert('No te puedes apuntar al Curso Avanzado')
}
