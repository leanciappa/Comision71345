//Definimos un objeto

/* const persona = {nombre: "Manuel", apellido: "fernandez", dni:1112333334, direccion: "pedrito", casado: false} */
/* console.log(persona) */

//Accediendo a los valores
/* console.log(persona.apellido+" "+persona.nombre) */
/*  */
/* function estaCasado(valor){ */
/*     if (valor ==true){ */
/*         console.log("Está casado") */
/*     } else { */
/*         console.log ("Está soltero") */
/*     } */
/* } */
/*  */
/* estaCasado (persona.casado) */
/*  */
/* const bebida = {id:1, nombre: "cocacola", precio: 1600}; */
/* console.log(bebida.nombre + " $ " + bebida.precio); */
/*  */


//Accediendo a los valores - Opción #2
/* const bebida = { id:1, nombre: "coca cola", precio: 1600}; */
/* console.log (bebida["nombre"]+ " $" + bebida["precio"]) */


//Modificando valores de un objeto
/* const bebida = {id:1, nombre: "coca cola", precio: 1800}; */
/* console.log(bebida); */
/* bebida.precio=40000; */
/* bebida.nombre = "el elisir" */
/*  */
/* console.log(bebida) */

//Constructores


/* function usuarioIG(dato1, dato2, dato3){ */
/*      */
/*     if(dato1==""){ */
/*         this.nombre = "[SIN NOMBRE]" */
/*     } else{ */
/*         this.nombre = dato1; */
/*     } */
/*  */
/*     if( dato2== undefined || dato2==""){ */
/*         this.usuario = "[SIN NOMBRE]" */
/*     } else{ */
/*         this.usuario = dato2; */
/*     } */
/*      */
/*     if( dato3==undefined){ */
/*     this.usuario = 0 */
/*     } else{ */
/*     this.usuario = dato3; */
/*     } */
/* } */
/*  */
/* const usuario1 = new usuarioIG ("lionel messi", "leomessi", 150000) */
/* console.log(usuario1) */

//Crear un construcor a partir de un objeto

/* const bebida = {id:1, nombre: "Coca cola", precio:1600.1235}; */
/*  */
/* function crearBebida(objeto){ */
/*     this.idProducto =objeto.id; */
/*     this.nombreProducto = objeto.nombre.toUpperCase(); */
/*     this.precioSinIva = objeto.precio */
/*     this.precioConIva = this.precioSinIva*1.21 */
/* } */
/*  */
/* const bebida1 = new crearBebida(bebida); */
/* const bebida2 = new crearBebida({id:2, nombre: "manaos", precio:1000.1235}) */
/* console.log(bebida1) */

//Métodos de los objetos

/* let texto = "    javascript   "; */
/* console.log(texto); */
/* console.log(texto.length); // Acceder a la propiedad length -> devuelve la longitud del texto */
/* console.log(texto.toUpperCase()) // Acceder al método toUpperCase() -> conviente todo a mayúscula */
/* console.log(texto.trim()); // Acceder al método to trim() -> recorta los espacios adelante y atras del texto ingresado */
/*  */
/* texto = formatearText */
/*  */
/*  */
/* function formatearTexto(texto){ */
/*     return texto.trim().toUpperCase(); */
/* } */


// Creando metodos a un constructor

/* function Persona (nombre, edad, calle){ */
/*     this.nombre = nombre; */
/*     this.edad = edad; */
/*     this.calle = calle; */
/*     this.saludar = function(){console.log("Hola"+this.nombre )} */
/* } */
/*  */
/* const persona1 = new Persona("leandro", 34, "juan b justo") */
/*  */
/* persona1.saludar() */


// Operador In y for in

/* const persona1= {nombre: "Leandrito", edad:25, direccion:"av siempre viva"}; */
/* console.log("edad" in persona1) // "In" sirve para validar si existe una propiedad en un objeto (true/false) */
/* console.log("dni" in persona1) */
/*  */
/* for (let propiedad in persona1){ */
/*     console.log(persona1[propiedad]) */
/*     console.log(propiedad + "=>" + persona1[propiedad]) */
/* } */

// Clases
// Crear una clase persona

/* class Persona{ */
/*     //Defino las propiedades de la clase */
/*     constructor(nombre, edad, calle){ */
/*         this.nombre = nombre; */
/*         this.edad = edad; */
/*         this.calle = calle */
/*     } */
/*     //Definir los metodos de la clase */
/*     saludar= () =>{ */
/*         console.log("Hola soy " + this.nombre) */
/*     } */
/*  */
/*     pasarMayus = ()=> { */
/*         this.nombre = this.nombre.toUpperCase() */
/*     } */
/* } */
/*  */
/* const persona1 = new Persona("gabriel", 25, "juan de gay 1000") */
/*  */
/* console.log(persona1) */
/* persona1.saludar() */


// Ejemplo coder

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }

    sumaIva(){
        return this.precio = this.precio*1.21;
    }
    vender(){
        this.vendido = true
    }
}

const producto1 = new Producto ("papa", 1234)
console.log(producto1.sumaIva().toFixed(2))