import axios from "axios";
import {useForm} from "react-hook-form";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

const CreateBookPage = () => {
    const {
        register,
        getValues,
        trigger,
        reset,
        formState: { errors },
      } = useForm({
        defaultValues: {
            title: "",
            year: "",
            description: "",
            available: false
        }
      });

    const createBook = async () => {
        var validate = await trigger(["title", "year", "description"]);
        if(!validate){
            alert("Ingrese todos los datos");
            return;
        }

        var data = getValues();
        await axios.post("http://localhost:8080/createBook", data);

        alert("Se ha creado correctamente el libro");
        reset();
        socket.emit("message", true);
    }

    return (
        <>
            <h1>Crear libro</h1>
            <div style={{display: "flex", flexDirection: "column", alignItems: "start", gap: "10px"}}>

                <label>Titulo</label>
                <input type="text" {...register("title", { required: "El titulo es requerido" })}/>

                <label>Año de publicación</label>
                <input type="number" {...register("year", { required: true })}/>

                <label>Descripción</label>
                <textarea {...register("description", { required: true })}></textarea>

                <label>¿Disponible?</label>
                <input type="checkbox" {...register("available")}/>

                <button onClick={createBook}>Crear libro</button>

            </div>
        </>
    )
}

export default CreateBookPage;