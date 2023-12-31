/*Taller
Usando lo anteriormente expuesto, manejando el número de índices correctos en cada caso, resuelva:
1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]:
a) Usar dos índices para leer e imprimir el elemento z
b) Usar dos índices para leer e imprimir el elemento 789
c) Usar dos índices para leer e imprimir el elemento 0
d) Usar dos índices para leer e imprimir el elemento false
*/

let jercicioIndice = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

console.log(jercicioIndice[0][1]);
console.log(jercicioIndice[1][0]);
console.log(jercicioIndice[2][2]);
console.log(jercicioIndice[2][1]);
console.log("-------------------------");

/*
2. Dado el arreglo [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ]
a) Usar tres índices para leer e imprimir el elemento ?
b) Usar tres índices para leer e imprimir el elemento 66
c) Usar tres índices para leer e imprimir el elemento true
d) Usar tres índices para leer e imprimir el elemento %
*/


let jercicioIndice2 = [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ]

console.log(jercicioIndice2[1][0][3]);
console.log(jercicioIndice2[2][0][2]);
console.log(jercicioIndice2[0][0][2]);
console.log(jercicioIndice2[0][0][0]);
console.log("--------------------------");
/*
Complete sin usar el intérprete de Javascript(úselo al final para verificar sus respuestas):
e) arreglo[0][0][2] devolverá = true
f) arreglo[2][0][0] devolverá = 44
g) arreglo[1][0][3] devolverá = ?
h) arreglo[0][1][1] devolverá = Uncaught TypeError: Cannot read properties of undefined (reading '1')
*/


/*
3. Dado el arreglo [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]
a) Leer e imprimir el elemento true
b) Leer e imprimir el elemento 1
c) Leer e imprimir el elemento 77
d) Leer e imprimir el elemento 88
e) Leer e imprimir el elemento ¿
*/

let jercicioIndice3 = [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]

console.log(jercicioIndice3[1][0][1]);
console.log(jercicioIndice3[2][0][0][0][0]);
console.log(jercicioIndice3[0][1][1]);
console.log(jercicioIndice3[1][1][0][0]);
console.log(jercicioIndice3[3][0]);
console.log("--------------------------");


/*
4. Dado el arreglo [ [50, 60, 70], [“q”, “%”, “$”], [“?”, “>”, “<”], [1 , -8, -2] ]
a) Cambiar el elemento % por el elemento ?. Verifique el cambio usando console.log
b) Cambiar el elemento -8 por el elemento 9. Verifique el cambio usando console.log
c) Cambiar el elemento 50 por el elemento ¡. Verifique el cambio usando console.log
d) Eliminar el elemento $. Verifique el cambio usando console.log, imprima todo el arreglo.
e) Eliminar el elemento 70. Verifique el cambio usando console.log, imprima todo el arreglo.
f) Eliminar el elemento -2. Verifique el cambio usando console.log, imprima todo el arreglo.
*/


let JercicioIndice4 = [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ]

JercicioIndice4[1][1] = "?"
console.log(JercicioIndice4[1][1]);

JercicioIndice4[3][1] = 9
console.log(JercicioIndice4[3][1]);


JercicioIndice4[0][0] = "¡"
console.log(JercicioIndice4[0][0]);

JercicioIndice4[1].splice(2,2);
console.log(JercicioIndice4[1][2]);

JercicioIndice4[0].splice(2,2);
console.log(JercicioIndice4[0][2]);

JercicioIndice4[3].splice(2,2);
console.log(JercicioIndice4[3][2]);


