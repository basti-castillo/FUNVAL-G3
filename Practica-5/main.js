function iniciar() {
  let dato;
  let intentos = 0;
  
 
  while (true) {
    dato = prompt(
      "Seleccione una opción:" +
      "1. Calcular el área de un cuadrado" +
      "2. Calcular el área de un rectángulo" +
      "3. Calcular el área de un triángulo"
    );

    dato = parseInt(dato);

    if (dato >= 1 && dato <= 3) {
      break;
    } else {
      alert("Opción no válida. Intenta nuevamente.");
      intentos++;
      if (intentos >= 3) {
        alert("Demasiados intentos fallidos");
        return;
      }
    }
  }

  let base, altura, lado, area;

  switch (dato) {
    case 1:
      lado = pedirNumero("Ingrese el lado del cuadrado:");
      area = lado * lado;
      alert("El área del cuadrado es: " + area);
      break;
    case 2:
      base = pedirNumero("Ingrese la base del rectángulo:");
      altura = pedirNumero("Ingrese la altura del rectángulo:");
      area = base * altura;
      alert("El área del rectángulo es: " + area);
      break;
    case 3:
      base = pedirNumero("Ingrese la base del triángulo:");
      altura = pedirNumero("Ingrese la altura del triángulo:");
      area = (base * altura) / 2;
      alert("El área del triángulo es: " + area);
      break;
    default:
      alert("Error inesperado.");
  }
}

function pedirNumero(mensaje) {
  let numero;
  while (true) {
    numero = prompt(mensaje);
    numero = parseFloat(numero);
    if (!isNaN(numero) && numero > 0) {
      return numero;
    } else {
      alert("Dato inválido. Debe ser mayor a 0.");
    }
  }
}
