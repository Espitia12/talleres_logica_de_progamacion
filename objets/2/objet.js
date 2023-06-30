/*Taller de Ejercicios
1. Crea una clase llamada "Perro" con un atributo llamado "nombre". Agrega un método llamado ladrar() que
imprima en la consola "¡Woof!" junto al nombre del perro.
2. Crea una instancia de la clase "Perro" llamada "miPerro" con un nombre de tu elección. Llama al método
ladrar() de la instancia.
3. Crea una clase llamada "CuentaBancaria" con atributos "saldo" (inicializado en 0) y "titular". Agrega un
método llamado depositar(cantidad) que sume la cantidad proporcionada al saldo actual.
4. Crea una instancia de la clase "CuentaBancaria" llamada "miCuenta" con un titular de tu elección.
Deposita 100 en la cuenta llamando al método depositar().
5. Agrega un método llamado retirar(cantidad) a la clase "CuentaBancaria" que reste la cantidad
proporcionada del saldo actual. Asegúrate de verificar si hay suficiente saldo antes de realizar la
operación.
6. Llama al método retirar() en la instancia "miCuenta" para retirar 50. Imprime en la consola el saldo actual
después de la operación.
*/

/*
class perro{


    constructor(nombre){
        this.nombre = nombre
    }
    ladrar(){
        console.log('¡Woof! ladro ' + this.nombre );
    }
}

const MiPerro = new perro('max');


granPerro.ladrar()
*/

/*
class CuentaBancaria{


    constructor(saldo,titular){
        this.saldo = saldo
        this.titular = titular
    }
    depositar(cantidad){
        this.saldo += cantidad
        console.log(this.titular + " su cantidad es " + this.saldo);
    }
    retirar(cantidad){
        if (cantidad > this.saldo) {
            console.log("saldo insuficiente");

        }else{
            this.saldo -= cantidad
            console.log("se ha resalizado el retiro, saldo actual: " + this.saldo);
        }
    }


}

const micuanta = new CuentaBancaria(100,"pedro");

micuanta.retirar(50)
*/