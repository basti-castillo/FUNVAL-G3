// console.log("Calentar agua")
// setTimeout(() => {
//     console.log("poner yerba al mate");
// }, 3000);
// setTimeout (() => {
//     console.log ("Endulzar agua");
// }, 4500)
// setTimeout (() => {
//     console.log ("Enciendo la compu");
// }, 6000)
// setTimeout (() => {
//     console.log ("Me falla el internet :( ");
// }, 7500)
// setTimeout (() => {
//     console.log ("Me conecto a mi clase de progra como un PRO");
// }, 9000)
// setTimeout (() => {
//     console.log ("No entiendo nada");
// }, 10500)
// setTimeout (() => {
//     console.log ("se termina mi matecito");
// }, 11000)
// setTimeout (() => {
//     console.log ("Toca darme vueltas y vueltas en visual code hasta que me funcione mi codigo y no defraudar al profe kevin");
// }, 12500)


// let datos = [

// ];

// function LaEscogida () {
//     let esReal = true;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (esReal) {
//                 resolve("Es la merecedora del trono");
//             } else {
//                 reject("Nunca me quiso");
//             }
//         }, 3400);
//     });
// }

// LaEscogida() 
//     .then((datos) => console.log(datos))
//     .then((err) => console.log(err))


let datos = [
  { nombre: "pepe", edad: 18, pais: "Argentina" },
  { nombre: "juan", edad: 34, pais: "Peru" },
  { nombre: "kevin", edad: 28, pais: "Narnia" },
  { nombre: "Thomas", edad: 28, pais: "Argentina" },
  { nombre: "Johan", edad: 28, pais: "Chile" },
  { nombre: "Juana", edad: 28, pais: "Chile" },
];

function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("Error al traer los datos");
      }
    }, 3000);
  });
}

const todosContainer = document.getElementById("todos-container");
const argentinaContainer = document.getElementById("argentina-container");
const edadContainer = document.getElementById("edad-container");


function mostrarEstudiantes(contenedor, listaDeEstudiantes) {

  contenedor.innerHTML = "";
  
 
  for (let i = 0; i < listaDeEstudiantes.length; i++) {
    const estudiante = listaDeEstudiantes[i];
    const card = document.createElement("div");
    card.classList.add("student-card");
    card.textContent = estudiante.nombre; 
    contenedor.appendChild(card);
  }
}

traerDatos()
  .then((estudiantes) => {

    const estudiantesDeArgentina = [];
    const estudiantesDe28 = [];


    for (let i = 0; i < estudiantes.length; i++) {
      const estudiante = estudiantes[i];

      if (estudiante.pais === "Argentina") {
        estudiantesDeArgentina.push(estudiante);
      }

      if (estudiante.edad === 28) {
        estudiantesDe28.push(estudiante);
      }
    }

    mostrarEstudiantes(todosContainer, estudiantes); 
    mostrarEstudiantes(argentinaContainer, estudiantesDeArgentina);
    mostrarEstudiantes(edadContainer, estudiantesDe28);
  })
  .catch((error) => {
    console.error(error);
    document.body.innerHTML = `<p style="color: red;">${error}</p>`;
  });