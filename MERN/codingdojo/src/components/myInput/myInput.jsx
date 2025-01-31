// { "etiqueta": "Ingresar usuario" }
//import "./myInput.css";
import estilos from "./myInput.module.css";
const MyInput = (props) => {

    const myKeyDown = () => {
        console.log("Se apreto el teclado");
    }

    return (
        <div>
            <input type="text" className={estilos.baseStyle} onKeyDown={myKeyDown} placeholder={props.etiqueta}/>
        </div>
    )
}

export default MyInput;