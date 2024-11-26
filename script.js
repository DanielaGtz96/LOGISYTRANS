function buscarContenido() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const tarjetas = document.querySelectorAll('.Tarjeta');

    tarjetas.forEach(tarjeta => {
        const texto = tarjeta.textContent.toLowerCase();
        if (texto.includes(input)) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}
