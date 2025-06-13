let saldo = 0;


function menu() {
  let salir = false;

  while (salir= true) {
    let opcion = prompt(
      "Bienvenido al BANCO POLINESIQ, Seleccione una operación:\n" +
      "1. Consultar saldo\n" +
      "2. Ingresar dinero\n" +
      "3. Retirar dinero\n" 
    );

    opcion = parseInt(opcion);

    
    switch (opcion) {
      case 1:consultarSaldo();break;
      case 2:ingresarDinero();break;
      case 3:retirarDinero();break;
      default:
        alert("Ingrese una de las opciones anteriores");
    }
  }
}


function pedirCantidad(mensaje) {
  let cantidad;
  while (true) {
    cantidad = prompt(mensaje);
    cantidad = parseFloat(cantidad);
    if (!isNaN(cantidad) && cantidad > 0) {
      return cantidad;
    } else {
      alert("Entrada inválida. Ingresa un número mayor a cero.");
    }
  }
}

function consultarSaldo() {
  alert("Tu saldo es: $" + saldo);
}


function ingresarDinero() {
  let cantidad = pedirCantidad("¿Cuanto desea depositar?:");
  if (cantidad > 0) {
    saldo += cantidad;
    alert("Depósito realizado, tu nuevo saldo es: $" + saldo);
  } else {
    alert("Cantidad inválida. Debe ser mayor a cero.");
  }
}


function retirarDinero  () {
  let cantidad = pedirCantidad("¿Cuanto desea retirar?:");
  if (cantidad > saldo) {
    alert("Saldo insuficiente. Tu saldo actual es: $" + saldo);
  } else if (cantidad > 0) {
    saldo -= cantidad;
    alert("Retiro exitoso. Nuevo saldo: $" + saldo);
  } else {
    alert("Cantidad inválida. Debe ser mayor a cero.");
  }
};



