// OPERADOR TERNARIO
var mensaje = "";
var edad = 15;

/* if(edad > 18){
    mensaje = "Eres Mayor de edad";
} else {
    mensaje = "Eres Menor de edad";
} */   

//                             if                    else
mensaje = (edad > 18) ? "Eres Mayor de edad" : "Eres Menor de edad";
//console.log(mensaje);


var module = "WEB";
var cinturones = [];

/*if(module == "WEB"){
    cinturones = ["Amarillo"];
} else {
    cinturones = ["Amarillo", "Rojo", "Negro"];
}*/

//                            if                   else 
cinturones = (module == "WEB") ? ["Amarillo"] : ["Amarillo", "Rojo", "Negro"];
// cinturones = ["Amarillo"];

//console.log(cinturones);

var nota = 15; // nota aprobatoria es mayor a 12
var aprobado = false;

// operador ternario
aprobado = (nota > 12) ? true : false;

//console.log(aprobado);

// VAR, LET, CONST

// VAR
// declarar
var nombre = "Ricardo";
var edad = 34;

// modificar
nombre = "Juan";
edad = 50;

// redeclarar
var nombre = "Michael";

// LET
// declarar
//let pais = "Perú";

// modificar
pais = "Colombia";

// No Redeclarar
//let pais = "Uruguay";

// CONST
// declarar
const esProfesor = true;

// NO Modificar
//esProfesor = false;

// No Redeclarar
//const esProfesor = true;


// DESTRUCTURACION DE ARRAYS
//                0          1            2          3
var stacks = ["Reactjs", "Expressjs", "Mongodb", "Nodejs"];

/*var stack_1 = stacks[0];
var stack_2 = stacks[1];
var stack_3 = stacks[2];
var stack_4 = stacks[3];*/

//var [stack_1, myStack2, stack_3, stack_4] = stacks;
//var [ , myStack2, stack_3] = stacks;
//var [ , myStack2, , stack_4] = stacks;
var [ , , , stack_4] = stacks;

//console.log(stack_1);
//console.log(myStack2);
//console.log(stack_3);
//console.log(stack_4);

//              0   1   2  3   4   5
var precios = [10, 20, 30, 5, 40, 45];
var [ , precio_1, , precio_2, , precio_3] = precios;
//console.log(precio_1 + precio_2 + precio_3);

// DESTRUCTURACION DE OBJETOS
var persona = {
    // Key : Value
    altura: 180,
    nombre: "Ricardo",
    edad: 35,
    pais: "Perú",
}

/*var nombre = persona.nombre;
var edad = persona.edad;
var pais = persona.pais;
var altura = persona.altura;
*/

//var {edad: myEdad, pais, altura, nombre: nombre_persona} = persona;
var {altura: myAltura, edad: myEdad} = persona; 

/*console.log(myAltura);
console.log(myEdad);*/

//
var persona = {
    stacks: ["reactjs", "javasript"],
    experiencia: 10,
    titulo: "Senior Software Engineer"
}

var { stacks: myStacks } = persona;
//                 0          1
// myStacks = [ 'reactjs', 'javasript' ];

var [stack_1, stack_2] = myStacks;

/*console.log(stack_1);
console.log(stack_2);*/

// REST PARA ARRAYS
//                 0       1        2      3        4      5
var animales = ["Perro", "Gato", "Raton", "Ave", "Sapo", "Pez"];

//var [animal_1, animal_2, ...restAnimals] = animales;

var [ , animal_2, animal_3, ...restAnimals] = animales;

/*console.log(animal_2);
console.log(animal_3);
console.log(restAnimals);*/

// REST PARA OBJETOS
var animal = {
    edad: 10,
    raza: "Golden",
    tipo: "Perro"
}

var { raza: myRaza, ...otrosAtributos } = animal;
/*console.log(myRaza);
console.log(otrosAtributos);*/

// SPREAD PARA ARRAYS
var numeros = [1, 2, 3];
var copiaNumeros = [...numeros];
// copiaNumeros = [1, 2, 3];
numeros.push(4);
// numeros = [1, 2, 3, 4]

/*console.log(numeros);
console.log(copiaNumeros);*/

// SPREAD PARA OBJETOS
var material = {
    costo: 30.4,
    cantidad: 5
}

var copiaMaterial = {...material};
/*console.log(material);
console.log(copiaMaterial);*/

// ARROW FUNCTIONS
/*function sumar(numero_1, numero_2){
    var calculo = numero_1 + numero_2;
    return calculo;
}*/

/*var sumar = (numero_1, numero_2) => {
    return numero_1 + numero_2;
}*/

var sumar = (numero_1, numero_2) => numero_1 + numero_2;
var restar = (numero_1, numero_2) => numero_1 - numero_2;
var saludar = nombre => "Hola " + nombre;
var despedirse = () => console.log("Adios");

/*var total = sumar(10, 4);
console.log(total);
saludar("Carlos");
despedirse();*/

var multiplicar = (numero_1, numero_2) => {
    console.log(numero_1);
    console.log(numero_2);
    console.log(this);
}

multiplicar(1, 3);