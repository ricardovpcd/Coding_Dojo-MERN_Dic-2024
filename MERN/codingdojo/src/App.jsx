import { useState } from "react";
import PersonCard from "./components/personCard";

const App = () => {
    const [listaPersonas, setListaPersonas] = useState([]);

    const [personName, setPersonaName] = useState("");
    const [personAge, setPersonAge] = useState(0);
    const [personCountry, setPersonCountry] = useState("");

    const createPerson = () => {
        var newPerson = {
            name: personName,
            age: personAge,
            country: personCountry
        }

        var listaPersonasTemp = [...listaPersonas];
        listaPersonasTemp.push(newPerson);
        setListaPersonas(listaPersonasTemp);
    }

    const deletePerson = (index) => {
        var listaPersonasTemp = [...listaPersonas];
        listaPersonasTemp.splice(index, 1);
        setListaPersonas(listaPersonasTemp);
    }

    const changeAge = (index) => {
        var listaPersonasTemp = [...listaPersonas];
        listaPersonasTemp[index].age = 18;
        setListaPersonas(listaPersonasTemp);
    }

    return (
        <>  
            <label>Nombre</label>
            <input type="text" value={personName} onChange={(e) => setPersonaName(e.target.value)}/>

            <label>Edad</label>
            <input type="number" value={personAge} onChange={(e) => setPersonAge(e.target.value)}/>

            <label>Pais</label>
            <input type="text" value={personCountry} onChange={(e) => setPersonCountry(e.target.value)}/>

            <button onClick={createPerson}>Crear Persona</button>

            <hr />

            {
                listaPersonas.map( (per, indice) => {
                    return <div style={{marginBottom: "10px", border: "1px black solid"}}>
                                <button style={{backgroundColor: "red"}} onClick={ () => deletePerson(indice) }>Eliminar Persona</button>
                                <button onClick={ () => changeAge(indice)}>Cambiar Edad a 18</button>
                                <PersonCard name={per.name} age={per.age} country={per.country}/>
                            </div>;
                } )
            }
        </>
    )
}

export default App;