document.addEventListener("DOMContentLoaded", () => {
    // 1. Lista de imágenes disponibles en tu carpeta img
    // Puedes agregar o quitar nombres de archivos según lo que tengas en tu carpeta
    const misImagenes = [
        "img/20.WEBP", "img/17.WEBP", "img/18.WEBP", "img/19.WEBP", "img/23.WEBP", "img/23.WEBP", "img/24 (2).WEBP", "img/24.WEBP", "img/25.WEBP", "img/26.WEBP", "img/27.WEBP", "img/28.WEBP", "img/29.WEBP", "img/30.WEBP", "img/31.WEBP", "img/32.WEBP", "img/33.WEBP", "img/34.WEBP", "img/35.WEBP", "img/36.WEBP", "img/37.WEBP", "img/38.WEBP", "img/39.WEBP", "img/40.WEBP", "img/41.WEBP", "img/42.WEBP", "img/43.WEBP", "img/44.WEBP"
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