// js/main.js

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Carga Dinámica de Habilidades ---
    const habilidadesContainer = document.getElementById('habilidades-container');
    if (habilidadesContainer && typeof habilidades !== 'undefined') {
        function cargarHabilidades() {
            habilidades.forEach((habilidad, index) => {
                const habilidadHTML = `
                    <div class="bg-slate-900 rounded-md p-6 flex flex-col items-center justify-center skill-card" style="transition-delay: ${index * 100}ms">
                        <img src="${habilidad.imagen}" alt="${habilidad.nombre}" class="mx-auto h-14 w-14 mb-2">
                        <span class="font-semibold">${habilidad.nombre}</span>
                
                        <span class="text-xs text-gray-400 mt-1">${habilidad.nivel}</span>
                    </div>
                `;
                habilidadesContainer.innerHTML += habilidadHTML;
            });

            // Animación sutil al cargar
            // Usamos un observer para que se active al hacer scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const cards = habilidadesContainer.querySelectorAll('.skill-card');
                        cards.forEach(card => card.classList.add('visible'));
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(habilidadesContainer);
        }
        cargarHabilidades();
    }

    // --- 2. Menú con Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- 3. Carga Dinámica de Proyectos ---
    const proyectosContainer = document.getElementById('proyectos-container');
    if (proyectosContainer && typeof proyectos !== 'undefined') {
        function cargarProyectos() {
            proyectos.forEach(proyecto => {
                const proyectoHTML = `
                    <div class="bg-slate-800 rounded-md overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full h-48 object-cover">
                      <div class="p-6 text-center">
                        <h3 class="font-semibold text-lg">${proyecto.titulo}</h3>
                        <p class="text-gray-400 mt-2 text-sm">${proyecto.descripcion}</p>
                        <a href="${proyecto.link}" target="_blank" class="text-yellow-500 hover:underline mt-4 inline-block">Conocer más</a>
                      </div>
                    </div>
                `;
                proyectosContainer.innerHTML += proyectoHTML;
            });
        }
        cargarProyectos();
    }
    
    // --- 4. Validación del Formulario de Contacto ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                // Previene el envío del formulario si hay campos vacíos
                event.preventDefault();
                alert('Por favor, completa todos los campos del formulario.');
            }
            // Si todos los campos están llenos, el formulario se enviará a la URL de 'action'
        });
    }

});