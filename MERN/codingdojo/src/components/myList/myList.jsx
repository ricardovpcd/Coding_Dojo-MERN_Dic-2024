import { useState } from "react";
import MyName from "../myName";

const MyList = () => {     
    const [listaNombres, setListaNombres] = useState( [ "Ricardo", "Juan", "carlos" ] );

    const addName = () => {
        var newName = prompt("Ingrese el nuevo nombre");
        var copiaLista = [...listaNombres];
        copiaLista.push(newName);
        setListaNombres(copiaLista);
    }
    
    return (
        <>
            <button onClick={addName}>Agregar nombre</button>
            {
                listaNombres.map( (nombre, index) => {
                    return  <div key={index}>
                                <MyName name={nombre} 
                                        indice={index} 
                                        lista={listaNombres} 
                                        setLista={setListaNombres}></MyName>
                            </div>
                } )
            }
        </>
    )
}
export default MyList;