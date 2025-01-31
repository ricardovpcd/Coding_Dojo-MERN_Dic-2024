const Productos = (props) => {
    console.log(props.lista);

    return (
        <>
            {
                props.lista.map( (item, index) => {
                    return <h3>El producto #{index + 1} es: {item}</h3>
                } )
            }
        </>
    )
}

export default Productos;