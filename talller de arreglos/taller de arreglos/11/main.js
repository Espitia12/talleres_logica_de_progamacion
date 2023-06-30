/* Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo. */

function Impares() {
    let arreglos = [];

    let cantidadA = parseInt(prompt("Ingrese la cantidad de elementos que quiere tener su arreglo"));

    for (let index = 0; index < cantidadA; index++) {
        let ingresarA = parseInt(prompt("Ingrese el elemento numero "+ (index+1) +" de su arreglo"));
        
        arreglos.push(ingresarA)
    }


    let ocurrencias = 0;
    for (let index2 = 0; index2 < arreglos.length; index2++) {
        console.log(arreglos[index2]);
        if (arreglos[index2] % 2 == 1) {
            ocurrencias++
        }
        
    }
    return ocurrencias
}

let resultado = Impares();
console.log("El numero de impares es: ",resultado);