// Menu hamburguesa
const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// Validación de formulario
const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email.includes("@") || !mensaje) {
    alert("Por favor, completa todos los campos correctamente.");
    e.preventDefault();
  }
});
