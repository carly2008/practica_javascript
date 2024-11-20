/**
 * Ejercicio 13
 * Número Par o Impar: Declara una variable numérica cuyo valor es introducido por el usuario.
 * Usa el operador % para determinar si es par o impar. Muestra “Es par” o “Es impar” según el
 * caso.
 */

let num = parseInt(prompt('Dame un numero'))
if(num % 2 === 0){
    alert('El numero es Par')
}else if(num % 2 !== 0){
    alert('El numero es Impar')
}