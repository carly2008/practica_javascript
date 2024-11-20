/**
 * Ejercicio 22.
 * Pide al usuario un número. Muestra por pantalla, en orden inverso y con una ventana para cada
 * número, todos los números enteros desde el introducido por el usuario hasta el cero.
 */

let userNum= parseInt(prompt('Dame un numero'))

for(let i = 0;i<=userNum;i++){
    alert(userNum-i)
}