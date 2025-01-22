let questions = []; // Almacenará las preguntas del quiz
let currentQuestionIndex = 0;
let score = 0;
let timer; // Para la cuenta atrás

// Obtén las preguntas desde Google Sheets
async function fetchQuestions() {
  const sheetId = '1M1xFqxDGPi3WiN-n6TnVFmhTTsBL7Mj0sSLePySPNBw';
  const range = 'Questions!A2:I'; // Ajusta el rango según tus datos
  const apiKey = localStorage.getItem("API_KEY_SHEETS");
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

 if (!apiKey) {
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
