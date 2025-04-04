import { SHEET_ID, API_KEY } from './config.js';


let questions = []; // Almacenará las preguntas del quiz
let currentQuestionIndex = 0;
let score = 0;
let timer; // Para la cuenta atrás




// Obtén las preguntas desde Google Sheets
async function fetchQuestions() {
  
  const range = 'Questions!A2:I'; // Ajusta el rango según tus datos
  
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${APIKEY}`;
  const response = await fetch(url);
  const data = await response.json();

 if (!APIKEY) {
	window.location.href="getAPIKey.html"
 }

  questions = data.values.map(row => ({
    question: row[1],
    image: row[2],
    options: [row[3], row[4], row[5], row[6]],
    correctAnswer: row[7],
    difficulty: row[8]
  }));
  loadQuestion();
}

// Carga la pregunta actual
function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    alert(`Quiz terminado. Puntuación final: ${score}`);
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById('question').textContent = currentQuestion.question;
  document.getElementById('question-image').src = currentQuestion.image || '';
  document.getElementById('question-image').style.display = currentQuestion.image ? 'block' : 'none';

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(String.fromCharCode(65 + index));
    optionsContainer.appendChild(button);
  });

  startTimer();
}

// Verifica si la respuesta es correcta
function checkAnswer(answer) {
  const currentQuestion = questions[currentQuestionIndex];
  if (answer === currentQuestion.correctAnswer) {
    score += 10; // Incrementa la puntuación
    document.getElementById('score').textContent = `Puntuación: ${score}`;
    alert('¡Correcto!');
  } else {
    alert('Incorrecto.');
  }
  document.getElementById('next').style.display = 'block'; // Muestra el botón "Siguiente"
  clearInterval(timer); // Detén el temporizador
}

// Carga la siguiente pregunta
function loadNextQuestion() {
  currentQuestionIndex++;
  document.getElementById('next').style.display = 'none';
  loadQuestion();
}

// Inicia un temporizador de cuenta atrás
function startTimer() {
  let timeLeft = 10;
  document.getElementById('countdown').textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('countdown').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert('¡Tiempo agotado!');
      document.getElementById('next').style.display = 'block';
    }
  }, 1000);
}

// Inicia el quiz

fetchQuestions();



async function saveAnswerToSheet(userId,questionId,points){
	
	const RANGE = 'Respuestas!A:D'
	const date= new Date().toISOString();
	const values= [
	[userId,questionId,points,date]	
	];
	
	const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;
  
  const body = {
    values: values,
    majorDimension: "ROWS"
  };
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    
    if (!response.ok) {
      throw new Error('Error al guardar');
    }
    
    console.log('Respuesta guardada exitosamente');
    return true;
  } catch (error) {
    console.error('Error:', error);
    // Fallback: Guardar en localStorage para enviar luego
    saveToLocalStorage({ userId, questionId, isCorrect, date });
    return false;
  }
	
}



// Cargar usuario seleccionado
document.addEventListener('DOMContentLoaded', function() {
    const selectedUser = JSON.parse(localStorage.getItem('selectedUser'));
    
    if (selectedUser) {
        // Mostrar información del usuario en el header
        document.getElementById('currentUserAvatar').src = selectedUser.avatar || 'default-avatar.png';
        document.getElementById('currentUserName').textContent = selectedUser.nombre;
        document.getElementById('currentUserLevel').textContent = selectedUser.nivel;
        document.getElementById('currentUserPoints').textContent = selectedUser.puntos;
    } else {
        // Si no hay usuario seleccionado, redirigir
        window.location.href = 'index.html';
    }
    
    // Aquí iría el código para cargar las preguntas
    // loadQuestions(selectedUser.id);
});
