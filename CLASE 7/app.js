// Ejemplo

/* let total = 0; */
/*  */
/* for (let i=1; i<=10; i++){ */
/*     total +=i; */
/* } */
/*  */
/* console.log (total) */

//Ejemplo de abstracción
//1 Entrada de datos // 2-Proceso de datos // 3 sAlida de datos
/* function sumarRango (valorMin, valorMax){ */
/*     let total = 0; */
/*  */
/*     for (let i=valorMin; i<=valorMax; i++){ */
/*     total +=i; */
/*     } */
/*     return total; */
/* } */
/*  */
/* console.log(sumarRango(1,10)) // 55 */

// Funciones de orden superior
//Ejemplo 1
/* function mayorQue (n){ */
/*     return (m) => m>n  */
/* } */
/*  */
/* let mayorQue10 = mayorQue(10); // valor => valor >10 => nayorQue10 es una función flecha */
/* console.log(mayorQue10(10)); */

//Ejemplo 2

/* function asignarOperacion(tipoOperacion){ */
/*     if (tipoOperacion == "suma"){ */
/*         return (a,b) => a+b; */
/*     } else if (tipoOperacion =="resta"){ */
/*         return (a,b) => a-b */
/*     } else if (tipoOperacion == "multiplicacion"){ */
/*         return (a, b ) => a*b; */
/*     } else if (tipoOperacion == "division"){ */
/*         return (a,b) => a/b; */
/*     } else{ */
/*         return 0; */
/*     } */
/* } */
/*  */
/* const operacionSuma =  asignarOperacion("suma") // (a,b) => a+b */
/* console.log(operacionSuma (10,5)) // (10,5) => 10+5 => 15 */
/* const operacionResta = asignarOperacion ("resta") */
/* console.log(operacionResta(10,5)) */
/*  */
/*  */


// Función de orden superio que recibe una función como parametro

/* const array1 =[1,2,3,4] */
/*  */
/* function porCadaUno (array1, unaFuncion){ */
/*     for (const elemento of array1) { */
/*         unaFuncion (elemento) */
/*     } */
/* } */
/*  */
/* porCadaUno(array1, console.log) */

/* const nombres = ["mauro", "florencia", "marcelo", "carlos"] */
/* porCadaUno(nombres, alert) */
/*  */
// Ejemplo 3

/* let total =0; */
/* function acumular (valor){ */
/*     total+=valor */
/* } */
/*  */
/* const numeros =[1,2,3,4] */
/*  */
/*  */
/* function porCadaUno (array1, unaFuncion){ */
/*     for (const elemento of array1) { */
/*         unaFuncion (elemento) */
/*     } */
/* } */
/*  */
/* porCadaUno (numeros, acumular); */
/* console.log(total) */


//Ejemplo 4

/* const numerosDoble=[]; */
/* const unaFuncion = (valor)=>{ */
/*     numerosDoble.push(valor*2) */
/* } */
/* const numeros=[1,2,3] */
/*  */
/*  */
/* function porCadaUno (array1, unaFuncion){ */
/*     for (const elemento of array1) { */
/*         unaFuncion (elemento) */
/*     } */
/* } */
/*  */
/* porCadaUno (numeros, unaFuncion) */
/* console.log(numerosDoble) */

// Métodos de busqueda y transformación
// forEach => recorre cada uno de los elementos del array con una función
/* const numeros =[1,2,3,4,5] */
/* numeros.forEach(valor =>{ */
/*     console.log(valor) */
/* }) */



const cursos = [{id:1, nombre: "Desarrollo web", precio: 1000},
                {id:2, nombre: "javascrip", precio: 1200},
                {id:3, nombre: "html", precio: 800}

]
//find()

/* let curso1 = cursos.find(item => item.nombre == "html") */
/* console.log(curso1) */
/*  */

// filter devuelve un arrayq eu concida con la condicion, caso contrario devuelve un array vacio

/* const cursoQuePuedoPagar = cursos.filter(item=> item.precio<=1000) */
/* console.log(cursoQuePuedoPagar) */

// Some -> devuelve true o false en caso que encuentre un elemento

/* let producto = cursos.some(item => item.nombre == "Desarrollo web"); */
/* console.log(producto) */

// MAP -> crea un nuevo array con la posibilidad de transformar los valores

/* const cursosIVA = cursos.map (item => ({id:item.id, nombre:item.nombre.toUpperCase(), precio:item.precio*1.21})) */
/* console.log(cursosIVA) */
/*  */


//REDUCE -> devuelve un unico valor sumando todos los elementos del array

/* const numeros = [1,2,3,4,5] */
/*  */
/* const total = numeros.reduce((acumulador, item) => acumulador += item, 0); */
/* console.log(total) */

// SORT -> ORDEN UN ARRAY DE ACUERDO A UNA CONDICION QUE PONGAMOS
/* const numeros = [2, 50, 24, 4] */
/* numeros.sort((a,b)=> a-b); // ordena de forma ascendete */
/* console.log(numeros) */