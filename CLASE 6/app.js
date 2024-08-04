// Definir un array

/* const lista = ["juancito", 1234234, false]; */
/* console.log(lista) */
/* const lista1 = ["juancit", 23234234, "Av. Siempre viva", ["FORD", "CHEVROLET", "FERRARI"], {id:1, nombre: " tom ford ", tipo: "eau de parfum" }] */
/* console.log (lista1) */
/*  */

//Accediendo a los valores de un array
/* let resultado = lista[1]+ lista[1] */
/* console.log(resultado) */
/* let resultado2 = lista[0] + lista1[4].nombre + " " + lista1[3][1] */
/* console.log(resultado2) */
/* lista1[4].nombre = "carlos" // modificamos la propiedad de un objeto dentro de un array */
/* let resultado3 = lista[0] + lista1[4].nombre + " " + lista1[3][1] */
/* console.log(resultado3) */


//Recorrer un array

/* const numeros = [10,9, 8,5,1 ]; */
/* let suma =0; */
/*  */
/* for (let i=0; i<5; i++){ */
/*     suma = suma+numeros[i] */
/*  */
/* } */
/*  */
/* console.log(suma) */
/*  */
/* // Propiedad length */
/*  */
/* console.log(numeros.length) */
/*  */
/* for (let i=0; i<numeros.length; i++){ */
/*     console.log(numeros[i]) */
/* } */
/*  */
/*  */


/* const nombres = ["laura", "roberto", "marcelo"] */

// Metodo push (permite agregar elementos al final de un array)

/* nombres.push("juan") */
/* console.log(nombres) */
/*  */

// Metodo unshift (agregar elementos al inicio de un array)

/* nombres.unshift("pedro") */
/* nombres.unshift("carlos") */
/* console.log(nombres) */

// Metodo pop (permite eliminar el último elemento del array y lo devuelve)

/* let returnPop = nombres.pop() */
/* console.log (nombres) */
/* console.log(returnPop) */
/*  */
// Metodo shift (permite eliminar el primer elemento del array y lo devuelve)

/* let returnShift = nombres.shift() */
/* console.log(nombres) */
/* console.log(returnShift) */


// Metodo splice (elimina uno o varios elementos a partir de una posición de un array)

/* nombres.splice(2,1) */
/* console.log(nombres) */

// Metodo joint (devuelve un string con todos los elementos del array. Se puede colocar un caracter de separador)

/* console.log(nombres.join()) */
/* console.log(nombres.join("/")) */

//Metodo concat (concatena 2 array y devuelve un tercero)

/* const perros = ["pupi", "wolfie"] */
/* const gatos = ["misha", "gata"] */
/* const animales = perros.concat(gatos) */
/* console.log(animales) */


// Metodo slice (devuelve otro array indicando el incio y el final de lo que queremos tomar)

/* const autos = ["renault", "ford", "fiat", "chery"] */
/* const autos2 = autos.slice(2,4) */
/*  */
/* console.log(autos2) */

// Metodo IndexOf (devuelve el indice de una elemento del array)

/* const nombres2 = ["leandro", "cristian", "juan", "pedro"] */
/* console.log (nombres2.indexOf("juan")) */

//Includes (devuelve "true o false" si encuentra un elemento buscado dentro de un array)

/* const nombres=["rita", "pedro", "juan", "carlos"] */
/*  */
/* console.log(nombres.includes("pedro")) */
/* console.log(nombres.includes ("roberto")) */

//Reverse (invierte el array, pero destruye el indice de los elementos)

/* const nombres=["rita", "pedro", "juan", "carlos"] */
/* console.log(nombres) */
/* nombres.reverse() */
/* console.log(nombres) */


// ejemplo aplicado  - agregar elementos a un arraym, concatenarlos con otro existente e imprimirlos separados por un guión

//Ejemplo 1
/* const arrayNombres =[] */
/* const maximo = 5; */
/*  */
/* do{ */
/*     let nombreIngresado = prompt ("Ingrese un nombre:") */
/*     arrayNombres.push(nombreIngresado) */
/*     console.log("Nombre Agregad: "+nombreIngresado) */
/* } while (arrayNombres.length <= maximo) */
/*  */
/* const nuevosNombres = ["Maruo", "Lisandro"] */
/* const listaFinal=arrayNombres.concat(nuevosNombres) */
/* alert(listaFinal.join(" - ")) */
/*  */


// Ejemplo 2 - buscar un objeto y eliminarlo

/* const nombres=["pepe", "juan", "carlos", "roberto"] */
/* console.log(nombres) */
/*  */
/* const eliminar = (nombre) => { */
/*     let index = nombres.indexOf(nombre) */
/*     if (index != -1){ */
/*         nombres.splice(index, 1) */
/*     } else console.log ("El nombre buscado no se encuentra") */
/* } */
/*  */
/* eliminar("pepes") */
/* console.log(nombres) */
/*  */
/*  */


//Ejemplo 3 - array de objetos

/* let bebida1 = {id:1, nombre: "coca", precio:2800} */
/*  */
/* const bebidas = [bebida1, {id:2, nombre:"sprite", precio: 2500}] */
/*  */
/* bebidas.push({id:3, nombre:"fanta", precio: 2700}) */
/* console.log(bebidas) */

// Recorre un array "for of"

/* const nombres=["pepe", "juan", "carlos", "roberto"] */
/* for (const item of nombres) { */
/*     console.log(item) */
/* } */

//Ejemplo con una "clase "


/* class Producto { */
/*     constructor(nombre, precio){ */
/*         this.name = nombre.toUpperCase(); */
/*         this.precio = parseFloat(precio); */
/*     } */
/*     sumaIVa(){ */
/*         this.precio = this.precio*1.21; */
/*     } */
/* } */
/*  */
/* const productos =[] */
/*  */
/* productos.push(new Producto("Coca", 1000)) */
/* productos.push(new Producto("fanta", 2000)) */
/* productos.push(new Producto("pepsi", 4000)) */
/*  */
/* console.log(productos) */
/*  */
/* for (const producto of productos) { */
/*     producto.sumaIVa() */
/*      */
/* } */
/*  */
/* console.log(productos) */