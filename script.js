document.addEventListener('DOMContentLoaded', () => {
    
    const btnOferta = document.getElementById('btn-oferta');
    
    if(btnOferta) {
        btnOferta.addEventListener('click', () => {
            alert('¡Genial! Has desbloqueado la oferta de $249. Redirigiendo a contacto...');
        });
    }

    const btnMenu = document.getElementById('btn-menu');
    
    if(btnMenu) {
        btnMenu.addEventListener('click', () => {
            console.log('Menú hamburguesa clickeado. Aquí podrías desplegar un menú lateral.');
        });
    }

});