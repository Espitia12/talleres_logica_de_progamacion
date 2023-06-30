/*3. Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
elementos del arreglo.*/


function menor(arreglo) {
    if (arreglo.length == 0) {
        return null
    }

    let numeroMenor = arreglo[0]

    for (let index = 0; index < arreglo.length; index++) {

        if (arreglo[index] < numeroMenor) {
            numeroMenor = arreglo[index]
        }
    }

    return numeroMenor
    
}


arreglo = [23, 5, 7, 2, 8, 1, 4, 3 ]

let respuesta = menor(arreglo)
console.log(respuesta);