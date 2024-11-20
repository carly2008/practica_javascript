/**Ejercicio 12.
 * Verificar Si Número Está en Rango: Declara una variable numérica cuyo valor es introducido por
 * el usuario. Verifica si está entre 1 y 100 (inclusive). Muestra “Número dentro del rango” si es
 * verdadero, o “Número fuera de rango” si no lo es. Además, añade una variable booleana que
 * guarde el resultado */

let num = parseInt(prompt('Dame un numero'))
let correct = false
if (num >= 1 && num <=100){
    alert('Numero aceptado')
    correct = true
}else{
    alert('Numero invalido')
}

console.log(correct)
