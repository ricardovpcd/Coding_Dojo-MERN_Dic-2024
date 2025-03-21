import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

const EditBookPage = () => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);
    const [description, setDescription] = useState("");
    const [available, setAvailable] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        getBookData();
    }, []);

    const getBookData = async () => {
        var response = await axios.get("http://localhost:8080/getBookById/" + params.id);

        setTitle(response.data.title);
        setYear(response.data.year);
        setDescription(response.data.description);
        setAvailable(response.data.available);
    }

    const updateBook = async () => {
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

        await axios.put("http://localhost:8080/updateBook/" + params.id, data);
        alert("El libro se actualizo correctamente");
        socket.emit("message", true);
        //navigate("/");
    }

    return (
        <>
            <h1>Editar libro</h1>
            <div style={{display: "flex", flexDirection: "column", alignItems: "start", gap: "10px"}}>

                <label>Titulo</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                <label>Año de publicación</label>
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)}/>

                <label>Descripción</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                <label>¿Disponible?</label>
                <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)}/>

                <button onClick={updateBook}>Editar libro</button>
            </div>
        </>
    )
}

export default EditBookPage;