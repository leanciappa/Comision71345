/* if (true){ */
/*     console.log("vas a ver este mensaje") */
/* } */

// let edad = 15;
// 
// if (edad >=18){
// 
    // console.log("Eres mayor de edad")
// } else {
    // console.log ("eres menor de edad ")
// }

/* let edad = prompt ("Ingrese su edad") */
/* if (edad >= 18){ */
/*     alert("Usted es mayor de edad") */
/* } else { */
/*     alert ("Usted es menor de edad") */
/* } */     


/* let nombreDeUsuario = prompt ("Ingrese el nombre del usuario") */
/*  */
/* if (nombreDeUsuario==""){ */
/*     alert("No ingresó el nombre de usuario")     */
/* } else{ */
/*     alert("Nombre de usuario ingresado: "+nombreDeUsuario) */
/* } */


/* let numero = prompt ("Ingrese un número") */
/*  */
/* if (numero<=10){ */
/*     alert ("El número ingresado es menor a 10") */
/* }else if (numero<20){ */
/*     alert ("el número ingresado es mayor a 10 pero menor a 20" ) */
/* } else { */
/*     alert ("El número es mayor a 20") */
/* } */

/* // para detectar si el valor ingresado es nulo */
/* let producto1 = prompt("Ingrese un número"); */
/* console.log(producto1); */
/*  */
/* if (producto1 == null || producto1==""){ */
/*     alert ("Usted no ingresó un nada"); */
/*     console.log(producto1); */
/* } else{ */
/*     alert ("El valor ingresado es: "+producto1) */
/* } */

// Aplicación de condicional

// Ejemplo 1

/* let producto1 = parseFloat(prompt("Ingrese el importe del producto #1")) */
/* let producto2 = parseFloat(prompt("Ingrese el importe del producto #2")) */
/*  */
/* let total = producto1+producto2 */
/*  */
/* if (total > 10000){ */
/*     let totalDescuento= total- (total*0.1) */
/*     alert("El precio final con el descuento del 10% es: "+totalDescuento) */
/* } else { */
/*     alert ("El total sin descuento es: "+total) */
/* } */

// Ejemplo 2

// Ingresar 2 valores y devolver el total aplicando las siguientes condiciones
// -    SI SUPERA LOS 100000 PESOS, REALIZAR UN DESCUENTO DE 10%
// -    SI SUPERA LOS 200000 PESOS, REALIZAR UN DESCUENTO DE 15%
// -    SI SUPERA LOS 300000 PESOS, REALIZAR UN DESCUENTO DE 20%
// -    SI EL USUARIO, TIENE EL CUPON DE DESCUENTO "CUPON10" SE LE ASINGA UN 10" ADICIONAL


let producto1 = parseFloat (prompt("ingrese el precio del producto N1"))
let producto2 = parseFloat (prompt("Ingrese el precio del producto N2"))
let cupon
let total

let totalSinDescuento = producto1+producto2

if ( totalSinDescuento> 100000 && totalSinDescuento<200000){
    total = totalSinDescuento * 0.9
    cupon = prompt ("Ingrese el cupon de descuento")
        if (cupon == "CUPON10"){
            total = total*0.9
            alert (total)
        } else {
            alert (total)
        }
} else if (totalSinDescuento > 200000 && totalSinDescuento<300000){
    total = totalSinDescuento * 0.85
    cupon = prompt ("Ingrese el cupon de descuento")
    if (cupon == "CUPON10"){
        total = total *0.9
        alert (total)
    } else {
        alert (total)
    } 
} else if (totalSinDescuento > 300000){
    total = totalSinDescuento*0.8
    cupon = prompt ("Ingrese el cupon de descuento")
        if (cupon == "CUPON10"){
            total = total*0.9
            alert (total)
        } else{
            alert (total)
        }
} else (
    alert (totalSinDescuento)
)




