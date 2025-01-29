// {"titulo": "Login", "color": "red"}

const MyButton = ( {titulo, color: myColor} ) => {
    const click = () => {
        console.log("Hola Mundo");
    }

    return(
        <div>
            <button onClick={click}> {titulo} </button>
        </div>
    )
}

export default MyButton;