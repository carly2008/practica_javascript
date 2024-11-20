let questions = [
    '¿Cuál es el símbolo químico del Hierro?',
    '¿Cuál de estas afirmaciones es falsa?',
    '¿Qué planeta es conocido como el planeta rojo?',
    '¿Qué lenguaje de programación se utiliza principalmente para desarrollo web?',
    '¿En qué año llegó el hombre a la Luna?',
    '¿Cuál es el número atómico del Oxígeno?',
    '¿Quién escribió "Don Quijote de la Mancha"?',
    '¿Qué es HTML?',
    '¿Cuál es la capital de Japón?',
    '¿Qué fenómeno natural es medido por la escala de Richter?'
];
let answers = [
    'a) Fe\n b) C\n c) O\n d) Br\n',
    'a) Python se inventó para crear IA\n b) JavaScript solo se puede usar junto con HTML\n c) HTML solo funciona en navegadores\n d) La programación es muy importante en tu día a día',
    'a) Marte\n b) Venus\n c) Júpiter\n d) Saturno\n',
    'a) C++\n b) Python\n c) Java\n d) JavaScript\n',
    'a) 1965\n b) 1969\n c) 1971\n d) 1980\n',
    'a) 6\nb) 7\nc) 8\nd) 9\n',
    'a) Gabriel García Márquez\n b) Miguel de Cervantes\n c) Pablo Neruda\n d) Federico García Lorca\n',
    'a) Un lenguaje de programación\n b) Un protocolo de red\n c) Un lenguaje de marcado para crear páginas web\n d) Un sistema operativo\n',
    'a) Beijing\n b) Seúl\n c) Tokio\n d) Bangkok\n',
    'a) Huracanes\n b) Sismos\n c) Tornados\n d) Tsunamis\n'
];
let tAnswers = ['a', 'b', 'a', 'd', 'b', 'c', 'b', 'c', 'c', 'b'];

let correctAnswers = 0;

if (questions.length === answers.length && answers.length === tAnswers.length) {
    alert('¡Bienvenido a este trivia de cultura popular! Comencemos.');

    for (let i = 0; i < questions.length; i++) {
        let usrAnswers = prompt(`Pregunta ${i + 1}:\n ${questions[i]}\n\n ${answers[i]}\n\n`).toLowerCase();
        if (usrAnswers === tAnswers[i]) {
            alert('¡Respuesta correcta!');
            correctAnswers++;
        } else {
            alert('Respuesta incorrecta.');
            correctAnswers--
        }
        console.log(correctAnswers)
    }

    if (correctAnswers >= questions.length / 2) {
        alert(`¡Has ganado! Has conseguido ${correctAnswers} de ${questions.length}.`);
    } else {
        alert(`Has perdido. Has conseguido ${correctAnswers} de ${questions.length}.`);
    }
} else {
    console.error('Preguntas no configuradas correctamente');
}


