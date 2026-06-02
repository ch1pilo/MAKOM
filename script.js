document.addEventListener("DOMContentLoaded", () => {
    // Listas de imágenes personalizadas por colaborador
    const imagenesColabA = ["img/46.webp", "img/44.webp", "img/45.webp", "img/3.webp"];
    const imagenesColabB = ["img/47.webp", "img/48.webp", "img/41.webp", "img/5.webp"];
    const imagenesColabC = ["img/34.webp", "img/35.webp", "img/23.webp", "img/19.webp"];

    /**
     * Función para rotar imágenes con efecto de parpadeo
     * @param {string} selector - El selector CSS de la imagen
     * @param {number} intervalo - Tiempo en segundos (3, 4 o 5)
     * @param {string[]} lista - Array de imágenes para este contenedor
     */
    function iniciarEfectoGaleria(selector, intervalo, lista) {
        const img = document.querySelector(selector);
        
        if (!img || !lista || lista.length === 0) return;

        img.classList.add(`animate-${intervalo}s`);

        setInterval(() => {
            let nuevaImg;
            do {
                nuevaImg = lista[Math.floor(Math.random() * lista.length)];
            } while (nuevaImg === img.getAttribute('src'));

            setTimeout(() => {
                img.src = nuevaImg;
            }, (intervalo * 1000) / 2);

        }, intervalo * 1000);
    }

    // Ejecutamos la rotación con sus respectivas listas
    iniciarEfectoGaleria('.galery .grande img', 10, imagenesColabA);
    iniciarEfectoGaleria('.colab-wrapper:nth-of-type(2) .foto-chica', 8, imagenesColabB);
    iniciarEfectoGaleria('.colab-wrapper:nth-of-type(3) .foto-chica', 12, imagenesColabC);

    // --- Lógica de Modales ---
    const modalInfo = document.getElementById('modal-info');
    const modalCita = document.getElementById('modal-cita');
    const btnInfo = document.getElementById('open-info');
    const btnCita = document.getElementById('open-cita');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Abrir modales
    btnInfo.onclick = () => modalInfo.style.display = "flex";
    btnCita.onclick = () => modalCita.style.display = "flex";

    // Cerrar modales con la 'X'
    closeButtons.forEach(btn => {
        btn.onclick = function() {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = "none";
        }
    });

    // Cerrar al hacer clic fuera del contenido
    window.onclick = (event) => {
        if (event.target === modalInfo) modalInfo.style.display = "none";
        if (event.target === modalCita) modalCita.style.display = "none";
    };
});
