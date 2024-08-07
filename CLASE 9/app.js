//Acceder al body de un página
/* console.log(document.body) */

//Accediendo al primer elemento hijo del body de la página
/* let titulo = document.body.children[0] */
/* console.log(titulo) */

// Hacer referencia al elemento párrafo desde los nodos
/* let contenedor = document.body.children[3]; */
/* console.log(contenedor.children); */
/* let parrafo = contenedor.children[0]; */
/* console.log(parrafo) */

//Consola
/* console.dir(document.body) */

//Accediendo a elementos HTML por ID

/* let contenedor = document.getElementById("contenedor") */
/* let parrafo = document.getElementById("parrafo") */
/* console.log(contenedor) */
/* console.log(parrafo) */
/* console.log(parrafo.innerHTML) */
/* console.log(parrafo.innerText) */
/* parrafo.innerText = "Hola mundo" */
/* parrafo.innerHTML = "<b> Hola mundo</b>" */
/* parrafo.style.padding = "30px" */
/* parrafo.style.color = "blue" */
/* parrafo.className = "display-1" */
/* contenedor.className ="bg-info-subtle" */

//Accediendo a elementos por su nombre de clase

/* let paisesClase = document.getElementsByClassName("paises") */
/* console.log(paisesClase) */

//Accediendo a nodos por su indice
/* paisesClase[0].innerHTML="Peru"; */
/* paisesClase[1].innerHTML="Uruguay"; */


//Accediendo a elementos por su nombre de etiqueta
/* let paisesEtiqueta = document.getElementsByTagName("li") */
/* console.log(paisesEtiqueta) */
/*  */
/* for (const pais of paisesEtiqueta){ */
/*     pais.style.fontStyle ="italic" */
/*     console.log(pais.innerHTML) */
/* } */
/*  */
/* document.getElementById ("academia").className ="text-warning" */


// Crear un nuevo nodo y adjuntarlo al body
/*  */
/* let nuevoParrafo = document.createElement("p"); */
/* nuevoParrafo.innerHTML ="Curso de javascript"; */
/* nuevoParrafo.className = "display-3 text-danger bg-light" */
/*  */
/* let nuevoParrafo2 = document.createElement("p"); */
/* nuevoParrafo2.innerHTML ="Curso de javascript"; */
/* nuevoParrafo2.className = "display-3 text-danger bg-light" */
/*  */
/*  */
/* document.body.append(nuevoParrafo); //Append agrega el elemento al final */
/* document.body.prepend(nuevoParrafo2) //prepend agrega el elemento al inicio */

//Como agrego un nuevo pais al final de mi lista de paises

/* let paises = document.getElementById("paises") */ // ubica al padre
/* let nuevoPais = document.createElement ("li") */// crea un elemento li
/* nuevoPais.innerHTML ="Venezuela" */ // al nuevo elemento Li le asigna un valor
/* paises.append(nuevoPais) */ // al elemento padre "paises" le agrega un hijo "nuevoPais"
/* paises.remove() */ //remueve el nodo

//Accediendo y modificando campos de texto de un form
/* let nombre = document.getElementById("nombre") */
/* console.log(nombre.value) */
/* nombre.value = "Pedro" */
/* document.getElementById("email").value= "sdfsdf@sdfsd.com" */


//Creamos nodos a partir de un array

const listaInfusiones =["te", "cafe", "mate", "chocolate caliente"]
let infusiones = document.getElementById("infusiones") // ubica el nodo y lo guarda en una variable

for (const item of listaInfusiones){
    let li = document.createElement("li") // crea el nodo hijo y lo asigna a una variable
    li.innerHTML = item; // modifica el html del nodo hijo creado
    infusiones.appendChild(li); // agrega el nodo hijo al nodo padre
}


// Plantillas literales

let producto =[{ id:1, nombre: "coca cola", precio: 1800, imagen: "https://www.coca-cola.com/content/dam/onexp/ar/es/coca-cola/es_coca-cola-sabor-original_prod_orginal-bottle_750x750_v1.jpg/width2674.jpg"}, { id:1, nombre: "coca cola", precio: 1800, imagen: "https://www.coca-cola.com/content/dam/onexp/ar/es/coca-cola/es_coca-cola-sabor-original_prod_orginal-bottle_750x750_v1.jpg/width2674.jpg"}]
//let mensaje1 = "#1 ID:" + producto.id + " - nombre: "+ producto.nombre + " - Precio: $" + producto.precio;
//console.log(mensaje1)

//let mensaje2 = `#2 ID: ${producto.id} - nombre: ${producto.nombre} - Precio: $ ${(producto.precio*1.1).toFixed(2)}`
//console.log(mensaje2)


for (const el of producto) {
    let contenido = `   
                    <img src=" ${el.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> ${el.nombre} </h5>
                        <p class="card-text"> ${el.precio} </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>`


let elemento = document.createElement("div")
elemento.className = "card"
elemento.style.width = "18rem"
elemento.innerHTML = contenido
document.body.appendChild(elemento)
    
}

