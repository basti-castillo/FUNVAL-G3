const habilidades = [
  { nombre: 'HTML5', nivel: 90 },
  { nombre: 'CSS3', nivel: 85 },
  { nombre: 'JavaScript', nivel: 80 },
  // añade más
];

function loadHabilidades() {
  const cont = document.getElementById('habilidades-dinamicas');
  habilidades.forEach(h => {
    const div = document.createElement('div');
    div.className = 'bg-slate-900 rounded-md p-6 relative overflow-hidden';
    div.innerHTML = `
      <p class="mb-2">${h.nombre}</p>
      <div class="bg-gray-700 h-2 rounded">
        <div class="bg-yellow-500 h-2 rounded" style="width:0%"></div>
      </div>`;
    cont.append(div);
    // animación
    setTimeout(() => {
      div.querySelector('div > div').style.width = h.nivel + '%';
    }, 100);
  });
}

function setupContactoForm() {
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const [name, email, msg] = Array.from(form.elements)
      .filter(i => ['text','email','textarea'].includes(i.type))
      .map(i => i.value.trim());
    if (!name || !email || !msg) {
      alert('Por favor completa todos los campos.');
      return;
    }
    // Simulación de envío:
    fetch('https://formspree.io/f/YOUR_ID', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ name, email, msg })
    })
    .then(r => r.ok ? alert('Mensaje enviado 😊') : Promise.reject(r))
    .catch(() => alert('Error enviando, intenta luego.'));
    form.reset();
  });
}

