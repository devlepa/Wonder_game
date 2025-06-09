let points = 0;
let discountClaimed = false; // Para controlar si el descuento ya ha sido redimido

// Array con las imágenes de los zapatos y sus respuestas correctas
const shoes = [
    { name: "zapato café niño", type: "niño" },
    { name: "zapato rosado niña", type: "niña" },
    { name: "zapato azul oscuro niño", type: "niño" },
    { name: "zapato azul niña", type: "niña" },
    // Puedes añadir más zapatos aquí si es necesario
];

// Función para generar las preguntas
function generateQuestions() {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas imágenes

    // Mezclar las imágenes aleatoriamente
    const shuffledShoes = shuffleArray(shoes);

    // Crear una imagen por cada zapato
    shuffledShoes.forEach((shoe, index) => {
        const img = document.createElement("img");
        img.classList.add("product");
        img.src = `assets/${shoe.name}.png`;
        img.alt = shoe.name;
        img.onclick = () => handleProductClick(shoe, index);
        productContainer.appendChild(img);
    });
}

// Función para manejar los clics en las imágenes
function handleProductClick(shoe, index) {
    const correctAnswer = shoe.type; // Respuesta correcta: "niña" o "niño"
    const userAnswer = prompt("¿Es este calzado para niña o niño?");

    if (userAnswer.toLowerCase() === correctAnswer) {
        points += 1; // Incrementar puntos por respuesta correcta
        document.getElementById('points').textContent = points;
        showFeedback("¡Acierto! Sigue así para ganar un descuento.");
    } else {
        showFeedback("¡Oops! Intenta de nuevo.");
    }

    // Verificar si el jugador ha alcanzado 4 puntos
    if (points >= 4 && !discountClaimed) {
        showDiscount();
    }
}

// Función para mostrar el mensaje de feedback
function showFeedback(message) {
    document.getElementById('feedback').textContent = message;
}

// Función para mostrar el mensaje de descuento cuando se alcanzan los 4 puntos
function showDiscount() {
    const discountMessage = "¡Felicidades! Has ganado un 20% de descuento en la compra de calzado. Usa el código: WONDERS20 al finalizar la compra.";
    document.getElementById('feedback').textContent = discountMessage;
    discountClaimed = true; // Marcar descuento como redimido
}

// Función para mezclar un array (utilizada para mezclar las imágenes de zapatos)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
    return array;
}

// Función para reiniciar el juego
function resetGame() {
    points = 0; // Reinicia los puntos
    document.getElementById('points').textContent = points; // Resetea el puntaje en la interfaz
    document.getElementById('feedback').textContent = ''; // Limpia el mensaje de feedback
    discountClaimed = false; // Reinicia el estado de descuento
    generateQuestions(); // Generar las preguntas nuevamente
}

// Iniciar el juego cargando las preguntas
generateQuestions();
