// Agregar al final  quitar al final  Agregar al incio     quitar al incio       agregar o quitar en cualquier posicion
// Push,              pop,             unshift,            unshift,               splice
//                 0         1       2
//var nombres = ["Ricardo", "Pedro", "Juan"];

/*var nombre2 = nombres[1];
console.log(nombre2);

nombres[1] = "Claudio";
console.log(nombres);*/

/*nombres.push("Sandra");
console.log(nombres);

nombres.unshift("Carlos");
console.log(nombres);

nombres.pop();
console.log(nombres);

nombres.shift();
console.log(nombres);*/

// Eliminar un elemento en una posicion exacta
/*nombres.splice(1, 2);
console.log(nombres);*/

/*nombres.splice(1, 0, "Michael", "Claudia")
console.log(nombres);*/

// Objetos
/*var persona1 = {
//  key : value
nombre: "Ricardo",
edad: 35,
peso: 80,
campeonatos: 35
}

var persona2 = {
//  key : value
nombre: "Claudia",
edad: 30,
peso: 60
}

var persona3 = {
//  key : value
nombre: "Pedro",
edad: 30,
peso: 45
}

// leer
var nombrePersona1 = persona1.nombre;
console.log(nombrePersona1);

// agregar
persona2.altura = 168;
console.log(persona2);

// editar
persona2.edad = 50;
console.log(persona2);

// eliminar
delete persona3.peso;
console.log(persona3);*/

// Array de objetos

/*var personas = [
  // item: 0
  {
    nombre: "Carlos",
    edad: 20,
    peso: 45,
  },
  // item: 1
  {
    nombre: "Eduardo",
    edad: 70,
    peso: 80,
  },
  // item: 2
  {
    nombre: "Jorge",
    edad: 45,
    peso: 80,
  },
];*/

/*var personaSeleccionada = personas[1];
console.log(personaSeleccionada);

personas.unshift({
nombre: "Michael",
edad: 30,
peso: 100
});

console.log(personas);

personas[0] = {
  nombre: "Maria",
  edad: 40,
  peso: 50,
};

console.log(personas);*/

/*var nombrePersona3 = personas[2].nombre;
console.log(nombrePersona3);

personas[0].edad = 50;
console.log(personas);

personas[1].altura = 167;
console.log(personas);*/

let curso = {
    nombre: 'Desarrollo Web Fullstack',
    duracion: '6 meses',
    instructores: [
      { nombre: 'Carlos', especialidad: 'Frontend', experiencia: 5 },
      { nombre: 'Ana', especialidad: 'Backend', experiencia: 3 },
      //{ nombre: 'Claudia', especialidad: 'Server', experiencia: 10 }
    ],
    estudiantes: [
      { nombre: 'Luis', edad: 22, notas: [8, 9, 7] },
      { nombre: 'Marta', edad: 25, notas: [9, 9, 10] }
    ],
    temario: {
      frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
      backend: ['Node.js', 'Express', 'MongoDB']
    }
};

// 1. Añadir un nuevo instructor
curso.instructores.push({
    nombre: "Claudia",
    especialidad: "Server Side",
    experiencia: 10
});
//console.log(curso);

// 2. Modificar la edad de Luis a 40
curso.estudiantes[0].edad = 40;
//console.log(curso);

// 3. Agregar una nueva materia en frontend
curso.temario.frontend.push("Angular");
//console.log(curso);

// 4. Agregar una nota mas a Marta
curso.estudiantes[1].notas.push(20);
//console.log(curso.estudiantes[1].notas);


let cursos = [
    {
      nombre: 'Desarrollo Web Fullstack',
      duracion: '6 meses',
      instructores: [
        { nombre: 'Carlos', especialidad: 'Frontend', experiencia: 5 },
      ],
      estudiantes: [
        { nombre: 'Luis', edad: 22, notas: [8, 9, 7] },
        { nombre: 'Marta', edad: 25, notas: [9, 9, 10] }
      ],
      temario: {
        frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
        backend: ['Node.js', 'Express', 'MongoDB']
      },
      horario: {
        lunes: "9am - 6pm",
        martes: "9am - 6pm",
        miercoles: "9am - 6pm",
        jueves: "9am - 6pm",
        viernes: "9am - 6pm"
      }
    },

    {
      nombre: 'Desarrollo Mobile',
      duracion: '7 meses',
      instructores: [
        { nombre: 'Michael', especialidad: 'mobile', experiencia: 10 },
      ],
      estudiantes: [
        { nombre: 'Luis', edad: 22, notas: [8, 9, 7] },
        { nombre: 'Marta', edad: 25, notas: [9, 9, 10] }
      ],
      temario: {
        database: ['sqllite'],
        ui: ['flutter', "Kotlin", "Swift"]
      },
      horario: {
        lunes: "11am - 8pm",
        martes: "11am - 8pm",
        miercoles: "11am - 8pm",
        jueves: "11am - 8pm",
        viernes: "11am - 8pm",
      }
    }
]

// 5. Agregar un nuevo estudiante al curso de desarrollo mobile
/*cursos[1].estudiantes.push({
    nombre: "Claudia",
    edad: 30,
    notas: [10, 2, 15]
});*/

//console.log(cursos[1].estudiantes);

//                 0         1        2         3         4       5         6
//var nombres = ["Ricardo", "Pepe", "Claudia", "Marcos", "Juan", "Edgar", "Eduardo"];

//for

//              i < 7
/*for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

nombres.forEach((nom, index) => {
    console.log(index + "-" + nom);
})

var nombreV2 = nombres.map( (nom, index) => "hola " + nom );
var nombresV2 = nombres.filter( (nom, index) => (nom == "Marcos" && index > 2));

console.log(nombresV2);
*/

var personas = [
    // item: 0
    {
      nombre: "Carlos",
      edad: 20,
      peso: 45,
    },
    // item: 1
    {
      nombre: "Eduardo",
      edad: 70,
      peso: 80,
    },
    // item: 2
    {
      nombre: "Jorge",
      edad: 45,
      peso: 80,
    },
];

/*personas.forEach( (per, index) => {
    console.log(per.nombre);
} )*/


// 1. imprimir el horario de los martes de cada curso
/*cursos.forEach( (cur, index) => {
    console.log(cur.horario.martes);
} )*/

// 2. Regresar un array de "nombre " + "duracion" por cada curso
/*[
    "Desarrollo Web Fullstack - 6 meses",
    "Desarrollo Mobile - 7 meses"
]
*/

//var newCursosV2 = cursos.map( (cur, index) => `${cur.nombre} - ${cur.duracion}`)
//console.log(newCursosV2);

// 2. Regresar un array de "nombre " + "horario del dia viernes" por cada curso
/*[
    "Desarrollo Web Fullstack - 9am - 6pm",
    "Desarrollo Mobile - 11am - 8pm"
]
*/

var newCursosV2 = cursos.map( (cur, index) => `${cur.nombre}  -  ${cur.horario.viernes}`);

console.log(newCursosV2);

















