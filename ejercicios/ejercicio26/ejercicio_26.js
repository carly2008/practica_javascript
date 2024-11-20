/**
 * Ejercicio 26.
 * Realiza una tabla de multiplicar. Pide al usuario que introduzca su número favorito. Escribe un
 * código con un bucle for que genere la tabla de multiplicar de ese número. Muestra cada
 * resultado con una ventana, diciendo la frase completa. Por ejemplo: “2 por 6, 12”.
 */

let num = parseInt(prompt('Dame un numero'))

for(let i = 1;i<=10;i++){
    alert(`${i} * ${num} = ${i*num}`)
}