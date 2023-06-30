/* 4. Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en él. */

function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }

  return true;
}

function numerosPrimos(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    let numero = arreglo[i];
    if (esPrimo(numero)) {
      console.log(numero);
    }
  }
}

let numeros = [1,3, 12, 4, 5, 61, 77, 7, 13, 9];
numerosPrimos(numeros);