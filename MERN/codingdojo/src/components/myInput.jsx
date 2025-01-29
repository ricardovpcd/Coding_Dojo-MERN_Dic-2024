// { "etiqueta": "Ingresar usuario" }
const MyInput = (props) => {

    const myKeyDown = () => {
        console.log("Se apreto el teclado");
    }

    return (
        <div>
            <input type="text" onKeyDown={myKeyDown} placeholder={props.etiqueta}/>
        </div>
    )
}

export default MyInput;