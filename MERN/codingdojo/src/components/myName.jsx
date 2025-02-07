const MyName = (props) => {
    const deleteName = (indexName) => {
        var copiaLista = [...props.lista];
        copiaLista.splice(indexName, 1);
        props.setLista(copiaLista);
    }

    const editName = (indexName) => {
        var newName = prompt("Ingrese el nombre editado");
        var copiaLista = [...props.lista];
        copiaLista[indexName] = newName;
        props.setLista(copiaLista);
    }

    return (
        <div>
            <p style={{display: "inline-block"}}>Hola {props.name}!</p>
            <button onClick={() => deleteName(props.indice)}>Eliminar</button>
            <button onClick={() => editName(props.indice)}>Editar</button>
        </div>
    )
}

export default MyName;