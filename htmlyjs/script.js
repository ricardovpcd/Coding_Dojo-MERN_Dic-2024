// p, label, h, span
function cambiarTitulo(){
    var elemento = document.querySelector("p");
    //console.log(elemento.innerText);
    elemento.innerText = "Adios Mundo";
}

// input (text, password, email, phone, checkbox, textarea, etc)
function obtenerDato(){
    var elemento = document.querySelector("#usuario");
    // var elemento = document.getElementById("usuario");
    // var elemento = document.getElementsByClassName("myText");
    // var elemento = document.getElementsByTagName("div")
    
    //console.log(elemento.value);
    elemento.value = "Edgar";
}

function contar(){
    var elemento = document.querySelector("#numero");
    var calculo = parseInt(elemento.innerText) + 1;
    elemento.innerText = calculo;
}

function saludar(){
    var elemento = document.querySelector("#nombre");
    var saludo = "Hola " + elemento.value;
    elemento.value = saludo;
}

function cambiarColor(){
    var elemento = document.querySelector("#textoColor");
    elemento.style.color = "red";
    elemento.style.fontSize = "30px";
    elemento.style.fontWeight = "bold";

    alert("Se cambio el diseño")
}

function cambiarEstiloInput(){
    var elemento = document.querySelector("#inputEstilo");
    elemento.style.color = "red";
    elemento.style.backgroundColor = "green";
    elemento.style.border = "2px solid blue";

    //elemento.style.borderColor = "blue";
}

function cambiarATodosLosText(){
    var elementos = document.querySelectorAll(".myText");
    for(var i = 0; i < elementos.length; i++){
        console.log(elementos[i]);
        elementos[i].value = "Hola input " + i;
        elementos[i].style.color = "red";
    }
}