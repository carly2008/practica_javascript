/**
 * Ejercicio 30
 * Usa un bucle while que se repita hasta que el usuario acierte un número pensado por ti, que sea
 * entero y que esté entre el 1 y el 100.
 */

let num = 69
let userNum
while (userNum !== num) {
    userNum = parseInt(prompt('Dame un numero entre el 1 y el 100'))
    if(1<=userNum <=100 && userNum === num){
        alert('Has acerado')
    }else{
        alert('Has fallado')
    }
}
