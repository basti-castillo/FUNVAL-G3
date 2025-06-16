const proyectos = [
  { titulo: 'El mundo Polinesiq', descripcion: 'Infinidad de soluciones...', imagen: 'meta.png', link: '#' },
  { titulo: 'ContaVerso', descripcion: 'Lleva tus números...', imagen: 'Emblema financiero con patrones polinesios.png', link: '#' },
  // más proyectos
];

function loadProyectos() {
  const cont = document.getElementById('proyectos-container');
  proyectos.forEach(p => {
    const div = document.createElement('div');
    div.className = 'bg-slate-800 rounded-md overflow-hidden shadow-md transform hover:scale-105 transition';
    div.innerHTML = `
      <img src="./${p.imagen}" alt="${p.titulo}" class="w-full">
      <div class="p-6 text-center">
        <h3 class="font-semibold text-lg">${p.titulo}</h3>
        <p class="text-gray-400 mt-2">${p.descripcion}</p>
        <a href="${p.link}" class="text-yellow-500 hover:underline mt-4 inline-block">Conoce más</a>
      </div>`;
    cont.append(div);
  });
}
