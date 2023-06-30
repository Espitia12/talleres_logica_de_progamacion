/* Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se leçdebe pedir al usuario que introduzca el arreglo. */

function Mayor() {
    let arreglo = []

    let cantidadArreglos = prompt("Ingrese cuantos arreglos quiere poner");

    for (let index = 0; index < cantidadArreglos; index++) {
        let ingreseArreglo = parseInt(prompt("Ingrese el arreglo"));

        arreglo.push(ingreseArreglo)
    }
    let numeroM = [0];
    for (let index2 = 0; index2 < arreglo.length; index2++) {
            if ( arreglo[index2] > numeroM ) {
                numeroM = arreglo[index2];
            }
    }

    return numeroM;
}

let resultado = Mayor();
console.log("Numero mayor:",resultado);