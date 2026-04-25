document.addEventListener("DOMContentLoaded", () => {
    // 1. Lista de imágenes disponibles en tu carpeta img
    // Puedes agregar o quitar nombres de archivos según lo que tengas en tu carpeta
    const misImagenes = [
        "img/20.WEBP", "img/17.webp", "img/18.webp", "img/19.webp", "img/23.webp", "img/23.webp", "img/24 (2).webp", "img/24.webp", "img/25.webp", "img/26.webp", "img/27.webp", "img/28.webp", "img/29.webp", "img/30.webp", "img/31.webp", "img/32.webp", "img/33.webp", "img/34.webp", "img/35.webp", "img/36.webp", "img/37.webp", "img/38.webp", "img/39.webp", "img/40.webp", "img/41.webp", "img/42.webp", "img/43.webp", "img/44.webp"
    ];

    /**
     * Función para rotar imágenes con efecto de parpadeo
     * @param {string} selector - El selector CSS de la imagen
     * @param {number} intervalo - Tiempo en segundos (3, 4 o 5)
     */
    function iniciarEfectoGaleria(selector, intervalo) {
        const img = document.querySelector(selector);
        
        if (!img) return;

        // Aplicamos la clase de animación CSS (animate-3s, etc.)
        img.classList.add(`animate-${intervalo}s`);

        setInterval(() => {
            // Buscamos una imagen aleatoria que sea diferente a la actual
            let nuevaImg;
            do {
                nuevaImg = misImagenes[Math.floor(Math.random() * misImagenes.length)];
            } while (nuevaImg === img.getAttribute('src'));

            // Cambiamos el src a mitad del intervalo (cuando el CSS pone opacity: 0)
            setTimeout(() => {
                img.src = nuevaImg;
            }, (intervalo * 1000) / 2);

        }, intervalo * 1000);
    }

    // 2. Ejecutamos la función para las 3 imágenes de la galería
    iniciarEfectoGaleria('.galery .grande img', 10); // La imagen grande cambia cada 10s
    iniciarEfectoGaleria('.galery .right > img:nth-of-type(1)', 8); // La primera chica cada 8s
    iniciarEfectoGaleria('.galery .right > img:nth-of-type(2)', 12); // La segunda chica cada 12s

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
