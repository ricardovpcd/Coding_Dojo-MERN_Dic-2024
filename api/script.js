function getPokemon(){
    /*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });*/

    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/pikachu",
        method: "GET",
        success: function(respuesta){
            /*console.log(respuesta.name);
            console.log(respuesta.height);*/

            var elemento = $("#pokemonName");
            elemento.text(respuesta.name);

            var elemento2 = $("#pokemonHeight");
            elemento2.text(respuesta.height);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function getMovie(){
    $.ajax({
        url: "https://freetestapi.com/api/v1/movies/1",
        method: "GET",
        success: function(respuesta){
            $("#movieTitle").text(respuesta.title);
            $("#movieYear").text(respuesta.year);

            console.log(respuesta.actors);
        }
    })
}

function darClick(){
    /* var elemento = document.getElementById("username");
    var elemento = document.querySelector("#username");
    console.log(elemento.value); */

    var elemento = $("#username");
    elemento.css("color", "red");
    elemento.val("Ricardo");
    elemento.addClass("myText");

    //console.log(elemento.val());
}