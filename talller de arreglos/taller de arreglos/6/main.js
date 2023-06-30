/* Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”, “Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades) queden en el arreglo que les corresponde. Use ciclos. */



let valle = ["Cali", "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"];

let valleOrdenado = [];
let quindioOrdenado = [];

for (let i = 0; i < valle.length; i++) {
  let elemento = valle[i];

  if (Fvalle(elemento)) {
    valleOrdenado.push(elemento);
  } else {
    quindioOrdenado.push(elemento);
  }
}

for (let i = 0; i < quindio.length; i++) {
  let elemento = quindio[i];

  if (Fvalle(elemento)) {
    valleOrdenado.push(elemento);
  } else {
    quindioOrdenado.push(elemento);
  }
}

console.log("El Valle ordenado:", valleOrdenado);
console.log("El Quindio ordenado:", quindioOrdenado);


function Fvalle(elemento) {
  let Ovalle = ["Cali", "Tulua", "Cartago", "Palmira"];
  return Ovalle.includes(elemento);
}