let correcto = false
let password = 'Hola mundo'
while (!correcto) {
    let userPassword = prompt('Introduce una contraseña')
    if (userPassword === password) {
        correcto = true
    } else {
        alert('Contraseña incorrecta')
    }
}
alert('Contraseña aceptada')