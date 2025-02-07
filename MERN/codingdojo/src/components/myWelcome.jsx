const MyWelcome = (props) => {
    return (
        <>
            <div>
                <p>Hola {props.name}!</p>
                <p>Bienvenido al puesto #{props.indice + 1}</p>
            </div>
        </>
    )
}

export default MyWelcome;