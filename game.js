let points = 0;

// Array de respuestas correctas (en este caso, por ejemplo, el calzado adecuado es el 1)
const correctAnswers = [1, 3]; // Los IDs de los calzados correctos

// Función para manejar el clic en los productos
function handleProductClick(productId) {
    if (correctAnswers.includes(productId)) {
        points += 1; // Aumentar puntos por acierto
        document.getElementById('points').textContent = points;
        showFeedback("¡Acierto! Sigue así para ganar un descuento.");
    } else {
        showFeedback("¡Oops! Intenta de nuevo.");
    }

    if (points >= 5) {
        showDiscount();
    }
}

// Función para mostrar feedback después de una selección
function showFeedback(message) {
    document.getElementById('feedback').textContent = message;
}

// Función para mostrar el descuento cuando el usuario alcanza 5 puntos
function showDiscount() {
    const discountMessage = "¡Felicidades! Has ganado un 20% de descuento en la compra de calzado. Usa el código: WONDERS20 al finalizar la compra.";
    document.getElementById('feedback').textContent = discountMessage;
}

// Agregar event listeners a las imágenes de productos
document.getElementById('product-1').addEventListener('click', () => handleProductClick(1));
document.getElementById('product-2').addEventListener('click', () => handleProductClick(2));
document.getElementById('product-3').addEventListener('click', () => handleProductClick(3));
document.getElementById('product-4').addEventListener('click', () => handleProductClick(4));
