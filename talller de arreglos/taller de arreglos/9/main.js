/* Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos. */

function Promedios() {
    let arreglo1 = []
    let arreglo2 = []
    
    let cantidad1 = parseInt(prompt("Ingrese la cantidad de elementos que va tener su primer arreglo")); 
    let cantidad2 = parseInt(prompt("Ingrese la cantidad de elementos que va tener su segundo arreglo"));
    
    let suma1 = 0;
    let suma2 = 0;

    let promedio = 0;
    for (let index = 0; index < cantidad1; index++) {
        let ingresarArreglo1 = parseInt(prompt("Ingrese el elemento numero "+ (index+1) +" de su primer arreglo"));
        arreglo1.push(ingresarArreglo1)
    }

    for (let index2 = 0; index2 < cantidad2; index2++) {
        let ingresarArreglo2 = parseInt(prompt("Ingrese el elemento numero "+ (index2+1) +" de su segundo arreglo"));
        arreglo2.push(ingresarArreglo2)
    }

    for (let index3 = 0; index3 < arreglo1.length; index3++) {
        suma1 = suma1 + arreglo1[index3] / arreglo1.length
    }
    console.log("El promedio de su primer arreglo es: " + suma1);
    for (let index4 = 0; index4 < arreglo2.length; index4++) {
        suma2 = suma2 + arreglo2[index4] / arreglo2.length
    }
    console.log("El promedio de su segundo arreglo es: " + suma2);

    if (suma1 > suma2) {
        promedio = suma1
    }else if (suma2 > suma1) {
        promedio = suma2
    }
    return promedio;
}
let resultado = Promedios();
console.log("El promedio mas grande es", resultado);