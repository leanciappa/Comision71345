alert("Hola Chicos");

//un comentario
/*Un comentario con más

de una linea*/

//Declarando Variables

let nombre //Declaro la variable nombre
nombre = "manuel" // asignar el valor "manuel" a la variable nombre
let nombre2 = "pirulo" // Declarar y asignar
const apellido = "pirulo rodriguez"
alert (nombre)
console.log (nombre)


//Operaciones básicas (numéricas)

let numeroA = 10;
let numeroB = 20;
const numeroC = 30;

// suma

let resultado = numeroA + numeroB;
alert(resultado)

// resta

let resultado2 = numeroA - numeroB;
alert(resultado2)

//multiplicación
let resultado3 = numeroA * numeroB

//división

let resultado4 = numeroA / numeroB

//resto

let resultado5 = numeroA % numeroB

//Operaciones basicas texto

let textoA = "coder";
let textoB = "house";
const blanco = " ";
const comision = 71345;
const curso = "js"

/* let texto1 = textoA + textoB */
/* alert (texto1) */

/* let texto2 = textoA + blanco +textoB */
/* alert(texto2) */ 

/* let texto3 = textoA +" " + textoB */
/* alert (texto3) */

/* let texto4 = comision+ " - "+curso */
/* alert(texto4) */
/* let texto5 = "Coder" + textoB */
/* alert (texto5) */



let nombreIngresado = prompt ("Ingrese su nombre y apellido:");
/* alert (nombreIngresado) */
/* alert("Hola,"+nombreIngresado) */
/* let mensaje = "Hola, " + nombreIngresado + "!" */
/* alert (mensaje) */


/* let nombreProducto = prompt ("Ingrese el Nombre del producto:"); */
/* let precioProducto = prompt ("Ingrese el precio del producto en pesos:"); */
/* let salida = nombreProducto + " $" + precioProducto; */
/* alert (salida); */

let nombreIMC = prompt ("Ingrese su nombre")
let pesoImc = parseFloat(prompt("Ingrese su peso en kg"))
let alturaIMC = parseFloat(prompt("Ingrese su altura en m"))

let IMC = pesoImc/(alturaIMC*alturaIMC)
alert (nombreIMC+" su imc es:"+IMC.toFixed(2))
