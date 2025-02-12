var animales = ["elefante", "Perro", "gato", "ave"];
//console.log(animales[1]);

var persona = {
    name: "Carlos",
    age: 50,
    heigth: 167
}

//console.log(persona.age);



var autos = [
    {
        brand: "bmw",
        color: "red",
        seats: 5
    }, 
    {
        brand: "Audi",
        color: "blue",
        seats: 4
    }, 
    {
        brand: "subaru",
        color: "gray",
        seats: 2
    }
]

//console.log(autos[1].color);

autos.map( (car) => {
    console.log(car.brand);
} )
