//Incorporando funciones


function saludar (){
    console.log("Hola benancio")
    let nombre = document.getElementById("nombre")
    console.log("Hola, "+nombre.value)
}

function despedir(){
    let nombre = document.getElementById("nombre");
    console.log("Chau, "+ nombre.value + "!")
}


//Opción #1 - con "addEvenListener"
/* let boton = document.getElementById("boton"); */
/* boton.addEventListener("click", saludar) */
/* boton.addEventListener("click", ()=> {console.log("Hola Feo")}) */
/*  */
/* document.getElementById("boton2").addEventListener("dblclick",despedir) */

//Opcion #2 => propiedad onclick
/* let boton = document.getElementById("boton") */
//boton.onclick=saludar; // apunta a una función
/* boton.onclck = () => {alert ("Hola a todos")}; */


//Opcion #3 => definir el atributo "onclick" pero en el HTML


// Eventos del mouse
/* let boton = document.getElementById("boton") */
/*  */
/* boton.addEventListener("mouseup", ()=>{console.log("mouse up")}) */
/* boton.addEventListener("mousedown", ()=>{console.log("Mouse down")}) */
/* boton.addEventListener("mouseover", ()=>{console.log("Mouse over")}) */
/* boton.addEventListener("mouseout", ()=>{console.log("mouse out")}) */
/* boton.addEventListener("mousemove", ()=>{console.log("mouse move")}) */


//Eventos del teclado

/* let campoNombre = document.getElementById("nombre") */

//let boton = document.getElementById("boton")
/*  */
/* campoNombre.addEventListener("keydown", () => {console.log("detectamos presion de una tecla")}) */

/* campoNombre.onkeyup = ()=>{ console.log("detectamentos que se ha soltado una tecla")} */

/* campoNombre.oninput = ()=>{  */
/*     let maximo = 280; */
/*     let longTexto = campoNombre.value.length; */
/*     let diff = maximo - longTexto */
/*  */
/*     document.getElementById("resultado").innerHTML = "Caracteres disponibles" + diff */
/*  */
/* } */

/* let compania = document.getElementById("compania") */
/* compania.onchange= ()=>{ */
/*     document.getElementById("resultado").innerHTML = "Seleccionaste: " + compania.value */
/* } */


//Eventos con formularios
//Opción #1 => Botón del tipo "button"

/* validarFormulario = () => { */
/*     let usuario = document.getElementById("user").value; */
/*     let contrasenia = document.getElementById ("password").value; */
/*  */
/*     if ((usuario == "") || (usuario.length == 0 )){ */
/*         alert("Ingrese un valor para el campo nombre!"); */
/*         return false; // Detener la ejecución de mi script */
/*     } */
/*  */
/*     if (contrasenia == ""){ */
/*         alert("Ingrese un valor para el campo contrasenia!"); */
/*         return false; */
/*     } else if (contrasenia <6){ */
/*         alert("Ingrese un valor para el campo contraseña mayor a 6 caracteres") */
/*     } return false; */
/*  */
/*     document.getElementById("form1").submit(); // Dispara el formulario */
/* } */
/*  */
/* let btnForm = document.getElementById("btnForm"); */
/* btnForm.addEventListener("click", validarFormulario) */


//Opción #2 => Botón del tipo "submit"

let btnForm = document.getElementById("btnForm");
btnForm.addEventListener("click", validarFormulario)


validarFormulario = (e) => {

    e.preventDefault(); // Detener la ejecucón del envío del formulario

    
    

    if ((usuario == "") || (usuario.length == 0 )){
        alert("Ingrese un valor para el campo nombre!");
        return false; // Detener la ejecución de mi script
    }

    if (contrasenia == ""){
        alert("Ingrese un valor para el campo contrasenia!");
        return false;
    } else if (contrasenia <6){
        alert("Ingrese un valor para el campo contraseña mayor a 6 caracteres")
    } return false;

    document.getElementById("form1").submit(); // Dispara el formulario
}

let usuario = document.getElementById("user").value;
let contrasenia = document.getElementById ("password").value;
btnForm.addEventListener("click", validarFormulario); // Asociar la función al boton
form1.addEventListener("submit", validarFormulario) // Asociar la funcion al formulario