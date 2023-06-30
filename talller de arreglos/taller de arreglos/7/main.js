/* Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”, “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y verduras) queden en el arreglo que les corresponde. Use ciclos. */
    
let arreglo1 = ["Pera", "Cebolla", "Limon", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];

for (let i = 0; i < arreglo1.length; i++) {
  let elemento = arreglo1[i];

  if (esFruta(elemento)) {
    frutas.push(elemento);
  } else {
    verduras.push(elemento);
  }
}

for (let i = 0; i < arreglo2.length; i++) {
  let elemento = arreglo2[i];

  if (esFruta(elemento)) {
    frutas.push(elemento);
  } else {
    verduras.push(elemento);
  }
}

console.log("Frutas ordenadas:", frutas);
console.log("Verduras ordenadas:", verduras);


function esFruta(elemento) {
  let frutas = ["Pera", "Manzana", "Banano", "Limon"];
  return frutas.includes(elemento);
}