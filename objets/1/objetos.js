/*Taller
1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo precio. Los
productos son:
Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el objeto anterior con su
respectivo producto.

let productos = { Papa: 3000, Arroz: 2500, Lentejas: 3000, Aceite: 2000 };

for (clave in productos) {
  console.log("clave", clave);
  console.log("valor", productos[clave]);
  console.log("--------");
}



let objeto = { vacio: "()", lleno: "(°)", fin: "end" };

for (clave in objeto) {
  console.log("clave", clave);
  console.log("valor", objeto[clave]);
  console.log("--------");
}




let objeto = { password: "admin30905", rol: "admin", edad: 20 };

objeto.password = "user_7833";
objeto.rol = "user";
objeto.edad = 34;


for (clave in objeto) {
  console.log("clave", clave);
  console.log("valor", objeto[clave]);
  console.log("--------");
}



let Objecto = { dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50 };

for (clave in Objecto) {
  if (Objecto[clave] % 2 == 0) {
    console.log("clave", clave);
    console.log("valor", Objecto[clave]);
    console.log("--------");
  }
}




let Objecto = { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552:
"inhabilitado", 438276: "habilitado" } 


for (clave in Objecto) {
    if (Objecto[clave] == "habilitado") {
      console.log("clave", clave);
      console.log("valor", Objecto[clave]);
      console.log("--------");
    }
}
  
*/

let objeto = { numeros: [45, 78, 22, 89, 8] };

for (clave in objeto) {
  for (let i = 0; i < objeto[clave].length; i++) {
    console.log(objeto[clave][i]);
  }
}
