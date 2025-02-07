const MyNumber = (props) => {
    const addNumber = (indexCounter) => {
        var listCopy = [...props.lista];

        var counterActual = listCopy[indexCounter];
        counterActual += 1;

        listCopy[indexCounter] = counterActual;
        props.setLista(listCopy);
    }

    const reduceNumber = (indexCounter) => {
        var listCopy = [...props.lista];

        var counterActual = listCopy[indexCounter];
        counterActual -= 1;

        listCopy[indexCounter] = counterActual;
        props.setLista(listCopy);
    }

    return (
        <div>
            <p style={{display: "inline-block"}}>Contador #{props.indice + 1}: {props.number}</p>
            <button onClick={ () => addNumber(props.indice)}>+</button>
            <button onClick={ () => reduceNumber(props.indice)}>-</button>
        </div>
    );
}

export default MyNumber;