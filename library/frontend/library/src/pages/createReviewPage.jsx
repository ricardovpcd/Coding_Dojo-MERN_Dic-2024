import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const CreateReviewPage = () => {
    const {
            register,
            getValues,
            trigger,
            reset,
            formState: { errors },
          } = useForm({
            defaultValues: {
                comment: ""
            }
          });

    const params = useParams();

    const createReview = async () => {
        var validate = await trigger(["comment"]);
        if(!validate){
            alert("Ingrese todos los datos");
            return;
        }

        var data = getValues();
        var objcreate = {
            comment: data.comment,
            bookId: params.id
        }

        await axios.post("http://localhost:8080/createReview", objcreate);
        alert("Comentario creado!");
        reset();
    }

    return (
        <>
            <h1>Crear Comentario</h1>
            <div style={{display: "flex", flexDirection: "column", alignItems: "start", gap: "10px"}}>

                <label>Comentario</label>
                <textarea {...register("comment", { required: true })}></textarea>
                <p>{ errors.comment?.message }</p>

                <button onClick={createReview}>Crear comentario</button>

            </div>
        </>
    )
}

export default CreateReviewPage;