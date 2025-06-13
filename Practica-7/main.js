const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 }
];

console.log("Mostrar productos:");
productos.forEach(producto => {
  console.log(`${producto.nombre}: $${producto.precio}`);
});

console.log("Nombres de productos y verificación de disponibilidad:");
const productosDisponibles = productos.map(p => p.nombre);
console.log("Productos disponibles:", productosDisponibles);

const productoBuscado = "Tablet";
if (productosDisponibles.includes(productoBuscado)) {
  console.log(`El producto "${productoBuscado}" está disponible.`);
} else {
  console.log(`El producto "${productoBuscado}" no está disponible.`);
}

console.log("Productos con 10% de descuento:");
const productosConDescuento = productos.map(p => ({
  nombre: p.nombre,
  precio: (p.precio * 0.9).toFixed(2)
}));
console.log(productosConDescuento);

console.log("Productos con precio menor a $100:");
const productosBaratos = productos.filter(p => p.precio < 100);
console.log(productosBaratos);

console.log("Primeros 2 productos:");
const primerosDos = productos.slice(0, 2);
console.log(primerosDos);

console.log("Productos ordenados por precio (menor a mayor):");
const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log(productosOrdenados);

console.log("Productos en orden inverso:");
const productosReverso = [...productos].reverse();
console.log(productosReverso);
