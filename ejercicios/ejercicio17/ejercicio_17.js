/**
 * Ejercicio 17.
 * Descuento para Clientes: Declara dos variables: es_cliente y compra_minima. Otorga un
 * descuento solo si la persona es cliente habitual y su compra supera los 50 euros. Estos datos los
 * introduce el usuario. Muestra un mensaje apropiado según el caso.
 */

let esCliente = false
let compraMinima = 50

let cliente = prompt('¿Eres cliente habitual?')
if (cliente.toLowerCase() === 'si'){
    esCliente = true
}
let compra = parseInt(prompt('Cual es el precio de tu compra'))

if (esCliente && compra > compraMinima){
    alert('Eres valido para el descuento')
}else{
    alert('No podras tener el descuento')
}
