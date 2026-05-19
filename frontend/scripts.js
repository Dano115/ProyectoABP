// Obtener elementos del DOM
const modal = document.getElementById("rankingModal");
const btnOpen = document.getElementById("openRanking");
const btnClose = document.querySelector(".close-modal");

function buscarTopJugadores() {
    // Aquí iría la lógica para obtener los datos reales del ranking desde el backend
    // Por ahora, se muestra un ranking de ejemplo en el HTML
}

// Abrir el modal al hacer click en "Ver Ranking"
btnOpen.addEventListener("click", buscarTopJugadores()); // Llama a la función para cargar el ranking
btnOpen.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace intente recargar o navegar
    modal.style.display = "flex"; // Muestra el modal centrado
});

// Cerrar el modal al hacer click en la (X)
btnClose.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cerrar el modal si el usuario hace click fuera de la caja del contenido
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});