// ALCANCE = SCOPE
// if, for, try catch, 
var nombre = "Ricardo";
let edad = 30;
let isTeacher = true;

if(true){
    var nombre = "Juan";
    let edad = 25;
    let isTeacher = false;
    //console.log(isTeacher);
}

//console.log(nombre);
//console.log(edad);
//console.log(isTeacher);

// ELEVACION = HOISTING

//saludar();

var pais = "Peru";
pais = "Colombia";
let stack = "MERN";
const color = "Rojo";

function saludar(){
    console.log("Hola");
}

//saludar();

function despedir(){
    console.log("Adios");
}

//console.log(pais);

// ---------- INTERPRETADOR ELEVANDO
/*var pais;
function saludar(){
    console.log("Hola");
}
function despedir(){
    console.log("Adios");
}

saludar();

pais = "Peru";
pais = "Colombia";
let stack = "MERN";
const color = "Rojo";

saludar();
console.log(pais);*/

// TRY CATCH (Handler del error)
try {
    var bootcamp = "Coding MERN";
    //console.log(bootcamp);

    //decirHola(); // aqui esta el error
} catch(error) {
    if(error instanceof TypeError){

    } else  if(error instanceof RangeError){

    }
    //console.log("Hubo un error");
} finally {
    ///console.log("Finally");
}

var nivel = "Amarillo";
//console.log(nivel);

function sumar(numero1, numero2){
    try {
        return numero1 + numero2;
    } catch(error) {
        console.log("Hubo un error en el metodo sumar", error);
    }
}

//sumar(3, 4);
//console.log("Ricardo");

// foreach y map
//                  0        1         2
var nombres = ["Ricardo", "Marcos", "diego"];
for(var i = 0; i < nombres.length; i++){
    //console.log(nombres[i]);
}

nombres.forEach((element, index) => {
    //console.log(index, element);
});

var modificado = nombres.map((elemento) => {
    elemento = "hola " + elemento;
    return elemento;
});
//        0
// ["Hola Ricardo", "Hola Marcos", "Hola Diego"]
//console.log(modificado);

var arrayAnimales = [
    {
        raza: "Bulldog",
        tipo: "Perro",
        edad: 10
    }
    ,
    {
        raza: "Golden",
        tipo: "Perro",
        edad: 14
    }
    ,
    {
        raza: "Chihuahua",
        tipo: "Perro",
        edad: 15
    }
];

var textoAnimales = arrayAnimales.map((element) => {
    var texto = "El animal es un " + element.tipo + " y tiene " + element.edad + " años";
    return texto;
});

//console.log(textoAnimales);

var notas = [10, 15, 8, 20, 12];

/*["La nota 10 es desaprobado",
    "La nota 15 es aprobado",
    "La nota 8 es desaprobado",
    "La nota 20 es aprobado",
    "La nota 12 es aprobado"
]
*/

var notasTexto = notas.map((element) => {
    return (element > 11) ? `La nota ${element} Es aprobado` : `La nota ${element} Es desaprobado`;
});

//console.log(notasTexto);


// axios
/*llamadaAEndpoint
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.log(error);
})*/

/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then((resultado)=>{
    console.log(resultado);
})
.catch((error) => {
    console.log("error: ", error);
});*/

/*async function restar(numero1, numero2){
    var calculo = numero1 + numero2;
    return calculo;
}*/

/*restar(3, 4)
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Siempre me ejecuto");
});*/

async function contador(){
    //miMetodo();
    return "Se termino el contador!";
}

contador()
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.log("Hubo un error en el promise")
})
.finally(() => {
    console.log("Finally")
});