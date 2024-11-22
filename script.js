// Seleccionar todas las tarjetas
const tarjetas = document.querySelectorAll('.Tarjeta');

// Añadir el evento de clic a cada tarjeta
tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        // Alternar la clase "expandida" en la tarjeta
        tarjeta.classList.toggle('expandida');
    });
});
