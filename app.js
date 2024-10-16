// Ejemplo básico para un efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const toggleModeButton = document.querySelector('.toggle-mode'); // Asegúrate de que la clase sea la correcta
const body = document.body;

// Función para aplicar el modo guardado en localStorage
function applySavedMode() {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
        body.classList.add('light-mode');
        toggleModeButton.textContent = '🌙'; // Cambia el texto al modo oscuro
    } else {
        body.classList.remove('light-mode');
        toggleModeButton.textContent = '☀️'; // Cambia el texto al modo claro
    }
}

// Aplicar el modo guardado al cargar la página
applySavedMode();

// Manejador de evento para el botón de cambio de modo
toggleModeButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        toggleModeButton.textContent = '🌙'; // Cambia el texto al modo oscuro
        localStorage.setItem('mode', 'light'); // Guardar el modo claro en localStorage
    } else {
        toggleModeButton.textContent = '☀️'; // Cambia el texto al modo claro
        localStorage.setItem('mode', 'dark'); // Guardar el modo oscuro en localStorage
    }
});

// Load more button logic (opcional)
const loadMoreButton = document.getElementById('loadMore');
let currentPosts = 2; // Número de publicaciones actuales mostradas

if (loadMoreButton) { // Verifica si el botón existe en la página
    loadMoreButton.addEventListener('click', () => {
        currentPosts += 2; // Incrementa el número de publicaciones a mostrar

        // Aquí cargarías más publicaciones desde una fuente de datos (puedes hacerlo dinámicamente)
        // Por simplicidad, solo agregaremos un par de nuevas entradas de ejemplo
        const blogSection = document.querySelector('.blog .container');

        for (let i = 0; i < 2; i++) {
            const newPost = document.createElement('article');
            newPost.className = 'entrada';
            newPost.innerHTML = `
                <h3>Título del Post ${currentPosts - 1 + i}</h3>
                <p>Resumen breve del post ${currentPosts - 1 + i}. <a href="#" class="leer-mas">Leer más...</a></p>
            `;
            blogSection.appendChild(newPost);
        }
    });
}