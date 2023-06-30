/*
1. Imprima el número de elementos de los siguientes arreglos usando la propiedad length
a) [1,2,3,4,5,6,7,8,9,10] 
b) [] 
c) ["a" true, -1] 
d) [2, 4, 5, 7, 1, 34, 89, 0]*/

let a = [1,2,3,4,5,6,7,8,9,10];
let b = [] 
let c = ["a", true, -1] 
let d =  [2, 4, 5, 7, 1, 34, 89, 0]

console.log("longitud:", a.length);
console.log("longitud:", b.length);
console.log("longitud:", c.length);
console.log("longitud:", d.length);

console.log("_______________________________________________________");


/*2. Dado el arreglo [1,2,3,4,5,6,7,8,9,10]:
a) Agregue el elemento 345 usando push y verifique el cambio en el arreglo
b) Agregue el elemento true usando push y verifique el cambio en el arreglo
c) Agregue el elemento "ADSO" usando push y verifique el cambio en el arreglo 
d) Agregue los elementos 455, 78, false usando push en un solo llamado y verifique el cambio en el arreglo
e) Agregue los elementos "ABcd", true, 21 usando push en un solo llamado y verifique el cambio en el arreglo*/

let arreglo1 = [1,2,3,4,5,6,7,8,9,10]
arreglo1.push(345)
arreglo1.push(true)
arreglo1.push("ADSO")
arreglo1.push(455, 78, false )
arreglo1.push("ABcd", true, 21)
console.log(arreglo1);
console.log("_______________________________________________________");


/*3. Use splice para hacer las eliminaciones correspondientes:
a) Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
c) Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1
d) Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta el índice 4 en un sólo
llamado
e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en
un sólo
llamado*/

let arreglo2_1 = [1, 2, false]
arreglo2_1.splice(2,1)
console.log(arreglo2_1);

let arreglo2_2 = [99, false, 17, 45, 7, "abc", 78]
arreglo2_2.splice(6,1)
console.log(arreglo2_2);

let arreglo2_3 = [-1, -55, -89, -30, 1000]
arreglo2_3.splice(1, 1)
console.log(arreglo2_3);

let arreglo2_4 = ["zxc", 767, 1298, true, false, [3], 1]
arreglo2_4.splice(1, 4)
console.log(arreglo2_4);

console.log("_______________________________________________________");

/*4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a.*/

let a1 = [2, 6, 9, 0, 5]
let a2 = a1.slice();
console.log(a2);

console.log("_______________________________________________________");

/*5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b.*/
let b1 = ["abc", 4, 88, 99]
let b2 = b1.slice();
console.log(b2);



console.log("_______________________________________________________");


/*6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir
todos sus elementos*/

let arreglo3 = ["x", "y", "z", 0, 1, 2, 3]


for (let i = 0; i < arreglo3.length; i++) {
    console.log(arreglo3[i]);



}

console.log("_______________________________________________________");
/*7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e
imprimir todos sus elementos
aumentados en 1*/

let arreglo4 = [1, 17, 8, 9, 3]
let contador = 0

for (let i = 0; i < arreglo4.length; i++) {
    console.log(arreglo4[i] + 1);



}

console.log("_______________________________________________________");


/*8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos)*/

let arreglo5 = [11, 173, 34, 91, 3]

function name(arreglo5) {
    return console.log("longitud:", arreglo5.length);


    
}

name(arreglo5)


console.log("_______________________________________________________");


/*9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún
elemento del siguiente arreglo
["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema
*/

let letra = "a"

let arreglo6 = ["a", "b", "c", "d", "e", "f", "g"]


function name2(letra, arreglo6) {
    for (let i = 0; i < arreglo6.length; i++) {
        if (letra == arreglo6[i]) {
            return console.log("pertenece");
        }
    
    
    
    }

    return console.log("no pertence pertenece");
    
}


name2(letra, arreglo6)

