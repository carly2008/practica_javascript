/*
Ejercicio 25.
Pide al usuario que introduzca el número de aficiones que tiene. Usa un bucle for para solicitar
cada afición y almacenarla en un array. Finalmente muestra todas las aficiones con un único
alert.
*/
let aficiones = parseInt(prompt('Cuantas aficiones tienes'))
let afi=[]
for(let i = 0;i<aficiones;i++){
    let aficion = prompt('dame tu aficion')
    afi[i]=aficion
    console.log(afi[i])
}
alert(afi)