import { useState } from "react";
import MyNumber from "../myNumber/myNumber";

const MyCounters = () => {
    const [listaContadores, setListaContadores] = useState([ 0, 0, 0 ])

    const addCounter = () => {
        var copyList = [...listaContadores];
        copyList.push(0);
        setListaContadores(copyList);
    }
    
    return (
        <>
            <button onClick={addCounter}>Agregar Contador</button>
            {
                listaContadores.map( (element, index) => {
                    return <div key={index}>
                        <MyNumber indice={index} 
                                  number={element}
                                  lista={listaContadores}
                                  setLista={setListaContadores}></MyNumber>
                    </div>
                } )
            }
        </>
    )
}

export default MyCounters;