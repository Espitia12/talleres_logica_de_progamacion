
/*
1. Dado el siguiente arreglo let j = [200, -100, 45, 78, 32] , imprimir los elementos de indice 2 y 4
*/

let j = [200, -100, 45, 78, 32]
console.log(j[2]);
console.log(j[4]);


/*
2. Dado el siguiente arreglo let f = ["ab", "cd", "ef", "gh"] , imprimir los elementos cd y gh.
*/
let f = ["ab", "cd", "ef", "gh"]
console.log(f[1]);
console.log(f[3]);



/*
3. Dado el siguiente arreglo let aux = [10, true, "k200", 20.7] , imprimir todos sus elementos usando la
operacion de recorrido con foreach
*/

let aux = [10, true, "k200", 20.7]

aux.forEach (i =>{
    console.log(i);
    


})


/*
4. Dado el siguiente arreglo let k = [17, 4, 64, 79, 109, 112] , recorrer cada elemento con foreach e
imprimir los elementos que sean números impares
*/

let k = [17, 4, 64, 79, 109, 112]

k.forEach (i =>{
    if (i % 2 !== 0) {
        console.log(i);
    }

    


})



/*
5. Dado el siguiente arreglo let h = [true, true, false,true, false], cambiar el elemento de índice 2 por
true, cambiar el elemento de índice 3 por false.
*/

h = [true, true, false,true, false]

h[1] = true;
h[3] = false;
console.log(h[1]);
console.log(h[3]);

/*
6. Dado el siguiente arreglo let w = ["wc", "jp", "zx", "qr"], cambiar el elemento "jp" por true, cambiar
el elemento "qr" por 30
*/

let w = ["wc", "jp", "zx", "qr"]
w[1] = true;
w[3] = 30;
console.log(w[1]);
console.log(w[3]);



/*
7. Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo recorra,
imprimiendo cada uno de sus elementos.
*/

let arreglo = [2, 5, 7, 9]

function arreglos(arreglo) {

    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
        
    }
    



    
}

arreglos(arreglo)



/*
8. Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del
arreglo.
*/

let arreglo2 = [4, "w", 24, 56]

function arreglos(arreglo2) {

    for (let i = 0; i < arreglo2.length; i++) {
        console.log(arreglo2[i]);
        
    }
    



    
}

arreglos(arreglo2)





/*
9. Use indexOf para mostrar los índices de los elementos 44, 89, 70 del arreglo [30, 44, 54, 89, 100]
*/

