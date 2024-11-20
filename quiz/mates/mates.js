let questions = [
    '2+2',   
    '9^0',   
    '23+7',  
    '8-1',   
    '745*2', 
    '15/3',  
    '12+5*2',
    '100-45',
    '8^2',   
    '50/2+6' 
]

let tAnswers = [4,1,30,7,1490,5,22,55,64,31,]


let correctAnswers = 0

if (questions.length === tAnswers.length) {
    alert('¡Bienvenido a este trivia de Matematicas! Comencemos.')

    for (let i = 0; i < questions.length; i++) {
        let usrAnswers = parseInt(prompt(`Pregunta ${i + 1}:\n ${questions[i]}\n\n`))
        if (usrAnswers === tAnswers[i]) {
            alert('¡Respuesta correcta!')
            correctAnswers++
        } else {
            alert('Respuesta incorrecta.')
            correctAnswers--
        }
        console.log(correctAnswers)
    }

    if (correctAnswers >= questions.length / 2) {
        alert(`¡Has ganado! Has conseguido ${correctAnswers} de ${questions.length}.`)
    } else {
        alert(`Has perdido. Has conseguido ${correctAnswers} de ${questions.length}.`)
    }
} else {
    console.error('Preguntas no configuradas correctamente')
}


