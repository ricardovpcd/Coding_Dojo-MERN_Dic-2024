import { useState } from "react";
import axios from "axios";

const CreateBookPage = () => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [description, setDescription] = useState("");
    const [available, setAvailable] = useState(false);

    const createBook = async () => {
        if(title.length == 0 || year.length == 0 || description.length == 0){
            alert("Ingrese todos los datos");
            return;
        }

        var data = {
            "title": title,
            "year": year,
            "description": description,
            "available": available
        }

        await axios.post("http://localhost:8080/createBook", data);

        alert("Se ha creado correctamente el libro");
        
        setTitle("");
        setYear(0);
        setDescription("");
        setAvailable(false);
    }

    return (
        <>
            <h1>Crear libro</h1>
            <div style={{display: "flex", flexDirection: "column", alignItems: "start", gap: "10px"}}>

                <label>Titulo</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                <label>Año de publicación</label>
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)}/>

                <label>Descripción</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                <label>¿Disponible?</label>
                <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)}/>

                <button onClick={createBook}>Crear libro</button>

            </div>
        </>
    )
}

export default CreateBookPage;