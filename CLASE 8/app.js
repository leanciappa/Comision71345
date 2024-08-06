//Metodo de strings

/* let texto = "    Curso de DW    " */
/* console.log(texto); */
/* console.log(texto.length); */
/*  */
/* let texto2=texto.replace("DW", "Js"); // Remplaza un texto por otro y devuelve un nuevo string */
/* console.log(texto2); */
/*  */
/* texto2=texto.trimStart() // TrimStart recorte los espacios vacios al principio del texto */
/* console.log(texto2) */
/*  */
/* texto2=texto.trimEnd() // TrimEnd recorta los espacios vacios al final del texto */
/* console.log(texto2) */
/*  */
/* let nombre = prompt ("ingrese su nombre:").trim().toUpperCase() */
/* let apellido = prompt("ingrese su apellido: ").trim().toUpperCase() */
/* let mensaje = "Hola, " + nombre + " " + apellido; */
/* alert(mensaje) */


//Metodo Math
/* console.log(Math.E.toFixed(3)) */
/* console.log(Math.PI) */
/* console.log(Math.max(55,13,0, -25, 93,4)) // devuelve el mayor de una serie de números */
/* console.log(Math.min(55,12,0,-25,3,6)) // devuelve el menor de una serie de números */
/* console.log(Math.max(55, Infinity, 69, 2, 5)) // distingue el +infinito */
/* console.log(Math.min(55, -Infinity, 69, 2, 5)) // Distingue el -infinito */

//Ceil. floor, round

/* const valor = 9.5; */
/* console.log("ceil:" + Math.ceil(valor)) // Techo */
/* console.log("Floor:" + Math.floor(valor)) // Piso */
/* console.log("Floor:" + Math.round(valor)) //Redondeo */


//Square Root - Raiz cuadrada

/* console.log(Math.sqrt(9)) */
/* console.log(Math.sqrt(25)) */
/* console.log(Math.cbrt(8)) */


//Random

/* console.log(Math.random());  *///genero números random entre 0 y 0.999
/* console.log(Math.random()*2) */ // genera números random entre 0 y 1.99999

//Ejemplo
//Creamos un array de participantes

/* const participantesGH=["Nico", "Dario", "Ema", "Bauti"] */
/*  */
/* let posicionGanador = Math.round(Math.random()*participantesGH.length); */
/* console.log(posicionGanador); */
/* alert("Ganador de GH:  "+participantesGH[posicionGanador]) */


//Objeto date

/* const fecha = new Date() */
/* const fecha2 = new Date(2020, 4, 21) */
/* const fecha2 = new Date(2020, 4, 21, 23, 25, 2) */
/* console.log(fecha2) */
/* console.log(fecha2.getSeconds()) */
/* console.log(fecha2.getMilliseconds()) */
/*  */
/* const fecha = new Date("2023, may, 21"); */
/* console.log(fecha) */



// Obteniendo los valores por separado

/* let dia = fecha.getDate(); */
/* let mes = fecha.getMonth()+1; */
/* let anio = fecha.getFullYear(); */
/* console.log(dia) */
/* console.log(mes) */
/* console.log(anio) */


// Distintas formas de representación de una fecha

/* const fecha=new Date() */
/*  */
/*  */
/* console.log(fecha.toDateString()) */
/* console.log(fecha.toLocaleDateString()) */
/* console.log(fecha.toLocaleString().replaceAll("/","-")) */
/* console.log(fecha.toTimeString()) */
/*  */
/*  */
/* let dia = fecha.getDate(); */
/* let mes = fecha.getMonth()+1; */
/* let anio = fecha.getFullYear(); */
/* console.log(dia+"-"+mes+"-"+anio) */


// Ejemplo calculo de fechas

/* let nombre = prompt("Ingrese su nombre") */
/* let dia = parseInt(prompt("iNGRESE SU DÍA DE CUMPLEAÑOS")) */
/* let mes = parseInt(prompt("iNGRESE SU mes DE CUMPLEAÑOS"))-1 */
/*  */
/* const fechaActual = new Date(); */
/* const fechaCumple = new Date(2024, mes, dia) */
/*  */
/* let resultado = (fechaCumple - fechaActual) */
/* console.log(resultado) */
/*  */
/* const milisegundos = 60*60*24*1000 */
/* console.log(Math.round(resultado/milisegundos)) */
/*  */


//Ejemplo de diferencias entre fechas

const inicio = new Date()

for (let i=0; i<10000; i++){
    console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardo: "+ (final-inicio) + " milisegundos")