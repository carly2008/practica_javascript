/**
 * Ejercicio 2.
 * Preguntar al usuario qué operación quiere hacer, que introduzca dos números y realizarla con
 * funciones.
 */

function suma(a,b){return a + b}
function resta(a,b){return a - b}
function mutiplicacion(a,b){return a * b}
function division(a,b){return a/b}
function potencia(a,b){return a**b}
function raiz(a,b){return a**(1/b)}

function factorial(a,b){
    let nFactor = suma(a,b)
    let resultado = 1
    for(let i = 1; i <= nFactor ; i++){
        resultado = resultado * i
    }   
    return resultado
}

let n1 = parseInt(prompt('Dame el primer numero'))
let n2 = parseInt(prompt('Dame el segundo numero'))

let eleccion = parseInt(prompt('Que operacion quieres usar:\n suma[1],\n resta[2],\n multiplicacion[3],\n division[4],\n potencia[5]\n raiz[6]\n factorial[7]'))

let nFinal = 0

if (eleccion === 1){
    nFinal = suma(n1,n2)
}else if (eleccion === 2){
    nFinal = resta(n1,n2)
}else if (eleccion === 3){
    nFinal = mutiplicacion(n1,n2)
}else if (eleccion === 4){
    nFinal = division(n1,n2)
}else if (eleccion === 5){
    nFinal = potencia(n1,n2)
}else if (eleccion === 6){
    nFinal = raiz(n1,n2)
}else if(eleccion === 7){
    nFinal = factorial(n1,n2)
}

alert('El resultado es: '+ nFinal)
