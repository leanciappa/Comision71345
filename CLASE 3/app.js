// for

/* alert ("Inicio") */
/*  */
/* for(let i=0; i<10; i++){ */
/*     alert(i) */
/* } */
/*  */
/* alert ("fin") */


// Ejemplo de iteración e impresion de la tabla completa en el alert
/* let numero = parseInt(prompt ("Ingrese el número a multiplicar")) */
/* let impresion2 ="" */
/*  */
/* for(let i=0; i<10; i++){ */
/*     let resultado = numero*i */
/*     impresion2 = impresion2 + numero + "X"+i+"="+resultado+"\n" */
/* } */
/*  */
/* alert(impresion2) */


//Sentencia Break

// let numero = parseInt(prompt ("Ingrese el número a multiplicar"))
// let impresion2 =""
// 
// for(let i=0; i<10; i++){ 
    // let resultado = numero*i 
    // impresion2 = impresion2 + numero + "X"+i+"="+resultado+"\n"
    // if (i==5){
        // break;
    // }
// } 

// alert(impresion2)


//Sentencia Continue

// let numero = parseInt(prompt ("Ingrese el número a multiplicar"))
// let impresion2 =""
// 
// for(let i=0; i<10; i++){ 
    // if (i==5){
        // continue;
    // }
    // let resultado = numero*i 
    // impresion2 = impresion2 + numero + "X"+i+"="+resultado+"\n"
    // 
    // 
    // 
// } 
// 
// alert(impresion2)


//While (chiclo condicional, siempre y cuando se cumpla la condición se ejecutará permanentemente)

// let ingresar = prompt("Ingrese un nombre").toUpperCase()
// 
// while (ingresar != "ESC"){
    // alert("Usted ingresó: "+ingresar)
    // ingresar = prompt ("Ingrese nuevamente un nombre").toUpperCase()
// }
//


//DO-WHILE

let ingresar

do{
    ingresar = parseInt(prompt ("Ingresar un nombre"))
} while (ingresar >1 && ingresar<5)