let usuarios = [
  { id: 1, nombre: "Ana", rol: "admin", edad: 28 },
  { id: 2, nombre: "Luis", rol: "editor", edad: 34 },
  { id: 3, nombre: "Carla", rol: "viewer", edad: 22 },
];

// Funciones base
function mostrarUsuarios(lista) {
  lista.forEach(({ nombre, rol }) => {
    console.log(`Usuario: ${nombre}, Rol: ${rol}`);
  });
}

function agregarUsuario(lista, nuevo) {
  return [...lista, { ...nuevo }];
}

function actualizarUsuario(lista, id, nuevosDatos) {
  return lista.map(usuario =>
    usuario.id === id ? { ...usuario, ...nuevosDatos } : usuario
  );
}

function filtrarPorRol(lista, rol) {
  return lista.filter(({ rol: r }) => r === rol);
}

// Menú principal
function menu() {
  const opcion = prompt(
    `Seleccione una opción:\n1. Mostrar todos los usuarios\n2. Agregar un nuevo usuario\n3. Actualizar usuario\n4. Filtrar usuario por rol`
  );

  switch (opcion) {
    case "1":
      mostrarUsuarios(usuarios);
      break;

    case "2":
      const idNuevo = parseInt(prompt("Ingrese el ID:"));
      const nombreNuevo = prompt("Ingrese el nombre:");
      const edadNueva = parseInt(prompt("Ingrese la edad:"));
      const rolNuevo = prompt("Ingrese el rol:");
      usuarios = agregarUsuario(usuarios, {
        id: idNuevo,
        nombre: nombreNuevo,
        edad: edadNueva,
        rol: rolNuevo,
      });
      console.log("Usuario agregado correctamente.");
      break;

    case "3":
      const idActualizar = parseInt(prompt("Ingrese el ID del usuario a actualizar:"));
      const nombreAct = prompt("Nuevo nombre:");
      const edadAct = parseInt(prompt("Nueva edad:"));
      const rolAct = prompt("Nuevo rol:");
      usuarios = actualizarUsuario(usuarios, idActualizar, {
        nombre: nombreAct,
        edad: edadAct,
        rol: rolAct,
      });
      console.log("Usuario actualizado correctamente.");
      break;

    case "4":
      const rolFiltrar = prompt("Ingrese el rol a filtrar:");
      const filtrados = filtrarPorRol(usuarios, rolFiltrar);
      filtrados.forEach(({ nombre, rol }) => {
        console.log(`Usuario: ${nombre}, Rol: ${rol}`);
      });
      break;

    default:
      alert("Opción no válida");
  }

  const repetir = confirm("¿Desea realizar otra operación?");
  if (repetir) menu();
}

menu(); // Inicia el programa
