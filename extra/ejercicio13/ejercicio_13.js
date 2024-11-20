/**
 * Realiza una función que reciba un número como parámetro y que luego escriba una pirámide
 * del 1 a ese número de la siguiente forma:
 * 1
 * 22
 * 333
 */

let n = parseInt(prompt('Dame el numero de filas de tu piramide'))

for(let i = 1; i<=n ;i++){
    document.write(i +`${i}`*i)
    document.write("<br>")
}