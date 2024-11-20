/**
 * Preguntar un número al usuario y devolver la suma de todos los números naturales hasta llegar
 * al dígito dado
 */
let n1 = parseInt(prompt('Dame un numero'))
let n2 = parseInt(prompt('Dame otro numero'))

let suma = n1 + n2

let nFinal = 0

for (let i = 0; i <= suma; i++) {
    nFinal = nFinal + i
}

alert(nFinal)