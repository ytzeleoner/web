// Configuración
import { SHEET_ID, API_KEY, USERS_RANGE } from './config.js';

// Elementos del DOM
const userSelect = document.getElementById('userSelect');
const userPreview = document.getElementById('userPreview');
const userName = document.getElementById('userName');
const userAvatar = document.getElementById('userAvatar');
const userLevel = document.getElementById('userLevel');
const userPoints = document.getElementById('userPoints');
const startButton = document.getElementById('startButton');

// Variable para almacenar usuarios
let users = [];

// Cargar usuarios al iniciar
document.addEventListener('DOMContentLoaded', loadUsers);

async function loadUsers() {
    try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${USERS_RANGE}?key=${API_KEY}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Error al cargar usuarios');
        }
        
        const data = await response.json();
        users = data.values.map(user => ({
            id: user[0],
            nombre: user[1],
            avatar: user[2],
            nivel: user[3],
            puntos: user[4]
        }));
        
        populateUserSelect();
    } catch (error) {
        console.error('Error:', error);
        // Fallback: cargar desde localStorage si hay datos guardados
        const cachedUsers = localStorage.getItem('cachedUsers');
        if (cachedUsers) {
            users = JSON.parse(cachedUsers);
            populateUserSelect();
        }
    }
}

function populateUserSelect() {
    userSelect.innerHTML = '<option value="">-- Selecciona un usuario --</option>';
    
    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.nombre;
        userSelect.appendChild(option);
    });
    
    // Guardar en cache
    localStorage.setItem('cachedUsers', JSON.stringify(users));
}

// Evento para mostrar vista previa del usuario
userSelect.addEventListener('change', function() {
    const userId = this.value;
    
    if (!userId) {
        userPreview.style.display = 'none';
        startButton.disabled = true;
        return;
    }
    
    const selectedUser = users.find(user => user.id === userId);
    
    if (selectedUser) {
        // Mostrar información del usuario
        userName.textContent = selectedUser.nombre;
        userLevel.textContent = selectedUser.nivel;
        userPoints.textContent = selectedUser.puntos;
        
        // Manejar avatar (usar default si no hay)
        userAvatar.src = selectedUser.avatar || 'default-avatar.png';
        
        userPreview.style.display = 'block';
        startButton.disabled = false;
        
        // Guardar usuario seleccionado para la siguiente página
        localStorage.setItem('selectedUser', JSON.stringify(selectedUser));
    }
});

// Evento para ir a preguntas
startButton.addEventListener('click', function() {
    window.location.href = 'questions.html';
});