// Función para mostrar qué atracción has seleccionado
function trackClick(rideName) {
    const display = document.getElementById('status-message');
    
    // Cambiamos el texto dinámicamente
    display.innerText = `✅ ¡Has seleccionado: ${rideName}! Prepárate para la diversión.`;
    
    // Log en consola para verificar funcionamiento
    console.log("Interacción detectada en: " + rideName);
}

// Saludo de bienvenida al cargar la página
window.onload = () => {
    console.log("Bienvenido a MagicWorld. La página está lista.");
};