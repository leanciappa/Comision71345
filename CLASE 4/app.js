//Declaramos una función 

/* function saludar (){ */
/*     console.log ("Hola Coders") */
/* } */

//llamar o invocar una función

/* saludar(); */

//Declaramos un función con parámetros

/* function nombreCompleto (nombre, apellido){ */
/*     alert("Hola: "+nombre+" "+apellido) */
/* } */
/*  */
/*  */
/* let nombre1 = prompt("Ingrese su nombre") */
/* let apellido1 = prompt ("ingrese su apellido") */
/*  */
/* nombreCompleto(nombre1, apellido1) */


//Definir una función que devuelva un valor (retunr)

/* function sumar (numero1, numero2){ */
/*    return numero1+numero2 */
/* } */
/*  */
/* let ingresar = parseFloat(prompt ("Ingrese un numero")) */
/* let ingresar2 = parseFloat(prompt("Ingrese un valor2")) */
/*  */
/* //alert(sumar(ingresar, ingresar2)) */
/*  */
/* // ejemplo de asignar un valor a una variable utilizando una función */
/* let total = sumar(ingresar, ingresar2) + (sumar(ingresar, ingresar2))*10 */
/* console.log(total) */



//Funcionas anonimas -> se declaran como constantes.

/* const suma = function (a, b) {return a+b} */
/* const resta = function (a, b) {return a-b} */
/*  */
/* console.log (suma(15,20)) */
/* console.log (resta(15,5)) */

// Funciones Flecha

/* const suma = (a,b) => {return a+b} */
/* const resta = (a, b) => a-b; */
/*  */
/* console.log(suma(15,20)) */
/* console.log(suma(20,5)) */
/*  */


const suma = (valor1, valor2) =>{
    console.log ("Inicio de la función");
    let resultado = valor1 + valor2;
    console.log("Fin de la función");
    return resultado;
}

let calculo = suma(30,50);
console.log(calculo)