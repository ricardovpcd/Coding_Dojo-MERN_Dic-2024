import axios from "axios";
import { useState } from "react";
import MyPokemon from "../myPokemon";

const MyPokemonsList = () => {
    const [listaPokemons, setListPokemons] = useState([]);

    const getPokemonsList = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        .then((response) => {
            setListPokemons(response.data.results);
        });
    }

    return (
        <>
            <button onClick={getPokemonsList}>Obtener Lista</button>

            {
                listaPokemons.map((pokemon) => {
                    return <MyPokemon nombre={pokemon.name} link={pokemon.url}></MyPokemon>
                })
            }
        </>
    )
}

export default MyPokemonsList;