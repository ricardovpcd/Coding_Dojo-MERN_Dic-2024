import { useState } from "react";
import styles from "./myButton.module.css";

const MyButton = ( {titulo, color: myColor} ) => {
    const [ numero, setNumero ] = useState(0);
    const [ myState, setMyState ] = useState([]);

    const click = () => {
        /*var add = numero + 1;
        setNumero(add);*/

        setNumero(numero + 1);
    }

    const disminuir = () => {
        setNumero(numero - 1);
    }

    return(
        <div>
            <h1>  {numero}  </h1>
            <button onClick={click} 
                    className={styles.baseStyle}
                    style={ {textDecoration: "underline"} }> {titulo} </button>

            <button onClick={disminuir}>Disminuir</button>
        </div>
    )
}

export default MyButton;