const MyPokemon = (props) => {

    return (
            <div style={{border: "1px black solid"}}>
                <p>Pokemon: {props.nombre}</p>
                <p>url: {props.link}</p>
            </div>
    )
}

export default MyPokemon;