document.addEventListener("DOMContentLoaded", () => {
    // Listas de imágenes personalizadas por colaborador
    const imagenesColabA = ["img/colaboradores/Alma/1.webp", "img/colaboradores/Alma/2.webp", "img/colaboradores/Alma/3.webp", "img/colaboradores/Alma/4.webp", "img/colaboradores/Alma/5.webp", "img/colaboradores/Alma/6.webp", "img/colaboradores/Alma/7.webp"];
    const imagenesColabB = ["img/colaboradores/Shechter/1.webp", "img/colaboradores/Shechter/2.webp", "img/colaboradores/Shechter/3.webp", "img/colaboradores/Shechter/4.webp"];
    const imagenesColabC = ["img/colaboradores/uhr interiores/1.webp", "img/colaboradores/uhr interiores/2.webp", "img/colaboradores/uhr interiores/3.webp", "img/colaboradores/uhr interiores/4.webp", "img/colaboradores/uhr interiores/5.webp"];

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

    // --- Lógica de Envío de Formularios a Labmakom@gmail.com ---
    const forms = document.querySelectorAll('.modal-form');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch("https://formsubmit.co/ajax/Labmakom@gmail.com", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    alert("¡Gracias! Tu mensaje ha sido enviado con éxito a Labmakom.");
                    form.reset();
                    const modal = form.closest('.modal');
                    if (modal) modal.style.display = "none";
                    document.body.style.overflow = '';
                } else {
                    alert("Hubo un error al enviar el formulario. Por favor, intenta de nuevo.");
                }
            } catch (error) {
                alert("Error de conexión. Revisa tu internet e intenta nuevamente.");
            }
        });
    });
});
