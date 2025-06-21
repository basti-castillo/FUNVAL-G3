document.addEventListener('DOMContentLoaded', () => {
    const contenedorUsuarios = document.getElementById('contenedor-usuarios');
    const divMensajeError = document.getElementById('mensaje-error');
    const spanTextoError = document.getElementById('texto-error');

    function mostrarError(mensaje) {
        spanTextoError.textContent = mensaje;
        divMensajeError.classList.remove('hidden');
        contenedorUsuarios.innerHTML = ''; 
    }

    function ocultarError() {
        divMensajeError.classList.add('hidden'); 
        spanTextoError.textContent = '';
    }

    function renderizarTarjetaUsuario(usuario) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl';
        tarjeta.innerHTML = `
            <h3 class="text-xl font-semibold text-gray-900 mb-2">${usuario.name}</h3>
            <p class="text-gray-700 text-sm mb-1"><strong>Usuario:</strong> ${usuario.username}</p>
            <p class="text-gray-700 text-sm mb-1"><strong>Email:</strong> <a href="mailto:${usuario.email}" class="text-blue-600 hover:underline">${usuario.email}</a></p>
            <p class="text-gray-700 text-sm mb-1"><strong>Empresa:</strong> ${usuario.company.name}</p>
            <p class="text-gray-700 text-sm"><strong>Website:</strong> <a href="http://${usuario.website}" target="_blank" rel="noopener noreferrer" class="text-purple-600 hover:underline">${usuario.website}</a></p>
        `;
        contenedorUsuarios.appendChild(tarjeta);
    }

    async function obtenerUsuarios() {
        ocultarError(); 
        contenedorUsuarios.innerHTML = '<p class="text-gray-600 text-lg">Cargando usuarios...</p>';
        try {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!respuesta.ok) {
                throw new Error(`Error HTTP: ${respuesta.status} ${respuesta.statusText}`);
            }
            const usuarios = await respuesta.json(); 
            contenedorUsuarios.innerHTML = ''; 
            usuarios.forEach(usuario => {
                renderizarTarjetaUsuario(usuario);
            });
        } catch (error) {
            console.error('Hubo un problema al obtener los usuarios:', error);
            mostrarError('Error al cargar los usuarios. Inténtalo de nuevo más tarde.');
        }
    }
    obtenerUsuarios();
});