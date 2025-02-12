import axios from "axios";
import { useState } from "react";

const PokemonSearch = () => {
    const [pokemonData, setPokemonData] = useState({});

    const getData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((result) => {
            setPokemonData(result.data)
        })
    }

    return (
        <>
            <button onClick={getData}>Traer Datos</button>

            <p>El nombre es: {pokemonData.name} </p>

            <p>La altura es: {pokemonData.height} </p>

            <p>El peso es: {pokemonData.weight} </p>

        </>
    )
}

export default PokemonSearch;