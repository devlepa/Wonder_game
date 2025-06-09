let points = 0;

// Función para iniciar el juego
function startGame() {
    document.getElementById('start-btn').disabled = true; // Desactivar el botón de inicio
    document.getElementById('mission').innerHTML = '<h2>¡Completa las misiones!</h2>';
    startMission();
}

// Función para empezar la misión
function startMission() {
    const missionText = 'Ayuda al personaje a elegir la ropa adecuada.';
    const task = `Selecciona los colores correctos para el conjunto (Ropa 1: Azul, Ropa 2: Rojo)`;
    
    document.getElementById('game-board').innerHTML = `
        <p>${missionText}</p>
        <p>${task}</p>
        <button id="clothing-1">Ropa Azul</button>
        <button id="clothing-2">Ropa Roja</button>
    `;

    // Agregar eventos a los botones
    document.getElementById('clothing-1').addEventListener('click', () => completeMission(true));
    document.getElementById('clothing-2').addEventListener('click', () => completeMission(false));
}

// Función para completar la misión
function completeMission(isCorrect) {
    if (isCorrect) {
        points += 10; // Aumentar puntos si la respuesta es correcta
        document.getElementById('points').textContent = points;
        alert('¡Misión completada! ¡Has ganado 10 puntos!');
    } else {
        alert('Misión fallida. ¡Intenta nuevamente!');
    }
    
    setTimeout(() => startMission(), 2000); // Esperar 2 segundos antes de iniciar otra misión
}

document.getElementById('start-btn').addEventListener('click', startGame);
