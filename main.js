document.addEventListener('DOMContentLoaded', function () {
    // Obtén los enlaces de la galería
    var enlaceInteriores = document.getElementById('enlaceInteriores');
    var galleryViewerInteriores = document.getElementById('galleria-interior1');
    var projectTitle = document.getElementById('titulo-galerias')

    // Agrega eventos de clic a los enlaces
    enlaceInteriores.addEventListener('click', function (event) {
        event.preventDefault(); // Evita que el enlace cambie de página
        console.log('Enlace Interiores clickeado');

        // Oculta todas las imágenes de la galería
        var galleryButtons = document.querySelectorAll('.gallery-btn');
        galleryButtons.forEach(function (button) {
            button.style.display = 'none';
        });

        // Muestra el contenido dinámicamente
        galleryViewerInteriores.style.display = 'grid';
        galleryViewerInteriores.classList.add('galeria-visible')
        projectTitle.innerHTML = '<h2>INTERIORES</h2>';
    });

    // Agrega eventos de clic a otros enlaces de la galería
});