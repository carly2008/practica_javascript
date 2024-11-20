/**
 * Ejercicio 24.
 * Solicita la fecha de nacimiento del usuario (solo el año). Escribe un programa que use un bucle
 * while para contar los años desde el nacimiento hasta el año actual. Muestra por pantalla cada
 * uno de esos años. Además, muestra al final los años que tiene el usuario.
 */

let actualYear = 2024
let birthYear= parseInt(prompt('Cual es tu año de nacimiento'))
while (birthYear !== actualYear+1) {
    alert(birthYear)
    birthYear++
}