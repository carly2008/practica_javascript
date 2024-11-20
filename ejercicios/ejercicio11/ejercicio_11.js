/**
 * Ejercicio 11.
 * Declara una variable contraseña inicializada por ti, y otra variable intento, cuyo valor es
 * introducido por el usuario. Si ambas son iguales, muestra “Acceso permitido”; si no, muestra
 * “Contraseña incorrecta”. Además, añade una variable booleana que guarde el resultado.
 */

let password = "hello123world",
  intento = prompt("Dame la contraseña"),
  Acceso = false;

if (password == intento) {
  alert("Acceso permitido"), (Acceso = true);
} else {
  alert("Acceso denegado");
}
console.log(Acceso);
